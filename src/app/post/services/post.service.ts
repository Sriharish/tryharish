import { FeedStore } from './feed-store.service';
import { PostFirestore } from './post-firestore.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { tap, map } from 'rxjs/operators';
import { state } from '@angular/animations';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(
        private firestore: PostFirestore,
        private store: FeedStore    
    ) {
        this.firestore.collection$().pipe(
            tap(posts => {
                this.store.patch({
                    loading: false,
                    posts,
                    totalPosts: posts.length        
                }, `post collection subscription`)
            })
        ).subscribe();
    }

    get posts$(): Observable<Post[]> {
        return this.store.state$.pipe(map(state => state.loading ? [] : state.posts));
    }

    get loading$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => state.loading));
    }

    get totalPosts$(): Observable<number> {
        return this.store.state$.pipe(map(state => state.totalPosts))
    }

    get noResults$(): Observable<boolean> {
        return this.store.state$.pipe(map(state => {
            return !state.loading && state.totalPosts === 0
        }));
    }

    get formStatus$(): Observable<string> {
        return this.store.state$.pipe(map(state => state.formStatus));
    }

    create(post: Post) {
        this.store.patch({
            loading: true,
            posts: [],
            formStatus: 'Saving...'
        }, 'post create');
        return this.firestore.create(post).then(_ => {
            this.store.patch({
                formStatus: 'Saved!'
            }, 'post create success')
            setTimeout(() => this.store.patch({
                formStatus: ''
            }, 'post create timeout reset formStatus'), 2000);
        }).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'post create failed'
            }, 'post create error');
        })
    }

    delete(id: string): any {
        this.store.patch({
            loading: true,
            posts: []
        }, 'employee delete');
        return this.firestore.delete(id).catch(err => {
            this.store.patch({
                loading: false,
                formStatus: 'post delete error'
            }, 'post delete error')
        })
    }
}

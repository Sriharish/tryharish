import { Injectable } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service';
import { Post } from '../models/post';

@Injectable({
    providedIn: 'root'
})
export class PostFirestore extends FirestoreService<Post> {

    protected basePath: string = 'posts';

}
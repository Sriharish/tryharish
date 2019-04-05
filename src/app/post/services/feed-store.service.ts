import { FeedState } from '../states/feed.state';
import { StoreService } from '../../core/services/store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeedStore extends StoreService<FeedState> {
    protected store: string = 'feed';

    constructor() {
        super({
            loading: true,
            posts: [],
        });
    }
}
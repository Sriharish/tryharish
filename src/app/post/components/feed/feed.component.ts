import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {

  loading$: Observable<boolean>;
  posts$: Observable<Post[]>;
  noResults$: Observable<boolean>;

  constructor(
    private postService: PostService
  ) {}

  ngOnInit() {
    this.loading$ = this.postService.loading$;
    this.posts$ = this.postService.posts$;
    this.noResults$ = this.postService.noResults$;
  }

  ngOnDestroy(): void {
    
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './components/post-page/post-page.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { MaterialModule } from '../core/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PostPageComponent,
    NewPostComponent,
    FeedComponent,
    PostPreviewComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    PostPageComponent,
    NewPostComponent,
    FeedComponent,
    PostPreviewComponent
  ]
})
export class PostModule { }

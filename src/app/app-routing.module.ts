import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { NewPostComponent } from './post/components/new-post/new-post.component';
import { FeedComponent } from './post/components/feed/feed.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      { path: 'new-post', component: NewPostComponent },
      { path: 'feed', component: FeedComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

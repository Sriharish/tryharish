import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
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

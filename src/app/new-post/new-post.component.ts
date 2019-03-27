import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../types';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post: any = {};
  
  constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) { 
    this.post.date = null;
    this.post.content = null;
  }

  ngOnInit() {

  }

  onSubmit() {
    this.post.date = new Date(this.post.date).valueOf();
    this.db.list('posts').push(this.post)
    .then(_ => {
      this.post.date = null;
      this.post.content = null;
      this.snackBar.open('Saved!', null, {
        duration: 4000
      })
    })
  }

}

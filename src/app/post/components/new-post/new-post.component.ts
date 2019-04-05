import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  form: FormGroup;
  status$: Observable<string>;
  
  constructor(private postService: PostService, private fb: FormBuilder, private snackBar: MatSnackBar) { 

  }

  ngOnInit() {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.nullValidator),
      headerImage: new FormControl('', Validators.required),
      thumbnail: new FormControl('', Validators.nullValidator),
      description: new FormControl('', Validators.required),
      handle: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });

    this.status$ = this.postService.formStatus$;
  }

  async onSubmit() {
    if(this.form.valid) {
      this.form.disable();
      let newPost: Post = { ...this.form.value };
      newPost.date = Date.now();
      await this.postService.create(newPost);
      this.form.reset();
      this.form.enable();
      this.snackBar.open('Success!');
    }
  }

}

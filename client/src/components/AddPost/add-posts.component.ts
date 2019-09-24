import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../interface/post";
import {PostService} from "../../app/shared/services/post.service";

@Component({
  selector: 'add-post',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.less']
})

export class AddPostComponent implements OnInit{
  post: Post = {
    title: '',
    text: '',
    date: '',
    authorId: null
  };

  form: FormGroup;

  constructor(private postService: PostService){}

  addPost() {
    if(this.form.invalid){
      return
    }

    this.post = {
      title: this.form.value.title,
      text: this.form.value.text,
      authorId: parseInt(localStorage.getItem('id')),
      date: this.postService.getDate()
    };

    this.postService.addPost(this.post)
      .subscribe(() => {
        this.form.reset();
      })
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ]),
    })
  }
}

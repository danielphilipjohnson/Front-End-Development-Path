import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../../shared/class/comment';
import { CommentsService } from '../../services/comments.service';
import { Post } from '../../shared/class/post';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  
  @Input() posts: Post[];

  postIDkey: string;
  commentIDkey: string;
  submitted = false;

  correctPost: Post;
  correctComments: Comment[];

  commentForm = this.fb.group({

    photoId: [12],
    userId: [45],
    body: ['', Validators.required],
    username: ['vputtan18'],
    avatar: ['https://robohash.org/suscipitmodiconsequatur.png?size=50x50&set=set1'],
    postId: ['needed'],

  });


  constructor(private fb: FormBuilder, 
    private commentsService: CommentsService) { }

  ngOnInit() {

    this.postIDkey = this.generateId();
    this.commentIDkey = this.generateId();

  }

  generateId() {

    let r = Math.random().toString(36).substring(7);
    return r;

  }


  onSubmit(event: Event) {

    if (!this.postIdTamperedWith(event.currentTarget)) {
      let postId = this.cleanPostID(event.currentTarget);
      console.log(postId)

      this.correctPost = Post.getCorrectPost(this.posts, postId);

      this.correctComments = Post.getComments(this.correctPost);

      if (this.validateFormFields(this.commentForm.value)) {

        let comment = new Comment(this.correctPost.id, this.commentForm.value)

        this.commentsService.addComment(comment)
          .subscribe(comment => this.correctComments.push(comment))
        this.commentForm.patchValue({
          body: ''

        });
      }
    }
  }

  postIdTamperedWith(target: EventTarget): boolean {
    // get the form id
    let postId = target['id'];

    postId = postId.replace(this.postIDkey + '-', '');

    // if the values are not numbers the form has been tampered with
    if (!isNaN(postId)) {
      return false

    }
    else {
      return true;
    }

  }

  // Expected  "asasasa-0"
  cleanPostID(target: EventTarget): string {

    // get the form id
    let postId = target['id'];

    postId = postId.replace(this.postIDkey + '-', '');

    return postId
  }


  validateFormFields(formValues) {

    for (let key in formValues) {
      console.log(formValues[key]);
      if (formValues[key].toString().trim() === "") {
        return false;
      }
    }

    console.log("everything is correct");
    return true;
  }

}

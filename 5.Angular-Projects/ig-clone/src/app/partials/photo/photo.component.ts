import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Comment } from '../../shared/class/comment';
import { CommentsService } from '../../services/comments.service';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo;
  

  commentForm = this.fb.group({
    body: ['', Validators.required],
  });

  submitted = false;



  constructor(private fb: FormBuilder, private commentsService: CommentsService) { }

  ngOnInit() {
    

  }
  onClick() {

    let comment = new Comment(this.photo.id, this.commentForm.value)

    this.commentsService.addComment(comment)
      .subscribe(comment => this.photo.comments.push(comment))

    this.commentForm.reset();

  }
}
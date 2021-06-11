import { Component, OnInit } from '@angular/core';
import { FetchPhotoPostsService } from '../services/fetch-photo-posts.service'
import { FormBuilder } from '@angular/forms';

import { Post } from '../shared/class/post';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  start = 1;

  recentPhotos: Post[];
  extraPhotos: Post[];

  constructor(private fetchPhotoPostsService: FetchPhotoPostsService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.fetchPhotoPostsService.getRecentPhoto(this.start)
      .subscribe(recentPhotos => this.recentPhotos = recentPhotos);
  }

  onScrollDown() {

    setTimeout(() => {

      this.start += 1;
      this.fetchPhotoPostsService.getRecentPhoto(this.start).subscribe(extraPhotos => this.extraPhotos = extraPhotos);

    }, 100)
  }

  onScrollUp() {
    // implement refresh
    console.log('scrolled up!!');

  }
}
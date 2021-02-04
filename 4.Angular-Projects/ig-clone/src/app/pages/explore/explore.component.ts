import { Component, OnInit } from '@angular/core';
import { FetchPhotoPostsService } from '../../services/fetch-photo-posts.service'
import { Post } from '../../shared/class/post';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  
  photos: Post[]
  
  constructor(
    private fetchPhotoPostsService: FetchPhotoPostsService) { }

  ngOnInit() {

    this.getExploreImage();

  }

  getExploreImage(): void {

    this.fetchPhotoPostsService.getExploreImages().subscribe(photos => this.photos = photos);

  }
}
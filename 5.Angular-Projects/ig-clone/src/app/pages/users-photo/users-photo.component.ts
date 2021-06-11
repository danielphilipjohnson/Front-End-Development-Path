import { Component, OnInit } from '@angular/core';
import { FetchPhotoPostsService } from '../../services/fetch-photo-posts.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-photo',
  templateUrl: './users-photo.component.html',
  styleUrls: ['./users-photo.component.css']
})
export class UsersPhotoComponent implements OnInit {
  
  photo: any;
  constructor(private route: ActivatedRoute, 
    private fetchPhotoPostsService: FetchPhotoPostsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.fetchPhotoPostsService.getPhotoById(id).subscribe(photo => this.photo = photo);
  }
}
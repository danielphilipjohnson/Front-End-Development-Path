import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { ArtistService } from '../../../services/artist.service';

import { Video } from '../../../shared/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  private fixedlink: string;

  private artistsVideos: Video[];
  private artist: string

  private getVideosByArtistId(artistid: number): void {
    this.artistService.retrieveArtistVideosById(artistid)
      .subscribe(
        artistsVideos => this.artistsVideos = artistsVideos)
  }
  constructor( 
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location, public sanitizer: DomSanitizer ) { }

  ngOnInit() {
    const artistid = +this.route.snapshot.paramMap.get('id');
    this.getVideosByArtistId(artistid);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../shared/album';
import { Albumtrack } from '../../../shared/albumtrack';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})

export class TracksComponent implements OnInit {

  albums: Album[];
  albumtracks: Albumtrack[];

  getAlbumTracks(albumid: number): void {

    this.albumService.retrieveTracksFromAlbumById(albumid)
      .subscribe(
        albums => this.albumtracks = albums
      );
  }
  getAlbumInformation(albumid: number): void {
    this.albumService.retrieveAlbumById(albumid)
      .subscribe(
        albums => this.albums = albums);
  }
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location) { }

  ngOnInit() {
    const albumid = +this.route.snapshot.paramMap.get('id');
    this.getAlbumTracks(albumid);
    this.getAlbumInformation(albumid);

  }
}

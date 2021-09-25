import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../shared/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  private artistsAlbums: Album[];
  private artist: string

  private getAlbumsById(artistid: number): void {
    this.albumService.retrieveAlbumbyArtistId(artistid)
      .subscribe(
        artistsAlbums => this.artistsAlbums = artistsAlbums)
  }
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location) { }

  ngOnInit() {
    const artistid = +this.route.snapshot.paramMap.get('id');
    this.getAlbumsById(artistid);

  }

}

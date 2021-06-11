import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArtistService } from '../../../services/artist.service';
import { Artist } from '../../../shared/artist';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})

export class IdComponent implements OnInit {

  private artists: Artist[]

  private getArtists(artistid: number): void {
    this.artistService.retrieveByArtistId(artistid)
      .subscribe(
        artistsAlbums => this.artists = artistsAlbums)
  }

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService,
    private location: Location) { }

  ngOnInit() {
    const artistid = +this.route.snapshot.paramMap.get('id');
    this.getArtists(artistid);

  }
}
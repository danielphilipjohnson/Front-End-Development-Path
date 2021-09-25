import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { ProcessHttpmsgService } from '../services/process-httpmsg.service';

import { Album } from '../shared/album';
import { Albumtrack } from '../shared/albumtrack';


@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  private apikey: number = 195003;

  private albumByNameURL: string;
  private albumByIdURL: string;
  private albumTracksURL: string;
  private albumByArtistIdURL: string;
  private albumByArtistNameURL: string;
  private failedSearchObject: any = [{ 'noresult': true }];

  
  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }


  retrieveAlbumById(albumid: number): Observable<Album[]> {

    this.albumByIdURL = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/album.php?m=${albumid}`;

    return this.http.get<Album[]>(this.albumByIdURL)
      .pipe(
        map(res => {
          if (res['album'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['album']);
            return res['album'];
          }
        }));
  }


  retrieveAlbumbyName(album: string): Observable<Album[]> {
    // this.albumByNameURL = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/searchalbum.php?s=${album}`;
    this.albumByNameURL = `http://localhost:4200/api/${this.apikey}/searchalbum.php?s=${album}`;
    return this.http.get<Album[]>(this.albumByNameURL)
      .pipe(
        map(res => {
          if (res['album'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['album']);
            return res['album']
          }
        }),catchError(this.processHttpmsgService.handleError)
        );
  }

  retrieveTracksFromAlbumById(albumid: number): Observable<Albumtrack[]> {

    this.albumTracksURL = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/track.php?m=${albumid}`;

    return this.http.get<Albumtrack[]>(this.albumTracksURL)
      .pipe(
        map(res => {
          if (res['track'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['track']);
            return res['track'];
          }
        }));
  }

  retrieveAlbumbyArtistId(artistid: number): Observable<Album[]> {

    this.albumByArtistIdURL = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/album.php?i=${artistid}`;

    return this.http.get(this.albumByArtistIdURL)
      .pipe(
        map(res => {
          if (res['album'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['album']);
            return res['album']
          }
        }))
  }




  // needs fixing
  // future implememt
  retrieveAlbumByArtist(artistname: string): Observable<Album[]> {

    this.albumByArtistNameURL = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/searchalbum.php?s=${artistname}`;
    return this.http.get<Album[]>(this.albumByArtistNameURL)
      .pipe(
        map(res => {
          if (res['track'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['track']);
            return res['track'];
          }
        }));
  }


}

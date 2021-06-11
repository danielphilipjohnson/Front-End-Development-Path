import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from '../shared/video';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private apikey: number = 195003;

  // search
  private searchUrl: string;

  // artist
  private artistsAlbumsUrl: string;
  private artistUrl: string;
  private artistVideosUrl: string;
  private failedSearchObject: any = [{ 'noresult': true }];

  retrieveArtistByName(artistname: string) {

    this.searchUrl = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/search.php?s=${artistname}`;
    return this.http.get(this.searchUrl)
      .pipe(
        map(res => {
          if (res['artists'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['artists']);
            return res['artists']
          }
        }))
  }
  // ID
  retrieveByArtistId(artistid: number) {
    this.artistUrl = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/artist.php?i=${artistid}`;
    return this.http.get(this.artistUrl)
      .pipe(
        map(res => {
          if (res['artists'] === null) {
            return this.failedSearchObject;
          }
          else {
            console.log(res['artists']);
            return res['artists'];
          }
        }));
  }

  retrieveArtistVideosById(artistid: number) {
    this.artistVideosUrl = `http://www.theaudiodb.com/api/v1/json/${this.apikey}/mvid.php?i=${artistid}`;
    return this.http.get(this.artistVideosUrl)
      .pipe(
        map(res => {
          if (res['mvids'] === null) {
            return this.failedSearchObject;
          }
          else {
            res['mvids'].map(
              video => {
                // reduce to function
                if (video.strTrackThumb === null) {
                  video.strTrackThumb = "assets/img/abstract-art2.jpg";
                }
                video.strMusicVid= video.strMusicVid.replace('watch?v=','embed/')
                return new Video(
                  video.idArtist,
                  video.idAlbum,
                  video.idTrack,
                  video.strTrack,
                  video.strTrackThumb,
                  video.strMusicVid,
                  video.strDescriptionEN,
                );

              })
            return res['mvids'];
          }
        }));
  }
  constructor(private http: HttpClient) { }

}
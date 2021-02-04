import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../shared/class/post';

import { ProcessHttpmsgService } from '../services/process-httpmsg.service'; 

import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoPostsService {

  private baseUrl = Config.baseUrl;

  constructor(private http: HttpClient, 
    private processHttpmsgService: ProcessHttpmsgService) { }

  getPhotoById(id:number): Observable<Post>{
    return this.http.get<Post>(this.baseUrl + 'posts/' + id + '?&_embed=comments') 
    .pipe(
      catchError(this.processHttpmsgService.handleError)
      );
  }

  getRecentPhoto(start): Observable<Post[]>{
    //posts?_page=2
    return this.http.get<Post[]>(this.baseUrl +  'posts?_page=' + start + '&_embed=comments') 
    .pipe(
      catchError(this.processHttpmsgService.handleError)
      );
  }

  getExploreImages():  Observable<Post[]>{

    let startRange:number;
    let endRange: number;
    
    endRange = Math.floor(Math.random() * 980);
    startRange = Math.abs(endRange - 12);
    
    return this.http.get<Post[]>(this.baseUrl + 'posts?_start=' + startRange + '&_end=' + endRange +'&_embed=comments') 
    .pipe(
      catchError(this.processHttpmsgService.handleError)
      );
  }
}
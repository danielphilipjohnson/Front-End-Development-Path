import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service'; 
import { catchError, map, tap } from 'rxjs/operators';
import { Comment } from '../shared/class/comment';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = Config.commentUrl;
  
  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }
  
  /** POST: add a new comment to the database */
  addComment(comment: any): Observable<Comment> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<Comment>(this.baseUrl, comment, httpOptions)
      .pipe(
        catchError(this.processHttpmsgService.handleError)
      );
      
  }
}

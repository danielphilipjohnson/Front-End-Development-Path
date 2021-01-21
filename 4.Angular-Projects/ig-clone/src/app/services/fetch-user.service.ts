import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/class/user';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { catchError } from 'rxjs/operators';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {

  private baseUrl = Config.baseUrl;

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id + '/' + '?_start=0&_end=5&_embed=posts')
      .pipe(
        catchError(this.processHttpmsgService.handleError)
      )
  }
}

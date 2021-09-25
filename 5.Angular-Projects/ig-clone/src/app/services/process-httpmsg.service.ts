import { Injectable } from '@angular/core';
import { Response } from '@angular/http'; 
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }
    
  public extractData(res: any) { 
      let body = res.json(); 
      return body || { }; 
  }
  
  public handleError (error: Response | any) { 
      // In a real world app, you might use a remote logging infrastructure 
      let errMsg: string; 
      if (error instanceof Response) { 
          const body = error.json() || ''; 
          const err = body.error || JSON.stringify(body); 
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`; 
      } 
      else { 
          errMsg = error.message ? error.message : error.toString(); 
      }
  return throwError(errMsg);
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  publicKey = '4934eaff23edd31739d406aeb05458ee';
  hash = '1c64f68669fe5c95d9f3459d5416398f';
  urlApi = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;
  constructor(
    private http: HttpClient,
  ) { }

  getComics(): Observable<any> {
    return this.http.get<any>(this.urlApi)
    .pipe(
      map((data: any) => data.data.results )
    )
  }
}

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { comicsResponse, detailComic } from '@models/comics/comics.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  publicKey = '4934eaff23edd31739d406aeb05458ee';
  hash = '1c64f68669fe5c95d9f3459d5416398f';
  constructor(
    private http: HttpClient,
  ) { }

  getComicsTitle(title?: string, limit?: number, offset?: number): Observable<comicsResponse> {
    const request = ( title === '' ) ? `${environment.ApiMarvel}comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}&limit=${limit}&offset=${offset}` : `${environment.ApiMarvel}comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}&title=${title}&limit=${limit}&offset=${offset}`;
    return this.http.get<comicsResponse>(request)
    .pipe(
      map((data: any) => data.data.results )
    );
  }
  getComic(id: comicsResponse): Observable<detailComic> {
    return this.http.get<detailComic>(`${environment.ApiMarvel}comics/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(
      map((data: any) => data.data.results )
    );
  }
}

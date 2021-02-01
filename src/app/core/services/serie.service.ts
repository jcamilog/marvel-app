import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  publicKey = '4934eaff23edd31739d406aeb05458ee';
  hash = '1c64f68669fe5c95d9f3459d5416398f';
  constructor(
    private http: HttpClient,
  ) { }

  getSeries(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${environment.ApiMarvel}series?ts=1&apikey=${this.publicKey}&hash=${this.hash}&limit=${limit}&offset=${offset}`)
    .pipe(
      map((data: any) => data.data.results )
    );
  }
  getSerie(id): Observable<any> {
    return this.http.get<any>(`${environment.ApiMarvel}series/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { detailSerie, serieResponse } from '@models/serie/series.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  publicKey = '4934eaff23edd31739d406aeb05458ee';
  hash = '1c64f68669fe5c95d9f3459d5416398f';
  constructor(
    private http: HttpClient,
  ) { }

  getSeries(limit: number, offset: number): Observable<serieResponse> {
    return this.http.get<serieResponse>(`${environment.ApiMarvel}series?ts=1&apikey=${this.publicKey}&hash=${this.hash}&limit=${limit}&offset=${offset}`)
    .pipe(
      map((data: any) => data.data.results )
    );
  }
  getSerie(id: serieResponse): Observable<detailSerie> {
    return this.http.get<detailSerie>(`${environment.ApiMarvel}series/${id}?ts=1&apikey=${this.publicKey}&hash=${this.hash}`)
    .pipe(
      map((data: any) => data.data.results )
    );
  }
}

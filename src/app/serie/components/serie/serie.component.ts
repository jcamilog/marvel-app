import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { SerieService } from '@core/serie.service';
import { detailSerie } from '@models/serie/series.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  serie: any = [];
  data: detailSerie;

  limit = 20;
  offset = 0;
  constructor(
    private serieService: SerieService
  ) { }

  ngOnInit(): void {
    this.gerSeries();
  }
  gerSeries(): void {
    this.serieService.getSeries(this.limit, this.offset)
    .subscribe( serie => {
      this.serie = this.serie.concat(serie);
    });
  }
  getSerieId(id): void {
    this.serieService.getSerie(id)
    .subscribe( data => {
      this.data = data;
      console.log(data)
    })
  }

  aumentar(): void {
    this.offset += this.limit;
    this.gerSeries();
  }
}

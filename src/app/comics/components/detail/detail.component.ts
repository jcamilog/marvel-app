import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ComicsService } from '@core/comics.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  comic: any;

  constructor(
    private comicsService: ComicsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.comicsId(id);
    });
  }

  comicsId(id): void {
    this.comicsService.getComic(id)
    .subscribe(comic => {
      this.comic = comic;
    });
  }

}

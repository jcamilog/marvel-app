import { Component, OnInit } from '@angular/core';

import { ComicsService } from '@core/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics: any;
  constructor(
    private comicsService: ComicsService
  ) { }

  ngOnInit(): void {
    this.getComits();
  }

  getComits(): void {
    this.comicsService.getComics()
    .subscribe( comics => {
      this.comics = comics;
    });
  }

}

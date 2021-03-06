import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ComicsService } from '@core/comics.service';

import { debounceTime } from 'rxjs/operators';

import { Router } from '@angular/router';
import { comicsResponse } from '@models/comics/comics.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  comics: comicsResponse;
  title = '';
  limit = 20;
  offset = 0;
  searchFiel = new FormControl();
  isGotop = false;
  constructor(
    private comicsService: ComicsService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.search(this.title);
    this.searchFiel.valueChanges
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.title = value;
      this.search(this.title);
    });
  }

  search( value ): void{
    this.comicsService.getComicsTitle(value = this.title, this.limit , this.offset)
    .subscribe( comics => {
      this.comics = comics;
    });
  }
  detail(id): void {
    this.comicsService.getComic(id)
    .subscribe( e => {
    });
  }
  aumentar(): void {
    this.offset += this.limit;
    this.search(this.title);
  }
  decrementar() {
    this.offset = ((this.offset - this.limit) <= 0 ) ? 0 : this.offset - this.limit;
    this.search(this.title);
  }
  // tslint:disable-next-line: typedef
  @HostListener('window:scroll', []) onWindowScroll() {
    this.scrollFunction();
  }

  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.isGotop = true;
    } else {
      this.isGotop = false;
    }
  }

  topFunction(): void {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

}

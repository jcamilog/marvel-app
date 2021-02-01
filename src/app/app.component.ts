import { Component, OnInit } from '@angular/core';

import { SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'marvel-app';
  constructor(
    private swUpdate: SwUpdate
  ) {}
  ngOnInit() {
    this.updatePwa();
  }
  updatePwa(): void {
    this.swUpdate.available
    .subscribe(value => {
      window.location.reload();
    });
  }
}

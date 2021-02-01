import { Injectable } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
    private spinner: NgxSpinnerService,
  ) { }
  playSpinner(): void{
    this.spinner.show();
  }
  stopSpinner(): void{
    this.spinner.hide();
  }
}

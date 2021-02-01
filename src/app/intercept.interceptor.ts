import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent  } from '@angular/common/http';

import { SpinnerService } from '@core/spinner.service';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor(
    private spinnerService: SpinnerService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.spinnerService.playSpinner();
    return next.handle(request)
    .pipe(
      finalize(() => {
        this.spinnerService.stopSpinner();
      })
    );
  }

}

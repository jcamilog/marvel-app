import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SerieRoutingModule } from './serie-routing.module';
import { SerieComponent } from './components/serie/serie.component';

import { MaterialModule } from './../material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [SerieComponent],
  imports: [
    CommonModule,
    SerieRoutingModule,
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class SerieModule { }

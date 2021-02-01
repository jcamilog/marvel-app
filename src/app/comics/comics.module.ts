import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './components/comics/comics.component';
import { MaterialModule } from './../material/material.module';
import { DetailComponent } from './components/detail/detail.component';

import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [ComicsComponent, DetailComponent],
  imports: [
    CommonModule,
    ComicsRoutingModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class ComicsModule { }

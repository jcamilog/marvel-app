import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieComponent } from './components/serie/serie.component';

const routes: Routes = [
  {
    path: '',
    component: SerieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SerieRoutingModule { }

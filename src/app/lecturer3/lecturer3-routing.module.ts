import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lecturer3Page } from './lecturer3.page';

const routes: Routes = [
  {
    path: '',
    component: Lecturer3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lecturer3PageRoutingModule {}

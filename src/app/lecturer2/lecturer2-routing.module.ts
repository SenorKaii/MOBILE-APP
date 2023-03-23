import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lecturer2Page } from './lecturer2.page';

const routes: Routes = [
  {
    path: '',
    component: Lecturer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lecturer2PageRoutingModule {}

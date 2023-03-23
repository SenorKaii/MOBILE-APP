import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoungePage } from './lounge.page';

const routes: Routes = [
  {
    path: '',
    component: LoungePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoungePageRoutingModule {}

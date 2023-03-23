import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lecturer1PageRoutingModule } from './lecturer1-routing.module';

import { Lecturer1Page } from './lecturer1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lecturer1PageRoutingModule
  ],
  declarations: [Lecturer1Page]
})
export class Lecturer1PageModule {}

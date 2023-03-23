import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lecturer2PageRoutingModule } from './lecturer2-routing.module';

import { Lecturer2Page } from './lecturer2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lecturer2PageRoutingModule
  ],
  declarations: [Lecturer2Page]
})
export class Lecturer2PageModule {}

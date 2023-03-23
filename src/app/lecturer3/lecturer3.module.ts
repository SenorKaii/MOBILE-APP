import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lecturer3PageRoutingModule } from './lecturer3-routing.module';

import { Lecturer3Page } from './lecturer3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lecturer3PageRoutingModule
  ],
  declarations: [Lecturer3Page]
})
export class Lecturer3PageModule {}

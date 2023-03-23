import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditnotesPageRoutingModule } from './editnotes-routing.module';

import { EditnotesPage } from './editnotes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditnotesPageRoutingModule
  ],
  declarations: [EditnotesPage]
})
export class EditnotesPageModule {}

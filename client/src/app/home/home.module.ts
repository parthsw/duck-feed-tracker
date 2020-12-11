import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, FlexLayoutModule, MaterialModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

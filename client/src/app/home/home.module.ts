import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { DuckFeedModule } from '@app/duck-feed/duck-feed.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, FlexLayoutModule, MaterialModule, DuckFeedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}

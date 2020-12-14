import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { DuckFeedFormComponent } from './duck-feed-form/duck-feed-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule],
  declarations: [DuckFeedFormComponent, ThankYouComponent],
  exports: [DuckFeedFormComponent, ThankYouComponent],
})
export class DuckFeedModule {}

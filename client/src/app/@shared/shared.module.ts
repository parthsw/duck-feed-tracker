import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule, RouterModule],
  declarations: [LoaderComponent, HeaderComponent, FooterComponent],
  exports: [LoaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}

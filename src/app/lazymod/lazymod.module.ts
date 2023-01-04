import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymodRoutingModule } from './lazymod-routing.module';
import { LazymodComponent } from './lazymod.component';


@NgModule({
  declarations: [
    LazymodComponent
  ],
  imports: [
    CommonModule,
    LazymodRoutingModule
  ]
})
export class LazymodModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazymodComponent } from './lazymod.component';

const routes: Routes = [{ path: '', component: LazymodComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymodRoutingModule { }

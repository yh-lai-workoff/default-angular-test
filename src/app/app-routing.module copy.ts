import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewoneComponent } from './newone/newone.component';
import { NewthreeComponent } from './newthree/newthree.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { ProfiletestComponent } from './profiletest/profiletest.component';

const routes: Routes = [
  {
    path:"newoneRoute",
    component: NewoneComponent,
    // outlet:"routerone",
    
  },
  {
    path:"newtwoRoute",
    component: NewtwoComponent,
    // outlet:"routertwo"
  },
  {
    path:"newthreeRoute",
    component: NewthreeComponent,
    outlet:"routerthree"
  },
  {
    path:"profiletestRoute/angular",
    component: ProfiletestComponent
  },
  {
    path:"newoner",
    redirectTo: "newoneRoute"
  },
  {
    path:"newone",
    component:NewoneComponent
  },
  {
    // Redeclare
    path:"newone",
    children:[
      {
        path:"newtwo",
        component: NewtwoComponent
      },
      {
        path:"newthree",
        component: NewthreeComponent
      }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

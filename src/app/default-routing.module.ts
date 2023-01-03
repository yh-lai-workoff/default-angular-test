import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Step 1
import { Routes, RouterModule } from '@angular/router';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';

// Step 2
const routes : Routes =[
  {
    path:"newone",
    component:NewoneComponent
  },
  {
    // Redeclare for child paths
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
  },
  // parameterized routing
  {
    path:"newthree/:val/:val2",
    component: NewthreeComponent
  },
  {
    path:"newtwo",
    component: NewtwoComponent
  },
  // Redirect: pathMatch on empty address
  {
    path: "",
    redirectTo: "newtwo",
    pathMatch: "full"
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  //Step 3
  ],
  exports:[RouterModule]  //Step 4
})

export class DefaultRoutingModule { }

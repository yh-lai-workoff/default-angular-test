import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Step 1
import { Routes, RouterModule } from '@angular/router';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';
import { NewfourComponent } from './newfour/newfour.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { RouteguardGuard } from './routeguard.guard';
import { DoubleguardGuard } from './doubleguard.guard';
import { ChildguardGuard } from './childguard.guard';
import { LoadguardGuard } from './loadguard.guard';
import { DeactiveguardGuard } from './deactiveguard.guard';
import { ResolveguardGuard } from './resolveguard.guard';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AppComponent } from './app.component';

// Step 2
const routes : Routes =[
  {
    path:"form",
    children:[
      {
        path:"static",
        component: TemplateformComponent
      },
      {
        path:"reactive",
        component: ReactiveformComponent
      },
      {
        path:"reactive2",
        component:ReactiveForm2Component
      },
      {
        path:"postForm",
        component:PostFormComponent
      },
      {
        path:"postForm/:val2",
        component:PostFormComponent
      }
    ]
  },
  {
    path:"app",
    component:AppComponent
  },
  {
    path:"newone",
    component:NewoneComponent,
    canActivate: [RouteguardGuard, DoubleguardGuard],  // Route Guard added
    
  },
  {
    // Redeclare for child paths
    path:"newone",
    children:[
      {
        // Second 
        path:"",
        canActivateChild:[ChildguardGuard],
        children:[
          {
            path:"newtwo",
            component:NewtwoComponent,
            canDeactivate: [DeactiveguardGuard]
          }
        ]
      },
      {
        path:"newthree",
        component: NewthreeComponent,
        resolve:{
          status:ResolveguardGuard
        }
      }
    ],
    canActivate: [RouteguardGuard, DoubleguardGuard],
    canActivateChild: []
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
  // {
  //   path: "",
  //   redirectTo: "newtwo",
  //   pathMatch: "full"
  // },
  {
    path:"newfour",
    component: NewfourComponent
  },
  { path: 'lazy', 
    loadChildren: () => import('./lazymod/lazymod.module').then(m => m.LazymodModule),
    canActivate:[RouteguardGuard],
    canLoad:[LoadguardGuard] },
  // Wildcard Rerouting
  {
    path:"**",
    component: ErrorcomponentComponent
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

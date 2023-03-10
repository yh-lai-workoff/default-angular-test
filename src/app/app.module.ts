import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { ProfiletestComponent } from './profiletest/profiletest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { NewthreeComponent } from './newthree/newthree.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DefaultRoutingModule } from './default-routing.module';
import { NewfourComponent } from './newfour/newfour.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostFormComponent } from './post-form/post-form.component';
import { CommonupdateInterceptor } from './commonupdate.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    ProfiletestComponent,
    NewtwoComponent,
    NewthreeComponent,
    NewfourComponent,
    ErrorcomponentComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ReactiveForm2Component,
    PostFormComponent
    
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    DefaultRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    {provide: LocationStrategy, useClass:HashLocationStrategy},
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CommonupdateInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

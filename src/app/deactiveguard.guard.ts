import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NewtwoComponent } from './newtwo/newtwo.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveguardGuard implements CanDeactivate<NewtwoComponent> {
  canDeactivate(component: NewtwoComponent,){
    console.log(component)
    if(component.passToGuard)
      return window.confirm("Are you sure you want to leave the page?")
    else
      return true
  }
  
}

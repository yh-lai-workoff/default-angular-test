import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResolveguardGuard implements Resolve<any> {
  
  objany = {
    'val1' :'value1',
    'val2' :"value2",
    'vali3' :"value3"
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.objany;
    

  }
  canActivate(){
    return true;
  }


  
}


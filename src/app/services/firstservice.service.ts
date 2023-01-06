import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor() { }

  simple(){
    const objs = [
      {val1:1,val2:2},
      {val3:"stringthree",val4:"stringfour"}
    ]
    console.log(objs)
    return objs
  }
}

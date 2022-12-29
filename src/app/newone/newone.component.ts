import { Component } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css','./newone.newnew.css']
})
export class NewoneComponent {
  val : boolean = false;
  val1 : boolean = true;

  obj = [
    
    {"rollnum":10,
    "name":"fancy",
    "date":23},
    
    {
      "rollnum":10,
      "name":"not fancy",
      "date":30
    },
    {
      "rollnum":34,
      "name": "whatever",
      "date":1
    }
  ]
}

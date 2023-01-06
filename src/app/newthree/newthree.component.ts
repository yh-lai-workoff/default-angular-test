import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newthree',
  templateUrl: './newthree.component.html',
  styleUrls: ['./newthree.component.css']
})
export class NewthreeComponent implements OnInit {
  public val : any;
  public val2 : any;
  constructor(private activatedRoute : ActivatedRoute){
    // Call Subscribe method to access parameters, steal ith and print it
    this.activatedRoute.params.subscribe(
      p => {
        console.log(p)
        this.val = p['val']
        this.val2 = p['val2']
      }
    );

  }

   ngOnInit(): void {
       console.log(this.activatedRoute.snapshot.data);
   }

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

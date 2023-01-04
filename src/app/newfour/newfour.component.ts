import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newfour',
  templateUrl: './newfour.component.html',
  styleUrls: ['./newfour.component.css']
})
export class NewfourComponent implements OnInit{
  public para1: any;
  public para2: any;
  public para3: any;
  public para4: any;
  
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(
      p => {
        console.log(p)
        this.para4 = p['para4']
        this.para3= p['para3']
        this.para2 = p['para2']
        this.para1 = p['para1']
      }
    )
  }

  ngOnInit(): void {
      
  }
}

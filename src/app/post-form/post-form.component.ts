import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirstserviceService } from '../services/firstservice.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit{
  constructor(private activeRoute: ActivatedRoute,private service:FirstserviceService){}
  submitted = false;
  ngOnInit(): void {
  }
  f=""
  cb=false

  printValues(pf:NgForm){
    console.log(pf.value);
  }

  updateForm(pf:NgForm){
    const obj1 = {
      title:pf.value['f'],
      title2:pf.value['cb']
    }
    this.service.postUser(obj1).subscribe(data =>{
      console.log(data)
      this.submitted = true
    })
  }
  
  putForm(){
    const obj1 = {
      title:"2222",
      title2:"33333",
      id:10
    }
    this.service.putUser(obj1,2).subscribe(data=>{

    })
  }

  deleteForm(){
    console.log(this.activeRoute.snapshot.params)
    this.service.deleteUser(this.activeRoute.snapshot.params['val2']).subscribe((response)=>{
      console.log(response)
    })
  }
}



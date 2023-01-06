import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  val="";
  val2="";
  checkbox:boolean = false;
  radio1:any=""
  dropdown=""
  multiple:Array<String>=[""];

 /**
  * fun1
  */
 public fun1(f:NgForm) {
  console.log(f.value)
  console.log(f.value['val'])
 }

 public fun12(f:NgForm){
  console.log("2nd call")
 }

 public fun2(f:NgForm){
  f.reset()
  console.log("reset")
 }

 public setDefault(f:NgForm){
  this.val="Username";
  this.val2="Password"
  let formObj = {
    'val':"username",
    'val2':"password123",
    'check1':true,
    'RadioGroup':"23",
    'dropdown':"wow",
    'multi':["222"]
  }
  f.setValue(formObj)
  f
 }

  constructor(){}

  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirstserviceService } from '../services/firstservice.service';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component implements OnInit{
  
  constructor(private fb: FormBuilder, private service:FirstserviceService){}

  public reactForm!:FormGroup

  public outputData:any
  
  ngOnInit(): void {
    this.service.getUser().subscribe(data=>{
      this.outputData = data;
    })
    
    

    // this.reactForm = new FormGroup({
    //   "LastName": new FormControl("Reacts"),
    //   "FirstName": new FormControl("Reacts2")
    // })
    this.reactForm = this.fb.group({
      "LastName": new FormControl("Reacts"),
      "FirstName": new FormControl("Reacts2"),
      "usernames": this.fb.array([])
    })
  }

  printValues(){
      console.log(this.reactForm.value)
  }

  addFields(){
    const userArr = this.reactForm.get("usernames") as FormArray
    userArr.push(this.fb.group({
      'val1':'',
      'val2':'',
      'val3':''
    }))
  }

  deleteField(i:number){
    const userArr = this.reactForm.get("usernames") as FormArray
    userArr.removeAt(i)
  }
  editField(i:AbstractControl){
    const userArr = this.reactForm.get("usernames") as FormArray
    console.log(i.getRawValue())
    console.log(i.value['val2'])
    if (i.value['val2'] > 100) {
      i.patchValue({
        'val3':"false"
      })
    } else {
      i.patchValue({
        'val3':"true"
      })
    }
    
  }

  get formArr(){
    return this.reactForm.controls["usernames"] as FormArray
  }
}

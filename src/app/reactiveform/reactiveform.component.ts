import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirstserviceService } from '../services/firstservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit{
  
  public addReactF!:FormGroup;


  constructor(private fb:FormBuilder, private fs:FirstserviceService){}

  x:any

  ngOnInit(): void {
     // Slow Approach:
    this.addReactF = new FormGroup({
      'fn':new FormControl("",[Validators.minLength(5),Validators.required]),
      'ln':new FormControl(),
      'users':new FormArray([
        new FormControl('init1'),
        new FormControl('init 2'),
        new FormControl('init 3'),
        new FormControl('init 4'),
        new FormControl('init 5'),
        new FormControl('init 6'),
      ]),
      
    })
    let initial = {
      // 'fn':"new FormControl()",
      'ln':"new FormControl()"
    }
    // setValue() only works on full matches
    // this.addReactF.setValue(initial)
    // patchValue() works on any matches
    this.addReactF.patchValue(initial);

    

    // this.addReactF = new FormGroup({
    //   'fn':new FormControl('Initial 1'),
    //   'ln':new FormControl('Initial 2')
    // })

    let user = new FormArray([
      new FormControl('valone'),
      new FormControl('valtwo')
    ])
    console.log(user)

    this.x=this.fs.simple()
    console.log(this.x)
    
  }

  public fun1(){    
    console.log(this.addReactF.value)
    console.log(this.addReactF.value['ln'])
    console.log(this.addReactF.get('ln')?.value)
  }

  public fun2(){
    this.addReactF.valueChanges.subscribe(data=>{
      console.log(data)
    })
  }

  public fun3(){
    console.log("valid "+this.addReactF.valid)
    console.log("invalid "+this.addReactF.invalid)
    console.log("pending "+this.addReactF.pending)
    console.log("pristine "+this.addReactF.pristine)
    console.log("dirty "+this.addReactF.dirty)
    console.log("touched "+this.addReactF.touched)
    console.log("untouched "+this.addReactF.untouched)
  }

  public fun4(){
    this.addReactF.reset();
  }

  public valChange(){
    this.addReactF.get('fn')?.statusChanges.subscribe(data=>{
      console.log(data)
    })
  }

  get formArr(){
    return this.addReactF.controls['users'] as FormArray
  }


  

}

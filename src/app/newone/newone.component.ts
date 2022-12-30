import { Component } from '@angular/core';

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css','./newone.newnew.css']
})
export class NewoneComponent {
  val : boolean = false;
  val1 : boolean = true;

  obj2 ={"rollnum":10,
  "name":"fancy",
  "date":23}

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

  printObj(){

  }

  game = "cricket"

  color = 'blue'
  backColor = 'black'
  padding = '1px'
  margin = '30px'
  border = '3px yellow solid'
  classValue = 'c d'
  classValue2 = 'b d'
  ternaryClass = 2
 /**
  * name
  */
 public callMe() {
    return 'b d'
  }
  imgsrc = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  alttext = "Google logo"

  multiStyleObj = {
    color : "red",
    border : "3px blueviolet solid",
    display: "inline"
  }
  num = 2
  
  clickMe(){
    window.alert("Test")
  }

  clickMe2(a:Number, b:Number, c:Number){
    window.alert(a)
  }

  upperString = "LOWER CASE ME"

  aDate = Date.now();

  bigPercent = 923.232

}




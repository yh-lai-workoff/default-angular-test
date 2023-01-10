import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private http:HttpClient) { }
  public users:any;
  getUser(){
    const header = new HttpHeaders({
      'info1':"Http syllabus",
      'info2':"232432"
    })

    const parameters = new HttpParams().set('id','232').set('key','alpha')

    return this.http.get("https://jsonplaceholder.typicode.com/users",{headers:header,params:parameters})
  }

  postUser(body: any){
    const header = new HttpHeaders({
      'info1':"Http syllabus",
      'info2':"232432"
    })
    return this.http.post("https://jsonplaceholder.typicode.com/users",body,{headers:header})
  }

  putUser(body:any, id:number){
    const header = new HttpHeaders({
      'info1':"Http syllabus",
      'info2':"232432",
      'info3':"Manipulate"
    })
    return this.http.put("https://jsonplaceholder.typicode.com/users/3",body,{headers:header})
  }

  deleteUser(id:number){
    const header = new HttpHeaders({
      'info1':"Http syllabus",
      'info2':"232432",
      'id':id.toString()
    })
    this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id,{headers:header}).subscribe(data=>{
      console.log(data)
    })
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/"+id,{headers:header})
  }

  simple(){
    const objs = [
      {val1:1,val2:2},
      {val3:"stringthree",val4:"stringfour"}
    ]
    console.log(objs)
    return objs
  }
}

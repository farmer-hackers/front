import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {

  
  readonly rootUrl = 'http://localhost:3333';
  constructor(private http: HttpClient) { }
 


  registerUser(user : User){
    const body: User = {
      name: user.name,
      email: user.email,
      pass: user.pass
     
    }
    console.log("je suis le user " + body);

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken')});
    return this.http.post(this.rootUrl + '/user', body,{headers : reqHeader});
  }






  userAuthentication(email, pass) {
  
    const dataLogin: any = {
      email: email,
      pass: pass
     
    }
 
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.post(this.rootUrl + '/login', dataLogin, { headers: reqHeader });
  }



  // getAllUser(name : string){
  //   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken')});
  //   return this.http.get(this.rootUrl + '/user', { headers: reqHeader });
  // }



  getUserById(id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken')});
  return this.http.get(this.rootUrl + '/user/' + id, { headers: reqHeader });
  }


  createUser(user : User){
    const body: User = {
      name: user.name,
      email: "fakeMail@gmail.com",
      pass: "myFakePassword"
     
    }
    console.log("je suis le user " + body);

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken')});
    return this.http.post(this.rootUrl + '/user', body,{headers : reqHeader});
  }

  


  token : string;

}

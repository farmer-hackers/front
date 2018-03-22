import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import { Game } from './game.model';

import { UserService } from '../shared/user.service';


import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
  readonly rootUrl = 'http://localhost:3333';

  constructor(private http: HttpClient, private userService : UserService) { }


  getAllGameByUser(myId){
  
    
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',Authorization: 'Bearer ' + localStorage.getItem('userToken')  }); 
    return this.http.get(this.rootUrl + '/game/user/'+ myId,{headers : reqHeader});
  }


  launchNewGame(game : Game){
    const body: Game = {
      name: game.name,
      pass: game.pass,
      perf:game.perf,
      public:game.public,
      nbGamers:game.nbGamers,
      user:  game.user  
    }

    console.log("Creation du jeu " + body.user);
  
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken') });
   
    return this.http.post(this.rootUrl + '/game', body,{headers : reqHeader});
  }

  getAllUser(){

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get(this.rootUrl + '/user',{headers : reqHeader});
  }


  gameById(id){

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get(this.rootUrl + '/game/'+ id ,{headers : reqHeader});

  }

  updateGameById(game :Game, id) {

    const body: Game = {
      name: game.name,
      pass: game.pass,
      perf:game.perf,
      public:game.public,
      nbGamers:game.nbGamers,
      user:  game.user  
    }


    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.put(this.rootUrl + '/game/'+ id, body, {headers : reqHeader});
    
  }


  getAllGame(){

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('userToken') });
    return this.http.get(this.rootUrl + '/game' ,{headers : reqHeader});

  }


  


  

 




  



  

}

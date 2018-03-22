import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { NgForm } from '@angular/forms';

import { Game } from '../Shared/game.model';
import { GameService } from '../shared/game.service';
import { Observable } from 'rxjs/Observable';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-information-details-component',
  templateUrl: './information-details-component.component.html',
  styleUrls: ['./information-details-component.component.css']
})
export class InformationDetailsComponentComponent implements OnInit {

  constructor(private router: Router , private route: ActivatedRoute, private gameService: GameService) {
    this.route.params.subscribe( params => console.log(params));

   }

   game: Game;


   gameById(myID) {
   
    this.gameService.gameById(myID)
      .subscribe((data: any) => {
              
        this.game = data;
      
      });
  }

  

ngOnInit() {

  this.route.params.subscribe( params => this.gameById(params['id']));
}



updateGameById(form: NgForm) {
  this.route.params.subscribe( params => form.value.id = params['id']);
  this.gameService.updateGameById(form.value, form.value.id  )
    .subscribe((data: any) => {
      console.log("------ uuuupppppp");
      console.log(data);
      this.router.navigate(['/information/user/' + data.user ]);
      
      
    });
}



}







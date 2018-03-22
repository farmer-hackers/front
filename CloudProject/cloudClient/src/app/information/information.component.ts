import { Component, OnInit } from '@angular/core';
import { Game } from '../Shared/game.model';
import { GameService } from '../shared/game.service';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  game: Game;
  //games: Array<Game>;
  listOfGame : any;
  games: any[] = [];
  listAllGame: any[] = [];
 

  constructor(private router: Router, private gameService: GameService, private userService: UserService, private route: ActivatedRoute) {

    
    this.route.params.subscribe( params => console.log(params));
   }

  myID :any; 

  getAllPublicGame() {
    this.gameService.getAllGame()
      .subscribe((data: any) => {

        // for (var p of data) {
        //   this.getUserById(p.user);
           
        //  }

        for (var p of data) {
          
        if (p.public == true) {
          this.games.push(p)
        }
       }
    
      });
     
  }


  userName: string;

getUserById(id){

  this.userService.getUserById(id)
  .subscribe((data: any) => {
    
          console.log("------   oooooo-----");
          

          
          this.userName = data.name;
          console.log( this.userName);
          
  });

}




  getAllGame(myID) {
   
    this.gameService.getAllGameByUser(myID)
      .subscribe((data: any) => {
        //localStorage.setItem('userToken',data.access_token);
      


        //  for (var p of data) {
        //   this.getUserById(p.user);
           
        //  }

        this.games = data;

       

        if (data.length > 0) {
          this.games = data;
          
          
        } else {

         
          this.getAllPublicGame();

        }
            
      });
  }

  ngOnInit() {
    
    this.route.params.subscribe( params => this.getAllGame(params['id']));


  }



gotToLaunchGame(){
   this.router.navigate(['/launchGame']);
}





modify(id) {
  this.gameService.gameById(id)
    .subscribe((data: any) => {
      
      this.router.navigate(['/information/'+ id]);
      
      
    });
}
















}

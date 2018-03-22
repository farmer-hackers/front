import { Component, OnInit } from '@angular/core';
import { Game } from '../Shared/game.model';
import { GameService } from '../shared/game.service';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-launch-game',
  templateUrl: './launch-game.component.html',
  styleUrls: ['./launch-game.component.css']
})
export class LaunchGameComponent implements OnInit {

  game: Game;
  listArray:any[];
 
  

  

  constructor(private gameService: GameService, private userService: UserService, private toastr: ToastrService,  private router : Router, ) { }





  ngOnInit() {
    this.resetForm();
    //this. getAllUser();
    
    
    
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();

    this.game = {
      name: "",
      pass: "",
      perf: 0,
      public:true,
      nbGamers:0,
      user:""
      
    }
  }





  launchNewGame(form: NgForm) {
  
  
    this.gameService.launchNewGame(form.value)
      .subscribe((data: any) => {

        this.createUser(form.value);

        console.log("----- data lauch grame ---");
        console.log(data);


        console.log("----- form.value lauch grame ---");
        console.log(form.value.user);
          
          this.resetForm(form);
          this.toastr.success('Creation du jeu réussi');
          this.router.navigate(['/information/user/'+ data.user]);
          
          //this.router.navigate(['/information/']);
       
          
      });
  }



  createUser(form: NgForm) {
    this.userService.createUser(form.value)
      .subscribe((data: any) => {
        
          console.log("--- creaion user ---- ");
          console.log(data);
         

         console.log("--- j'ai cree un user avec id  ---- ");
         this.game.user =  data._id
         console.log(this.game.user);

      });
  }


  


  



 
 




 


  

}

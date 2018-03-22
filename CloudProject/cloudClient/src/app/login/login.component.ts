import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { User } from '../Shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


declare var $ :any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  



  closeResult: string;

  
  constructor(private userService: UserService, private toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.resetForm();
    
  }

  isLoginError : boolean = false;

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      name: '',
      email: '',
      pass: ''
      
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        //if (data.Succeeded == true) {
          console.log("--- creaion user ---- ");
    console.log(data);

          //localStorage.setItem('userToken',data.token);
          this.resetForm(form);
          this.toastr.success('User registration successful');
          this.mdlSampleIsOpenRegister = false;
         
          this.router.navigate(['/information/user/' + data._id ]);
        //}
        //else
          //this.toastr.error(data.Errors[0]);
      });
  }

  annuler(){
    this.mdlSampleIsOpen = false;
  }

  annulerRegister(){
    this.mdlSampleIsOpenRegister = false;
  }


  OnSubmitLogin(email,password){
    this.userService.userAuthentication(email,password).subscribe((data : any)=>{

    
     localStorage.setItem('userToken',data.token);
     this.router.navigate(['/information/user/' + data.id ]);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
     
     
     
   });
 }






private mdlSampleIsOpen : boolean = false;
private mdlSampleIsOpenRegister : boolean = false;


private openModal(open : boolean) : void {
    this.mdlSampleIsOpen = open;
}

private openModalRegistrer(open : boolean) : void {
  this.mdlSampleIsOpenRegister = open;
}


private mdlSampleIsOpenSignUp : boolean = false;
private openModalSignUp(open : boolean) : void {
    this.mdlSampleIsOpenSignUp = open;
}





}

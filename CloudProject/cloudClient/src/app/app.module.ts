import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { UserService } from './shared/user.service';
import { GameService } from './shared/game.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InformationComponent } from './information/information.component';
import { LaunchGameComponent } from './launch-game/launch-game.component';
import { InformationDetailsComponentComponent } from './information-details-component/information-details-component.component';




const appRoutes: Routes = [
  { path: 'inscription', component: RegistrationComponent },
  { path: '', component: LoginComponent },
  { path: 'information/user/:id', component: InformationComponent },
  { path: 'information/:id', component: InformationDetailsComponentComponent },
  { path: 'launchGame', component: LaunchGameComponent }
  
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    InformationComponent,
    LaunchGameComponent,
    InformationDetailsComponentComponent
  ],
  imports: [
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    CommonModule,
   
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
    
  ],
  providers: [UserService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './modules/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/components/sign-up/sign-up.component';


const routes: Routes = [

  // { path: '', component: SignInComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './modules/components/sign-in/sign-in.component';
import { SignUpComponent } from './modules/components/sign-up/sign-up.component';
import { AuthModule } from './modules/auth/auth.module';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';
import { AboutComponent } from './modules/components/about/about.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { FactsComponent } from './modules/components/facts/facts.component';
import { PortfolioComponent } from './modules/components/portfolio/portfolio.component';
import { ResumeComponent } from './modules/components/resume/resume.component';
import { ServicesComponent } from './modules/components/services/services.component';
import { SkillsComponent } from './modules/components/skills/skills.component';
import { TestimonialsComponent } from './modules/components/testimonials/testimonials.component';
// import { NgParticlesModule } from 'ng-particles';





@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    FactsComponent,
    PortfolioComponent,
    ResumeComponent,
    ServicesComponent,
    SkillsComponent,
    TestimonialsComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,

         
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {

 

}


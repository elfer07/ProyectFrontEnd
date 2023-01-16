import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { LogoApComponent } from './logo-ap/logo-ap.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsSkillsComponent } from './hs-skills/hs-skills.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienceComponent } from './experience/new-experience/new-experience.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { NewEducationComponent } from './education/new-education/new-education.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { NewSkillComponent } from './hs-skills/new-skill/new-skill.component';
import { EditSkillComponent } from './hs-skills/edit-skill/edit-skill.component';
import { EditAboutComponent } from './about/edit-about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProjectComponent } from './project/project.component';
import { NewProjectComponent } from './project/new-project/new-project.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    EducationComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AboutComponent,
    HsSkillsComponent,
    FooterComponent,
    LoginComponent,
    NewExperienceComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAboutComponent,
    ProjectComponent,
    NewProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

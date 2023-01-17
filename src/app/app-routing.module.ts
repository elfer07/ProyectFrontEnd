import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './about/edit-about/edit-about.component';
import { EditEducationComponent } from './education/edit-education/edit-education.component';
import { NewEducationComponent } from './education/new-education/new-education.component';
import { EditExperienceComponent } from './experience/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './experience/new-experience/new-experience.component';
import { HomeComponent } from './home/home.component';
import { EditSkillComponent } from './hs-skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './hs-skills/new-skill/new-skill.component';
import { LoginComponent } from './login/login.component';
import { SocialNetworkComponent } from './logo-ap/social-network/social-network.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { NewProjectComponent } from './project/new-project/new-project.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexp', component: NewExperienceComponent},
  {path: 'editexp/:id', component: EditExperienceComponent},
  {path: 'neweducation', component: NewEducationComponent},
  {path: 'editedu/:id', component: EditEducationComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editabout/:id', component: EditAboutComponent},
  {path: 'newproject', component: NewProjectComponent},
  {path: 'editproject/:id', component: EditProjectComponent},
  {path: 'socialnetwork/:id', component: SocialNetworkComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

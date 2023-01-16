import { Component, OnInit } from '@angular/core';
import { Experience } from '../model/experience';
import { SExperienceService } from '../service/s-experience.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  exp: Experience[] = [];

  constructor(private sExperience: SExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperience.lista().subscribe(data => { this.exp = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperience.delete(id).subscribe(data => { 
        this.cargarExperiencia();
      }, err => { 
        alert("No se pudo borrar la experiencia");
      })
    }
  }

}
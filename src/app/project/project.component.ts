import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  proj: Project[] = []; 

  constructor(private projService: ProjectService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.uploadProject();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  uploadProject(): void {
    this.projService.lista().subscribe(data => { this.proj = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.projService.delete(id).subscribe(data => { 
        this.uploadProject();
      }, err => { 
        alert("No se pudo borrar el proyecto");
      })
    }
  }

}

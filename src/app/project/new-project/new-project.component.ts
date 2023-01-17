import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageProjectService } from 'src/app/service/image-project.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projects: Project[] = [];

  title: string;
  description: string;
  link: string;
  image: string;

  constructor(private activatedRouter: ActivatedRoute,private projectService: ProjectService, private router: Router, public imageService: ImageProjectService) { }

  ngOnInit(): void {
  }

  onCreate(): void {    
    this.image = this.imageService.urlp
    const project = new Project(this.title, this.description, this.link, this.image);
    this.projectService.save(project).subscribe(data => {
      alert("Proyecto agregado.")
      this.router.navigate(['']);
    }, err => {
      alert("Algo salió mal!");
      this.router.navigate(['']);
    })
  }

  uploadImage($event: any) {
    this.projectService.lista().subscribe(data => { 
      this.projects = data;
      if (this.projects.length === 0) {
        const id = 1;
        const name = "proyecto_"+id;
        this.imageService.uploadImgProj($event, name);
      } else {
        const id = this.projects.length + 1;
        const name = "proyecto_"+id;
        this.imageService.uploadImgProj($event, name);
      }
     })    
    
  }

  //private randomNumber = (max: number, min: number = 0): number => Math.floor(Math.random()*(max - min + 1) + min);

}

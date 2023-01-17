import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageProjectService } from 'src/app/service/image-project.service';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  pro: Project = null;

  constructor(private activatedRouter: ActivatedRoute, private projectService: ProjectService, private router: Router, public imageService: ImageProjectService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.projectService.detail(id).subscribe(
      data =>{
        this.pro = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate() {
    const id = this.activatedRouter.snapshot.params['id'];
    this.pro.image = this.imageService.urlp;
    this.projectService.update(id, this.pro).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_"+id;
    this.imageService.uploadImageProjEdit($event, name, id);
  }

}

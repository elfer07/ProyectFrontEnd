import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { EducationService } from '../service/education.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[] = [];

  constructor(private educationService: EducationService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.uploadEducation();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  uploadEducation(): void{
    this.educationService.lista().subscribe(
      data =>{
        this.education = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.educationService.delete(id).subscribe(
        data => {
          this.uploadEducation();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }

}

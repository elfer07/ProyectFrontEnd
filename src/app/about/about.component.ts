import { Component, OnInit } from '@angular/core';
import { person } from '../model/person.model';
import { PersonService } from '../service/person.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  person: person = new person("", "", "", "");

  constructor(public personService: PersonService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.uploadPerson();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  uploadPerson() {
    this.personService.detail(1).subscribe(data => {
      this.person = data;
    })
  }
}

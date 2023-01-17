import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialNetwork } from '../model/social-network';
import { SocialNetworkService } from '../service/social-network.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoApComponent implements OnInit {

  linkedIn: string = "";
  facebook: string = "";
  instagram: string = "";
  github: string = "";
  twitter: string = "";

  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService, private socialNetworkService: SocialNetworkService) { }

  ngOnInit(): void {
    this.loadSocialNetworks();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadSocialNetworks() {
    this.socialNetworkService.list().subscribe(data => {
      this.linkedIn = data[0].linkNetwork;
      this.facebook = data[1].linkNetwork;
      this.github = data[2].linkNetwork;
      this.instagram = data[3].linkNetwork;
      this.twitter = data[4].linkNetwork;
    })
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

}

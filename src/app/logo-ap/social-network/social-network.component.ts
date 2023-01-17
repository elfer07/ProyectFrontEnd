import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialNetwork } from 'src/app/model/social-network';
import { SocialNetworkService } from 'src/app/service/social-network.service';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent implements OnInit {

  socialNetwork: SocialNetwork = null;

  constructor(private socialNetworkService: SocialNetworkService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.socialNetworkService.detail(id).subscribe(
      data => {
        this.socialNetwork = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.socialNetworkService.update(id, this.socialNetwork).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el link");
        this.router.navigate(['']);
      }
    )
  }

}

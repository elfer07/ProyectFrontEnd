import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialNetwork } from '../model/social-network';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  url = 'https://stable-larissa-elfer07.koyeb.app/socialnetwork/';

  constructor(private httClient: HttpClient) { }

  public list(): Observable<SocialNetwork[]> {
    return this.httClient.get<SocialNetwork[]>(this.url + 'list')
  }

  public detail(id: number): Observable<SocialNetwork>{
    return this.httClient.get<SocialNetwork>(this.url + `detail/${id}`);
  }

  public save(socialnetwork: SocialNetwork): Observable<any>{
    return this.httClient.post<any>(this.url + 'create', socialnetwork);
  }

  public update(id: number, socialnetwork: SocialNetwork): Observable<any>{
    return this.httClient.put<any>(this.url + `update/${id}`, socialnetwork);
  }

 
}

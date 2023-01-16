import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class SExperienceService {

  expURL = 'https://stable-larissa-elfer07.koyeb.app/explab/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.expURL + `detail/${id}`);
  } 

  public save(experiencia: Experience): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experience): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

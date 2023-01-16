import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  expURL = 'https://stable-larissa-elfer07.koyeb.app/projects/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Project>{
    return this.httpClient.get<Project>(this.expURL + `detail/${id}`);
  } 

  public save(project: Project): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', project);
  }

  public update(id: number, project: Project): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, project);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}

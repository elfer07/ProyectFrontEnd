import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = 'https://stable-larissa-elfer07.koyeb.app/persons/';

  constructor(private http: HttpClient) { }

  public list(): Observable<person[]> {
    return this.http.get<person[]>(this.url + 'lista');
  }

  public detail(id: number): Observable<person>{
    return this.http.get<person>(this.url + `detail/${id}`);
  }

  
  public update(id: number, education: person): Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, education);
  }

  
}

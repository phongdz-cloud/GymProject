import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const USERNAME_KEY = 'AuthUsername'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.url}/addUser`, user)
  }

  editUser(user: any, id: string): Observable<any> {
    return this.http.put<any>(`${this.url}/editUser/${id}`, user);
  }

  findUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/findUserById/${id}`);
  }

  findUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(`${this.url}/findUserByUsername/${username}`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/deleteUser/${id}`);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string | null {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public signOur() {
    window.sessionStorage.clear();
  }
}

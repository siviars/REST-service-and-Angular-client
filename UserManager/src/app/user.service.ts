import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {environment} from "../environments/environment";


@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/User`);
  }

  public setUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/User`, user);
  }

  public searchUser(user: User): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/search/${user.firstName}/${user.lastName}/${user.gender}/${user.dateOfBirth}`);
  }

}

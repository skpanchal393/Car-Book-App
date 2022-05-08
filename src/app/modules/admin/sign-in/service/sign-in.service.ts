import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  apiURL: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.baseURL
  }

  public login(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'adminAuth/login', Data)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiURL: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.baseURL
  }

  public getUserProfileAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'profile/getUserById', Data)
  }

  public updateUserProfileAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'profile/profileUpdate', Data)
  }
}

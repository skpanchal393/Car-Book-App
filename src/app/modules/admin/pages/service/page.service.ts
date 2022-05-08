import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  apiURL: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.baseURL
  }

  public getAllMenuAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'menu/getAllMenu', Data)
  }

  public getPagesListAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'pages/getPages', Data)
  }

  public createtPagesAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'pages/creatPage', Data)
  }

}

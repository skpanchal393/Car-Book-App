import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiURL: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiURL = environment.baseURL
  }

  public getAllMenuAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'menu/getAllMenu', Data)
  }

  public getBlogsListAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'Blogs/getBlogs', Data)
  }

  public createtBlogsAPI(Data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL + 'Blogs/creatBlog', Data)
  }

}

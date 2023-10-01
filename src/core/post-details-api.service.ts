import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments, POSTS_RESPONSE, USER_RESPONSE } from '../shared/post-details';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsApiService {
Url = "https://jsonplaceholder.typicode.com"
  constructor(
    private httpClient : HttpClient
  ) { }
  getPostDetailsData(): Observable<POSTS_RESPONSE[]>
  {
    return this.httpClient.get<POSTS_RESPONSE[]>(`${this.Url}/posts`)
  }
  getUserData() : Observable<USER_RESPONSE[]>{
    return this.httpClient.get<USER_RESPONSE[]>(`${this.Url}/users`)
  }
  getComments(postID : number): Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(`${this.Url}/comments?postId=${postID}`)
  }
}

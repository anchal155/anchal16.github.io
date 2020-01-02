import { Injectable } from '@angular/core';
//importing http client to make the requests
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import { Observable } from "rxjs";
import{catchError, tap} from "rxjs/Operators";

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs'
  public authToken='MWNhNzFhOGY5YzViZjhmZWIzZDcxNGNlMmQ4NDAxNThlNmRmNWNiZTc5NmY4ZjdlZDhlYjM1YzExOTExNTg2OTgzNDE2NzE0MjA2NGQzNWE3M2M5NjY4YzBhNzBlYTU2ZTA4YjZlODlhNjNkM2ZlYWY4ZjZhNzM5MzExMjlmNGU4OA=='
  ;

  constructor(private _http:HttpClient) { 
    console.log('Blog-http service was called');
  
  }

  //exception handler 
  private handleError(err:HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }


  public getAllBlogs():any{

  let myResponse = this._http.get(this.baseUrl+ '/all?authToken=' +this.authToken) 
    return myResponse;
  }
 

public getSingleBlogInformation(currentBlogId): any {

  let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
  return myResponse;


}

public createBlog(blogData): any {
  let data = {}
  let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
  return myResponse;
}//end create blog

public deleteBlog(blogId): any {

  let data = {}
  let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete'+ '?authToken=' + this.authToken, data)
  return myResponse;
}//end of delete blog 

public editBlog(blogId,blogData): any {

  let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit'+ '?authToken=' + this.authToken)
  return myResponse;

}//end of edit blog

}


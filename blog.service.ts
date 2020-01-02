import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2019-12-21T14:24:47.854Z",
      "created": "2019-12-21T14:24:47.854Z",
      "tags": [],
      "author": "Anchal Mantri",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "This is blog 1 description",
      "Title": "This is blog 1"
    },
      {
      "blogId": "2",
      "lastModified": "2019-12-20T14:24:47.854Z",
      "created": "2019-12-20T14:24:47.854Z",
      "tags": [],
      "author": "Anchal Mantri",
      "category": "Suspense",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>This is big Text </h1> <p> small text </p>",
      "description": "This is the example blog and this is one of the best example that has been given",
      "Title": "This is example blog"
    },

    {
      "blogId": "3",
      "lastModified": "2019-12-15T14:24:47.854Z",
      "created": "2019-12-15T14:24:47.854Z",
      "tags": [], 
      "author": "Anchal Mantri",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body.this is blog body and this is blog body",
      "description": "This is third blog description",
      "Title": "This is blog 3"
    }
      
  ]
  public currentBlog;

  public getAllBlogs():any{

    return this.allBlogs;

  }

  constructor(){ 

    console.log("service constructor is called");
  }

  public getSingleBlogInformation(currentBlogId: string): any {

    for (let blog of this.allBlogs){  
      if(blog.blogId==currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;

  }
}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';

import { BlogHttpService } from "../blog-http.service";
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';



@Component({ 
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location] 
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  constructor(private _route: ActivatedRoute, private router: Router, public blogService:BlogService, public blogHttpService:BlogHttpService, private Toastr:ToastrService, private location:Location) { 
    console.log("blog-view constructor called");

  }

  ngOnInit() {
    console.log("blog-view onInit called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
   console.log(myBlogId);

  this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

    data => {
      console.log(data);
      this.currentBlog = data["data"];
    },
    error => {
      console.log("some error occured");
      console.log(error.errorMessage)

    }
    
  )

  }

  public deleteThisBlog():any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log(data);
        this.Toastr.success('Blog deleted successfully', 'Success!');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },

      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        this.Toastr.error('Some error occured', 'error');
        }
    )  

}

public goBackToPreviousPage(): any {
  this.location.back();
}

}

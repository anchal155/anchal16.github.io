import { Component, OnInit} from '@angular/core';
import { BlogHttpService } from "../blog-http.service";
import { BlogService } from "./../blog.service";
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
  providers: [Location] 
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private _service:BlogService, private _route:ActivatedRoute, private router: Router, private toastr:ToastrService) {
    
   }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories= ["comedy", "Drama", "Action", "Technology"]

  ngOnInit() {
}

public createBlog(): any {
  let blogData= {
    title: this.blogTitle,
    description: this.blogDescription,
    blogBody: this.blogBodyHtml,
    category: this.blogCategory
  }//end of blog data

  console.log(blogData);

  this.blogHttpService.createBlog(blogData).subscribe(

    data =>{
      console.log("Blog Created")
      console.log(data);
      this.toastr.success('You are awesome!', 'Success!');
    
      setTimeout(()=>{
        this.router.navigate(['/blog', data.data.blogId]);
      }, 1000)
    },

  error =>{
      console.log("some error occured")
      console.log(error.errorMessage);
      this.toastr.error('This is not good!', 'Oops!');
  }

)
}//end create blog method
 
}


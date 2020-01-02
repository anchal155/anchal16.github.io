import { Component, OnInit, OnDestroy} from '@angular/core';
import { BlogService } from "../blog.service";
import { BlogHttpService } from "../blog-http.service"  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  

//declaring a variable to store the value 
 

  public allBlogs;


  constructor(public blogHttpService:BlogHttpService) { 
    console.log("Home componenet constructer called")
  }

  ngOnInit() {
    console.log("Home componenet OnInit called")
  //  this.allBlogs = this.BlogHttpService.getAllBlogs();

  this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

    data =>{
      console.log(data);
      this.allBlogs = data["data"];
    },

    error =>{
      console.log("some error occured");
      console.log(error.errorMessage)

    }
    
  )
  console.log(this.allBlogs);

  }

  ngOnDestroy() {
    console.log("Home componenet Destroyed")
  }


}

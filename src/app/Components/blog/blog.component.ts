import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import { blog } from '../../../locationmodule';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  data: any | blog[];
  constructor(private api: ServicesService) { }
  ngOnInit(): void {
    this.displayBlogs();
  }

  displayBlogs() {
    this.api.getBlogs().subscribe((res) => {
      this.data = res;
      // console.log(res);
    })
  }
}

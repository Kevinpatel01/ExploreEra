import { Component, OnInit } from '@angular/core';
import { location } from '../../../locationmodule';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit {

  category: string | any;
  locations: location[] | any;

  constructor(private route: ActivatedRoute, private service: ServicesService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newCategory = params.get('category');
      if(newCategory !== this.category){
        this.category = newCategory;
        this.getlocationsByCategory(this.category);
      }
    })
  }

  getlocationsByCategory(category: string){
    this.service.getlocationsByCategory(category).subscribe(locations => {
      // console.log("Locations are: ", locations);
      this.locations = locations;
    })
  }
}

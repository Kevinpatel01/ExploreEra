import { Component, OnInit } from '@angular/core';
import { location } from '../../../locationmodule';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {
  data: location[] = [];
  pagedData: location[] = [];
  currentPage: number = 1;
  itemsperPage: number = 12;

  constructor(private api: ServicesService) { }
  ngOnInit(): void {
    this.displayLocations();
  }

  displayLocations() {
    this.api.getLocations().subscribe((res: location[]) => {
      this.data = res;
      // console.log(res);
      this.paginateData();
    })
  }

  onPageChange(pageNumber : number) {
    this.currentPage = pageNumber;
    this.paginateData();
  }

  paginateData() {
    const startIndex = (this.currentPage - 1) * this.itemsperPage;
    const endIndex = Math.min(startIndex + this.itemsperPage, this.data.length);
    this.pagedData = this.data.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.itemsperPage);
  }

  // nextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.paginateData();
  //   }
  // }

  // previousPage() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.paginateData();
  //   }
  // }

}

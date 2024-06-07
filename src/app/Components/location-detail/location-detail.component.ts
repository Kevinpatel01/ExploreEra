import { Component, OnInit } from '@angular/core';
import { location } from '../../../locationmodule';
import { ServicesService } from '../../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationstateserviceService } from '../../navigationstateservice.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent implements OnInit {
  locationdetail: any;
  constructor(private api: ServicesService, private activatedRoute: ActivatedRoute, private router: Router, private navigationService: NavigationstateserviceService) { }
  ngOnInit(): void {
    let locationId = this.activatedRoute.snapshot.paramMap.get('locationid');
    // console.log("Location Id is: ", locationId);
    locationId && this.api.getLocationDetail(locationId).subscribe(res => {
      this.locationdetail = res;
    })
  }

  planTravel(): void {
    if (this.locationdetail) {
      // console.log("Location detail before navigation: ", this.locationdetail);
      this.navigationService.setState({ location: this.locationdetail });
      this.router.navigate(["plan"]);
    } else {
      console.log("Location details is missing.");
    }
  }
}

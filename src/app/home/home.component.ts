import { LocationService } from './../shared/services/location.service';
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { ICoordinates } from '../shared/interfaces/location.interface';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {

  public latitude: number;
  public longitude: number;
  private subscription: Subscription;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.subscription = this.locationService.coordinates$.subscribe(
      (coordinates: ICoordinates) => {
        this.latitude = coordinates.latitude;
        this.longitude = coordinates.longitude;
      }
    )
  }

  onLouis() {}

  getLocation() {
    this.locationService.getLocation();
  }

  startWatchingLocation() {
    this.locationService.startWatchingLocation();
  }

  stopWatchingLocation() {
    this.locationService.stopWatchingLocation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

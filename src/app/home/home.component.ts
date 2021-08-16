import { HomePostsService } from './services/posts.service';
import { LocationService } from './../shared/services/location.service';
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { ICoordinates } from '../shared/interfaces/location.interface';
import { IPost } from '../shared/interfaces/post.interface';

@Component({
  selector: 'ns-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public posts: Array<IPost>;
  public latitude: number;
  public longitude: number;
  private subscription: Subscription;

  constructor(private postservice: HomePostsService, private locationService: LocationService) {}

  ngOnInit(): void {
    this.posts = this.postservice.getPosts();
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

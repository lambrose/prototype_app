import { ICoordinates } from './../interfaces/location.interface';
import { Injectable, NgZone } from '@angular/core';
import * as geolocation from '@nativescript/geolocation'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocationService {

    private watchId: number;
    public coordinates$ = new Subject<ICoordinates>();

    public constructor(private zone: NgZone) {}

    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            geolocation.enableLocationRequest().then(() => {
              geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                    resolve(location);
                }).catch(error => {
                    reject(error);
                });
            });
        });
    }

    public getLocation() {
        this.getDeviceLocation().then(result => {
          this.coordinates$.next({
            latitude: result.latitude,
            longitude: result.longitude
          });
        }, error => {
          this.coordinates$.next({
            latitude: 0,
            longitude: 0
          });
            console.error(error);
        });
    }

    public startWatchingLocation() {
        this.watchId = geolocation.watchLocation(location => {
            if(location) {
                this.zone.run(() => {
                    this.coordinates$.next({
                      latitude: location.latitude,
                      longitude: location.longitude
                    });
                });
            }
        }, error => {
            console.log(error);
        }, { updateDistance: 1, minimumUpdateTime: 1000 });
    }

    public stopWatchingLocation() {
        if(this.watchId) {
          geolocation.clearWatch(this.watchId);
          this.watchId = null;
          this.coordinates$.next({
            latitude: 0,
            longitude: 0
          });
        }
    }
}

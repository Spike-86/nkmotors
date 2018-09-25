import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GoogleAuthService } from 'ng-gapi';
import { GoogleApiService } from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http: HttpClient, private authService: GoogleAuthService, private gapiService: GoogleApiService) {

    gapiService.onLoad().subscribe(()=> {

      this.authService.getAuth().subscribe((auth) => {

        const options = {
          // headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        };

        this.http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJz1DhMMvP20YRn4ladlQv3I0&fields=name,rating,formatted_phone_number,review&key=AIzaSyCEg6sjpT6q4XHlLq04o_qdyuKXEuJEPy0', options)
          .subscribe(
            (data) => {
              console.log(data);
            }
          );
      });

    });


      // this.authService.getAuth().subscribe((auth) => {
      //
      //
      //   const options = {
      //     headers: new HttpHeaders({ 'Content-Type': 'application/json'})
      //   };
      //
      //   this.http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJz1DhMMvP20YRn4ladlQv3I0&fields=name,rating,formatted_phone_number,review&key=AIzaSyAIMODE0OGgF8VEWjbglWZ1fV3nZZ6t2ig', options)
      //     .subscribe(
      //       (data) => {
      //         console.log(data);
      //       }
      //     );
      // });

  }

  // getReviews() {
  //     this.authService.getAuth().subscribe((auth) => {
  //       const options = {
  //         headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  //       };
  //
  //       this.http.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJz1DhMMvP20YRn4ladlQv3I0&fields=name,rating,formatted_phone_number,review&key=AIzaSyDgN788pK0PVI7B34_DKm8ek0Oovhk-Ytw', options)
  //         .subscribe(
  //         (data) => {
  //           console.log(data);
  //         }
  //       );
  //    });
  // }
}

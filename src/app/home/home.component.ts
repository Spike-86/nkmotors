import { Component, OnInit } from '@angular/core';
import {GoogleService} from '../google.service';
import { ReviewsService } from '../reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public reviews: ReviewsService) { }

  public origin: {};
  public destination: {};

  zoom: Number = 17;
  lat: Number = 53.8942298;
  lng: Number = 27.5887218;
  public markerOptions = {
    origin: {

    },
    destination: {
      label: 'НК Моторс',
      opacity: 0.8,
    },
  };

  ngOnInit() {
    // this.google.getReviews();
  }

  addRoute() {
    // if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        this.origin = { lat: position.coords.latitude, lng: position.coords.longitude, infoWindow: 'This is origin.' };
        this.destination = { lat: 53.8942298, lng: 27.5887218, label: 'MARKER LABEL' };
      });
    // }
  }
}

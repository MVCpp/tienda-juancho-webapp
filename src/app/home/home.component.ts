import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img:any;


  constructor(private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.img = "assets/imgs/juancho.jpg";
  }

}

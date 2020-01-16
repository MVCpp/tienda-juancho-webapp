import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({  
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private spinnerService: Ng4LoadingSpinnerService) {

    this.spinnerService.hide();

   }

  ngOnInit() {
    this.spinnerService.show();
  }

}

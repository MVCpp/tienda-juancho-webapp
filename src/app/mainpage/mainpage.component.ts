import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({  
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  slides:any[] = [{
    name: 'Tachito',
    img: 'assets/imgs/1.jpg',
    desc: 'Los clientes de Juancho'
  },
   {
     name: 'Siri',
     img: 'assets/imgs/2.png',
     desc: 'Los clientes de Juancho'
  },
  // {
  //   name: 'Anuncio',
  //   img: 'assets/imgs/9.png',
  //   desc: 'imagen de prueba2'
  // },
  // {
  //   name: 'Anuncio',
  //   img: 'assets/imgs/5.png',
  //   desc: 'imagen de prueba2'
  // }
  ]

  constructor(private spinnerService: Ng4LoadingSpinnerService,
              private _config: NgbCarouselConfig) {
    this.spinnerService.hide();
    _config.interval = 3000;
    _config.pauseOnHover = true;

   }

  ngOnInit() {
    this.spinnerService.show();
  }

}

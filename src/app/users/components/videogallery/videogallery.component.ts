import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css']
})
export class VideogalleryComponent implements OnInit {
  baseUrl:string = 'https://www.youtube.com/embed/DTA3jlTWSWQ;'
  url:any;
  constructor(private sanitizer: DomSanitizer) {

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);  

   }

   
  ngOnInit() {
  }

}

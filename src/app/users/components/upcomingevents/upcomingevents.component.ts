import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.css']
})

export class UpcomingeventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   click() { 
    $('#eventModal').show();
  }

  
}

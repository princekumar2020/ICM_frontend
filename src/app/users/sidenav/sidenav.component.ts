import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    var w = window.innerWidth;
    document.getElementById("mySidenav").style.width = w+"px";
    $('.closebtn').css({'display':'block'});
    $('.openbtn').hide();
  }

   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('.closebtn').hide();
    $('.openbtn').show();
  }



}

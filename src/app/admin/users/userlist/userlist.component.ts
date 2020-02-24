import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor() { }


  
  List: any=[
    {
    "id":1,
    "name":"Admin User",
    "email":"admin@gmail.com",
    "role":"Admin",
    }
   ]

  ngOnInit() {
  }

}

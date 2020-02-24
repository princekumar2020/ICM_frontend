import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor() { }


  public data;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    // this.clearData();
    return temp;
  }

  // clearData(){
  //   this.data = undefined;
  // }





}

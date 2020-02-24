import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:any = {
    username : '',
    password : ''
  };
  constructor(private _userSer : UserService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this._userSer.userLogin(form.value).subscribe(res => {
      console.log(res);
    })
    // this._commonAlertService.successToast('Admin Uploaded Successfully');
    this.user = {};
    form.resetForm();
  }

}

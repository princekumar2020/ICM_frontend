import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import * as $ from "jquery";
import { UserService } from 'src/app/services/user.service';
import { filter } from 'rxjs/operators';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-menu-mangement',
  templateUrl: './menu-mangement.component.html',
  styleUrls: ['./menu-mangement.component.css']
})
export class MenuMangementComponent implements OnInit {
  postId: string;
  getbyid:any;
  myPage:FormGroup
  
  List: any=[
{
"id":1,
"heading":"fjgfgj",
"sub_heading":"djfhdd",
"sub_heading2":"jdfjdj",
"sub_heading3":"kdfgdfjg"
},

{
  "id":2,
  "heading":"fjgfgj",
  "sub_heading":"djfhdd",
  "sub_heading2":"jdfjdj",
  "sub_heading3":"kdfjkdjkf"
  }

  ]
 
  constructor(private _userSer : UserService, private fb: FormBuilder ) {

    this.myPage = this.fb.group(
      {
        heading: ["", Validators.required],
        sub_heading: ["", Validators.required],
        sub_heading2: ["", Validators.required],
        sub_heading3: ["", Validators.required]
  
      })

   }

  ngOnInit() {
  }

  // public page:any = [{
  //   id:'',
  //   heading : '',
  //   sub_heading : '',
  //   sub_heading2:'',
  //   sub_heading3:'',

  // }];

  submit() {

    if (this.postId == "") {
      
       this.myPage.reset();
        this._userSer.newPage(this.myPage.value).subscribe(res => {
          this.List.push(res["post"]);
        })

      }
  
    else {
      this._userSer.updatePage(this.myPage.value, this.postId).subscribe(res => {
       
      }
      )
      this.postId = "";
    }
    this.myPage.reset();
  }

  edit(_id) {
    this.postId = _id;
    this.getbyid=this.List.find(o=>o.id==_id);
          // console.log(this.getbyid);
       this.myPage.patchValue(this.getbyid);
    }
    
  }


  // delete(_id) {
  //   this.emp.deletePost(_id).subscribe(res => {
  //     console.log(res);
  //     //we have to update the list in frontend we haven't call the api
  //     alert(res['message']);
  //     this.List.splice(_id,1);
  //   }
  //   );

  // }



  // this._commonAlertService.successToast('Admin Uploaded Successfully');
  







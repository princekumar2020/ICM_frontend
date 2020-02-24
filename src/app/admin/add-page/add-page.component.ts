import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
// import Image from '@ckeditor/ckeditor5-image/src/image';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  public Editor = ClassicEditor;

myPage:FormGroup
  postId: string;
  List: any;
  getbyid: any;
constructor(private _userSer : UserService, private fb: FormBuilder ) {

  ClassicEditor
  .create( document.querySelector( '#editor' ), {
      plugins: [ Image ],
      image: {
          toolbar: [ 'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side' ]
      }
  } )




}

  ngOnInit() {

    this.myPage = this.fb.group(
      {
        title: ["", Validators.required],
        sub_heading: ["", Validators.required],
        sub_heading2: ["", Validators.required],
        discription: ["", Validators.required],
  
      })
  }

  showMainContent: Boolean = true;

  
   ShowHideButton() {
      this.showMainContent = this.showMainContent ? false : true;
   }



   

   


//   public model = {
//     editorData: '<p>Hello, world!</p>'
// };

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











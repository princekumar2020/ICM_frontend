import { Component, OnInit } from '@angular/core'
import "froala-editor/js/plugins/file.min.js"
import "froala-editor/js/plugins/table.min.js"
import "froala-editor/js/plugins/image.min.js"
import "froala-editor/js/plugins/code_view.min.js"
import "froala-editor/js/plugins/link.min.js"

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {

  constructor() { }

 public editorContent:string="" ;
  List: any=[
    {
    "id":1,
    "title":"Lorem Ipsum",
    "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .... "
    }
   ]

  ngOnInit() {
    
  }

  // public options: Object = {
  //   charCounterCount: true,
  //   // Set the image upload parameter.
  //   imageUploadParam: 'image_param',

  //   // Set the image upload URL.
  //   imageUploadURL: 'assets/upload_image',

  //   // Additional upload params.
  //   imageUploadParams: {id: 'my_editor'},

  //   // Set request type.
  //   imageUploadMethod: 'POST',

  //   // Set max image size to 5MB.
  //   imageMaxSize: 5 * 1024 * 1024,

  //   // Allow to upload PNG and JPG.
  //   imageAllowedTypes: ['jpeg', 'jpg', 'png'],
  //   events:  {
  // 'froalaEditor.initialized':  function () {
  //   console.log('initialized');
  // },
  // 'froalaEditor.image.beforeUpload':  function  (e,  editor,  images) {
  //   //Your code 
  //   if  (images.length) {
  //     // Create a File Reader.
  //     const  reader  =  new  FileReader();
  //     // Set the reader to insert images when they are loaded.
  //     reader.onload  =  (ev)  =>  {
  //       const  result  =  ev.target['result'];
  //       editor.image.insert(result,  null,  null,  editor.image.get());
  //       console.log(ev,  editor.image,  ev.target['result'])
  //     };
  //     // Read image as base64.
  //     reader.readAsDataURL(images[0]);
  //   }
  //   // Stop default upload chain.
  //   return  false;
  // }

  //   }}



//   public options: Object = {
//     charCounterCount: true,
//     // Set the image upload parameter.
//     imageUploadParam: 'image_param',

//     // Set the image upload URL.
//     imageUploadURL: 'assets/upload_image',

//     // Additional upload params.
//     imageUploadParams: {id: 'my_editor'},

//     // Set request type.
//     imageUploadMethod: 'POST',

//     // Set max image size to 5MB.
//     imageMaxSize: 5 * 1024 * 1024,

//     // Allow to upload PNG and JPG.
//     imageAllowedTypes: ['jpeg', 'jpg', 'png'],

// };



    }

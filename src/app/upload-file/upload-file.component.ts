import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from './uploadFileService/upload-file-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;

  constructor(private service: UploadFileServiceService) { }

  ngOnInit() {
  }

  onChange(event){
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    //document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i=0; i<selectedFiles.length; i++){
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
  }

  onUpload(){
    if (this.files && this.files.size > 0){
      this.service.upload(this.files, 'http://localhost:8000/upload')
        .subscribe(response => console.log('Upload Concluido'));
    }
  }

}

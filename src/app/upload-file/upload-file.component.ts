import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from './uploadFileService/upload-file-service.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress = 0;

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

    this.progress = 0;
  }

  onUpload(){
    if (this.files && this.files.size > 0){
      this.service.upload(this.files, '/api/upload')
        .subscribe((event: HttpEvent<Object>) => {
          //HttpEventType
          console.log(event);
          if (event.type == HttpEventType.Response){
            console.log('Upload Concluido');
          }

          else if (event.type == HttpEventType.UploadProgress){
            const percentDone = Math.round((event.loaded * 100) / event.total);
            console.log('Progresso', percentDone);
            this.progress = percentDone;
          }
        } );
    }
  }

}

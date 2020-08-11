import { Component, OnInit } from '@angular/core';
import { UploadFileServiceService } from './uploadFileService/upload-file-service.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';
import { filterResponse, uploadProgress } from '../shared/rxjs-operators';
import { environment } from '../../environments/environment';

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
      this.service.upload(this.files, 'http://localhost:9090/biblioteca/uploadFile2/12')
        .pipe(
          uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        //.subscribe(response => console.log('Upload Concluido'));
        .subscribe(response => this.teste(response));
        /*
        .subscribe((event: HttpEvent<Object>) => {
          //console.log(event);
          if (event.type == HttpEventType.Response){
            console.log('Upload Concluido');
          }

          else if (event.type == HttpEventType.UploadProgress){
            const percentDone = Math.round((event.loaded * 100) / event.total);
            //console.log('Progresso', percentDone);
            this.progress = percentDone;
          }
        } );
        */
    }
  }

  teste(response){
    console.log(response.fileDownloadUri)
  }

  onDownloadExcel(){
    this.service.download('/api/downloadExcel')
      .subscribe((res: any) => {
        const file = new Blob([res], {
          type: res.type
        });

        const blob = window.URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = blob;
        link.download = 'report.xlsx';

        link.click();

        window.URL.revokeObjectURL(blob);
        link.remove();
      });

  }

  onDownloadPDF(){

  }
}

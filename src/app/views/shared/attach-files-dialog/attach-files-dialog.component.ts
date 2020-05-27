import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AttachFilesService } from './../../../services/attach-files.service';
import { saveAs } from 'file-saver';

// Translate
import { CommonService } from './../../../services/common.service';

@Component({
  selector: 'app-attach-files-dialog',
  templateUrl: './attach-files-dialog.component.html',
  styleUrls: ['./attach-files-dialog.component.css']
})
export class AttachFilesDialogComponent implements OnInit {
  public files: Array<File> = [];
  displayedColumns = ['index', 'filename', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loadListFiles: boolean;
  fileInsert: Array<String> = [];
  constructor(
    private _http: HttpClient,
    private attachFiles: AttachFilesService,
    private common: CommonService,
    public dialogRef: MatDialogRef<AttachFilesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.loadListFiles = false;
    this.onSearch();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearch(): void {
    this.getAttachFile();
  }
  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push(file);
      }
    };
    fileUpload.click();
  }
  onSubmit() {
    this.insertAttachFile();
  }
  cancelFile(file: File) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
  clickMethodDelete(data: any) {
    if (confirm('You sure delete file' + data.filename)) {
      this.deleteAttachFile(data);
    }
  }
  getAttachFile() {
    this.attachFiles.getAttachFilesDetail({
      tableName: this.data.tableName,
      id_data: this.data.id_data
    }, this.data.permission).subscribe(res => {
      this.loadListFiles = true;
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  insertAttachFile() {
    this.fileInsert = [];
    const fd = new FormData();
    if (!this.data.tableName || !this.data.id_data) {
      return;
    }
    if (!this.files[0]) {
      this.common.messageErr({ error: { message: 'No file uploaded' }});
      // this.translate.get('No file uploaded').subscribe((text:string) => {console.log(text)})
      return;
    }
    fd.append('attach', this.files[0], this.data.id_data + ',' + this.data.tableName);
    for (let index = 0; index < this.files.length; index++) {
      this.fileInsert.push(this.files[index].name);
      fd.append('attach', this.files[index], this.files[index].name);
    }
    // tslint:disable-next-line: max-line-length
    this.attachFiles.insertAttachFiles({ tableName: this.data.tableName, id_data: this.data.id_data, files: this.fileInsert.toString() }, this.data.permission)
      .subscribe(res => {
        if (res.error) {
          this.common.messageErr(res);
        } else {
          this.attachFiles.uploadAttachFiles(fd, this.data.permission)
            // tslint:disable-next-line: no-shadowed-variable
            .subscribe(res => {
              if (res.error) {
                this.common.messageErr(res);
              } else {
                this.dataSource = new MatTableDataSource(res.data);
                this.dataSource.sort = this.sort;
                this.files = [];
                this.onSearch();
              }
            });
        }
      });
  }
  deleteAttachFile(data: any) {
    this.attachFiles.deleteAttachFilesDetail({ id: data.id }, this.data.permission).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.onSearch();
      }
    });
  }
  downloadAttachFiles(data: any) {
    this.attachFiles.downloadAttachFiles({ path: data.path }, this.data.permission).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        saveAs(new File([res], data.filename));
      }
    });
  }
}


import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// Translate
import { LanguageService } from './../../../services/language.service';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {
  constructor(
    private languageService: LanguageService,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.currentLanguage();
  }
  currentLanguage() {
    return this.languageService.translate.currentLang;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

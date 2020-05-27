import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({ providedIn: 'root' })
export class LanguageService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  constructor(
    private translateService: TranslateService,
    private toastrService: ToastrService,
  ) { }

  setInitState() {
    this.translateService.addLangs(['en', 'vi']);
    const browserLang = (this.translate.getBrowserLang().includes('vi')) ? 'en' : 'vi';
    this.setLang(browserLang);
  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
  }
  bitToValue = (value) => {
    if (value == null) {
      return 0;
    } else if (value.data) {
      return value.data[0];
    } else {
      return value ? 1 : 0;
    }
  }
  messageRes(res: any) {
    this.toastrService.success(this.translate.instant(res.message));
  }
  messageErr(res: any) {
    console.log(res);
    this.toastrService.error(this.translate.instant(res.error.message));
  }
}


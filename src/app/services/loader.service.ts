import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
    isLoading = new Subject<boolean>();
    timer: any;
    show() {
      clearTimeout(this.timer);
      this.timer = setTimeout (() => {
        this.isLoading.next(true);
      }, 500);
    }

    hide() {
      clearTimeout(this.timer);
      this.isLoading.next(false);
    }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { AuthConstants } from '../../config/auth-constants';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems: INavData[];
  public sidebarOff = 'lg';
  user: {};

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private translateService: TranslateService,
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.selectLanguageVI();
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  selectLanguageVI() {
    this.translateService.use('vi');
  }
  selectLanguageEN() {
    this.translateService.use('en');
  }
  logout() {
    this.authService.logout();
  }
}

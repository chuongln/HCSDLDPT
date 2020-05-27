import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../../config/auth-constants';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  postData = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private common: CommonService,
  ) { }

  ngOnInit() { }

  validateInputs() {
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();
    return (
      this.postData.username &&
      this.postData.password &&
      username.length > 0 &&
      password.length > 0
    );
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.getToken(this.postData).subscribe(
        (res: any) => {
          if (res) {
            if (res.error) {
              this.common.messageErr(res);
            } else if (res.auth) {
              // Storing the User data.
              this.storageService.store(AuthConstants.TOKEN, res.token).then(() => {
                this.authService.refreshToken();
                this.router.navigate(['/dashboard']);
              });
              this.common.messageRes(res.message);

            } else {
              this.common.messageErr(res);
            }
          }
        },
        (error: any) => {
          this.common.messageErr(error);
          console.log(error);
        }
      );
    } else {
      this.common.messageErr({error: {message: 'Please enter email/username or password.'}});

      // this.toastrService.error('Please enter email/username or password.');
    }
  }
}

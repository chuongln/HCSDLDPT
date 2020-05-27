import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';
import { PortalAccountService } from './../../services/portal-account.service';
import { CommonService } from '../../services/common.service';

@Component({
  templateUrl: './change-pass.component.html'
})
export class ChangePassComponent implements OnInit {
  changePassForm: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.changePassForm.controls; }

  constructor(
    private fb: FormBuilder,
    private account: PortalAccountService,
    private common: CommonService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.changePassForm = this.fb.group(
      {
        password: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmNewPassword: ['', [Validators.required]]
      }, {
      validator: MustMatch('newPassword', 'confirmNewPassword')
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changePassForm.invalid) {
      return;
    }

    // tslint:disable-next-line: prefer-const
    let data = {
      password: this.changePassForm.value.password,
      newPassword: this.changePassForm.value.newPassword
    };
    this.account.changePassword(data, {}).subscribe(res => {
      if (res.error) {
        this.common.messageErr(res);
      } else {
        this.common.messageRes(res.message);
      }
    });
  }
}

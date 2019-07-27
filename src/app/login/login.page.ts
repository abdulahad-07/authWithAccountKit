import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  phone: string = ''

  constructor(
    private router: Router
  ) { }

  login() {
    (<any>window)
      .AccountKitPlugin
      .loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "IN",
        facebookNotificationsEnabled: true,
        initialPhoneNumber: ['91', this.phone]
      }, (successdata) => {
        (<any>window).AccountKitPlugin.getAccount((user) => {
          this.phone = ''
          this.router.navigate(['home'])
        })
      }, (err) => {
        console.log(err)
      })
  }

}

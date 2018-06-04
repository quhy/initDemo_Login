import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';

import {User} from '../../providers';
import {MainPage} from '../';
import {TabsPage} from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private transateContent: any;
  public remName: boolean; // 记住密码标识
  public remPassword: boolean; // 记住密码标识
  public flag: boolean = true;
  public username: string = '';
  public password: string = '';// 账号
  public lag: string;// 语言
  public cn: string;
  public tw: string;
  public language: object[];

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService) {
    this.translateService.get(['LOGIN_ERROR','NOTICE', 'FORGET_ANSWER', 'OK']).subscribe((res: Object) => {
      this.transateContent = res;
    });
    //初始化是否记住账号
    if (localStorage.getItem('remName') == null || localStorage.getItem('remName') == '') {
      this.remName = true;
      localStorage.setItem('remName', 'true');
    } else {
      this.remName = localStorage.getItem('remName') == 'true';
    }
    //初始化是否记住密码
    if (localStorage.getItem('remPassword') == null || localStorage.getItem('remPassword') == '') {
      this.remPassword = true;
      localStorage.setItem('remPassword', 'true');
    } else {
      this.remPassword = localStorage.getItem('remPassword') == 'true';
    }

    // 获取记住数据
    if (localStorage.getItem('username') != null) {
      this.username = localStorage.getItem('username');
    }
    if (localStorage.getItem('password') != null) {
      this.password = localStorage.getItem('password');
    }

    //多语言设置
    if (localStorage.getItem('lag') != null && localStorage.getItem('lag') == 'TW') {
      this.cn = '中文簡體';
      this.tw = '中文繁體';
      this.lag = 'zh-cmn-Hant';
    } else {
      this.cn = '中文简体';
      this.tw = '中文繁体';
      this.lag = 'zh-cmn-Hans';
    }
    // 语言显示列表
    this.language = [{value: 'zh-cmn-Hans', name: this.cn}, {value: 'zh-cmn-Hant', name: this.tw}];

  }


  // 记住账号
  ChangeRemName(rem) {
    if (rem) {
      this.remName = rem;
      localStorage.setItem('remName', rem);
    } else {
      this.remName = rem;
      localStorage.setItem('username', '');
      localStorage.setItem('remName', rem);
    }
  }

  // 记住密码
  ChangeRemPassword(rem) {
    if (rem) {
      this.remPassword = rem;
      localStorage.setItem('remPassword', rem);
    } else {
      this.remPassword = rem;
      localStorage.setItem('password', '');
      localStorage.setItem('remPassword', rem);
    }
  }

  // 切换语言
  ChangeLanguage(lag) {
    localStorage.setItem('lag', lag);
    if (lag == 'zh-cmn-Hant') {
      this.cn = '中文簡體';
      this.tw = '中文繁體';
      this.lag = 'zh-cmn-Hant';
    } else {
      this.cn = '中文简体';
      this.tw = '中文繁体';
      this.lag = 'zh-cmn-Hans';
    }
    // this.lag = lag;
    this.language.splice(0);
    this.language = [{value: 'CN', name: this.cn}, {value: 'TW', name: this.tw}];
    this.translateService.use(lag).subscribe(
      ret=>{
        console.log("測試")
        console.log(ret)
      }
    );
  }

  // 登录
  doLogin() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('userPwd', this.password);
    this.navCtrl.push('TabsPage');
  }

  check() {
    if (this.username && this.password) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

}

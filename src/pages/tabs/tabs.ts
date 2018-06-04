import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import {Tab1Root, Tab2Root} from "../index";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;

  tab1Title = " ";
  tab2Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['HOME', 'SETTING']).subscribe(values => {
      this.tab1Title = values['HOME'];
      this.tab2Title = values['SETTING'];
    });
  }
}

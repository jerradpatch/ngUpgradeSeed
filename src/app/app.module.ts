import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}

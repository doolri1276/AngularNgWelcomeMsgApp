import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms'
import { I18nSupportService } from './i18n-support.service';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule } from '@angular/material';

//NgModule 데커레이터
@NgModule({
  // 사용할 모든 컴포넌트들을 배열로 선언 (선언해야 사용 가능하다)
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule
  ],
  providers: [
    {provide: COMPOSITION_BUFFER_MODE, useValue:false},
    I18nSupportService
  ],
  bootstrap: [AppComponent] //브라우저에서 최초 index.html을 요청하여 애플리케이션을 실행할 때 사용할 컴포넌트
})
export class AppModule { }

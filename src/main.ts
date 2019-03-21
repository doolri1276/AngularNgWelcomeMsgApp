import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//이 코드로 모듈을 읽어들이고 컴포넌트를 컴파일 하는 것
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//이곳에서 하는 일
//컴포넌트를 앵귤러가 평범한 자바스크립트 코드로 변환하여 대신실행해줌
//이 과정을 위해 반드시 NgModule에 컴포넌트를 등록하여야 사용할 수 있다

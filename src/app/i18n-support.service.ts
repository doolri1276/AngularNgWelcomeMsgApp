import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {
	langCode = 'ko';
	private welcomeMsg;

  constructor() { 
  	this.welcomeMsg = {
		'ko': '안녕하세요',
		'en': 'Hello',
		'jp': 'こんにちは',
		'fr': 'Bonjour',
		'ch': '你好'
	}
  }

  getWelcomeMsg(userName: string){
  	const helloMsg = this.welcomeMsg[this.langCode];
  	return `${helloMsg}, ${userName}`;
  }

}

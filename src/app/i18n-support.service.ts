import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nSupportService {
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

  getWelcomeMsgByCode(userName: string, code: string){
  	const helloMsg = this.welcomeMsg[code];
  	return `${helloMsg}, ${userName}`;
  }
}

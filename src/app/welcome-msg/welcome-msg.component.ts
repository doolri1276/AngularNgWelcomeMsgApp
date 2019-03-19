import { Component, OnInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';


@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {

  	constructor(public i18nSupporter: I18nSupportService) { }

  	ngOnInit() {
  	}

  	userName="";

	private valid = false;
	private static CHK_KEYUP_WAIT_SEC = 5000;
	private welcomeMsg: string;

	// 예제 3-9에서 삭제
	// ngAfterViewInit() {
	// 	const checkTouchFn = () => {
	// 		if(this.valid) return;
	// 		alert('이름을 입력해 주세요');
	// 	}

	// 	setTimeout(checkTouchFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
	// }

	// onKeyUp(name) {
	// 	this.valid = name.length > 0;
	// }

	// setName(name){
	// 	this.userName=name;
	// }

	onChange() {
		this.valid = this.userName.length > 0;
	}

	showWelcomeMsg() {
		this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
	}

}

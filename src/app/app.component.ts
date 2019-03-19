import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	title = 'ng-welcome-msg-app';
	userName="";

	private valid = false;
	private static CHK_KEYUP_WAIT_SEC = 5000;

	ngAfterViewInit() {
		const checkTouchFn = () => {
			if(this.valid) return;
			alert('이름을 입력해 주세요');
		}

		setTimeout(checkTouchFn, AppComponent.CHK_KEYUP_WAIT_SEC);
	}

	onKeyUp(name) {
		this.valid = name.length > 0;
	}

	setName(name){
		this.userName=name;
	}
}

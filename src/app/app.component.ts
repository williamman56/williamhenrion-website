import { Component, ViewEncapsulation } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None,
  host: {
    "(window:click)": "onClick()"
  }
})
export class AppComponent {
  faBars = faBars;
	open = false;
	
	toggleMenu(e: any) {
		e.stopPropagation();
		this.open = !this.open;
	}
	
	onClick() {
		this.open = false;
	}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class MenuComponent implements OnInit {

	@Input() public name: string;
	public menuOpen = false;

  constructor() {
		this.name = "Default";
	}

  ngOnInit(): void {
  }

	toggleOpen(e: any) {
		e.stopPropagation();
		this.menuOpen = !this.menuOpen;
	}

	onClick() {
		this.menuOpen = false;
	}

}

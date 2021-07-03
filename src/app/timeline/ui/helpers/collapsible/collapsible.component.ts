import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

	@Input() public name: string | null = null;
	public isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
	
	

	expand(e: any) {
		e.stopPropagation();
		this.isOpen = true;
	}
	
	collapse(e: any) {
		e.stopPropagation();
		this.isOpen = false;
	}

}

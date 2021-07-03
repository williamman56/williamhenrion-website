import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

	@Input() public src: string = "";
	@Input() public name: string = "";
	@Input() public desc: string = "";
	@Input() public index: number = 0;
	
	public floatLeft: boolean = true;

  constructor() { }

	ngOnInit(): void {
	}

  ngOnChanges(): void {
		this.floatLeft = (this.index%2 == 0);
  }

}

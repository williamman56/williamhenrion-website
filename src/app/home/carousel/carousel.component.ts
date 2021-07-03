import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	@Input() public slides: Array<any> = [];
	
	public currentSlide: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
	
	onSelectSlide() {
		console.log('select');
		switch (this.currentSlide) {
			case 0:
				this.router.navigate(['/comics']);
				break;
			case 1:
				
				break;
			case 2:
				//Clicking bio does nothing right now
				break;
		}
	}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}

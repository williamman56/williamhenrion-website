import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event, defaultEvent } from '@timeline/model/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	@Input() public storyEvent: Event;
	@Output() public edit: EventEmitter<Event>;

  constructor() {
		this.storyEvent = defaultEvent;
		
		this.edit = new EventEmitter<Event>();
	}

  ngOnInit(): void {
  }
	
	editEvent(e: any) {
		e.stopPropagation();
		this.edit.emit(this.storyEvent);
	}

}

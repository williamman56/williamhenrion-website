import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Timeline } from '@timeline/model/timeline';
import { Attribute, defaultAttribute } from '@timeline/model/character';
import { Event, defaultEvent } from '@timeline/model/event';

@Component({
  selector: 'app-attribute-form',
  templateUrl: './attribute-form.component.html',
  styleUrls: ['./attribute-form.component.css']
})
export class AttributeFormComponent implements OnInit {

	@Input() public attribute: Attribute;
	@Input() public editing: boolean = false;
	@Input() public depth: number = 0;
	@Input() public timeline: Timeline | null = null;
	@Output() public editEvent: EventEmitter<Event>;
	@Output() public selectEventAdd: EventEmitter<Attribute>;
	@Output() public selectEventRemove: EventEmitter<Attribute>;
	@Output() public deleteAttribute: EventEmitter<Attribute>;

  constructor() {
		this.attribute = defaultAttribute;
		this.editEvent = new EventEmitter<Event>();
		this.selectEventAdd = new EventEmitter<Attribute>();
		this.selectEventRemove = new EventEmitter<Attribute>();
		this.deleteAttribute = new EventEmitter<Attribute>();
	}

  ngOnInit(): void {
  }
	
	getEvent(index: number): Event {
		if (this.timeline)
			return this.timeline.getEvent(index);
		else
			return defaultEvent;
	}
	
	addAttribute() {
		if (this.timeline)
			this.timeline.addAttribute(this.attribute);
	}
	
	deleteThisAttribute() {
		//An attribute does not have enough context about itself to delete itself directly
		this.deleteAttribute.emit(this.attribute);
	}
	
	deleteChildAttribute(e: Attribute) {
		if (this.timeline)
			this.timeline.deleteAttribute(this.attribute, e.index);
	}

	onClickEvent(e: Event) {
		this.editEvent.emit(e);
	}
	addEvent() {
		this.selectEventAdd.emit(this.attribute);
	}
	removeEvent() {
		this.selectEventRemove.emit(this.attribute);
	}
	
	continueOnClickEvent(e: Event) {
		this.editEvent.emit(e);
	}
	continueAddEvent(e: Attribute) {
		this.selectEventAdd.emit(e);
	}
	continueRemoveEvent(e: Attribute) {
		this.selectEventRemove.emit(e);
	}
}

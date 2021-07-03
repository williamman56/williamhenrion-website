import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Event, defaultEvent } from '@timeline/model/event';
import { Character, defaultCharacter } from '@timeline/model/character';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

	@Input() public editingEvent: Event;
	@Output() public closeEvent: EventEmitter<Event>;
	@Output() public deleteEvent: EventEmitter<Event>;
	@Output() public editCharacter: EventEmitter<Character>;
	@Output() public selectCharAdd: EventEmitter<Event>;
	@Output() public selectCharRemove: EventEmitter<Event>;
	public editing: boolean = false;

  constructor(private timelineService: TimelineService) {
		this.editingEvent = defaultEvent;
		this.closeEvent = new EventEmitter<Event>();
		this.deleteEvent = new EventEmitter<Event>();
		this.editCharacter = new EventEmitter<Character>();
		this.selectCharAdd = new EventEmitter<Event>();
		this.selectCharRemove = new EventEmitter<Event>();
	}

  ngOnInit(): void {
  }
	
	closeForm() {
		this.closeEvent.emit(this.editingEvent);
	}

	toggleEditing() {
		this.editing = !this.editing;
	}
	
	deleteEntry() {
		//console.log(this.editingEvent);
		this.deleteEvent.emit(this.editingEvent);
	}
	
	getCharacter(index: number): Character {
		let t = this.timelineService.getTimeline()
		if (t)
			return t.getCharacter(index);
		else
			return defaultCharacter;
	}
	
	onClickCharacter(e: Character) {
		this.editCharacter.emit(e);
	}
	
	addCharacter() {
		this.selectCharAdd.emit(this.editingEvent);
	}
	removeCharacter() {
		this.selectCharRemove.emit(this.editingEvent);
	}
}

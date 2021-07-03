import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Arc, defaultArc } from '@timeline/model/arc';
import { Event, defaultEvent } from '@timeline/model/event';
import { Character, defaultCharacter} from '@timeline/model/character';
import { formType } from '@timeline/model/form-type';

@Component({
  selector: 'app-arc-form',
  templateUrl: './arc-form.component.html',
  styleUrls: ['./arc-form.component.css']
})
export class ArcFormComponent implements OnInit {

  @Input() public editingArc: Arc;
	@Output() public closeArc: EventEmitter<Arc>;
	@Output() public deleteArc: EventEmitter<Arc>;
	@Output() public editEvent: EventEmitter<Event>;
	@Output() public editCharacter: EventEmitter<Character>;
	@Output() public selectEventAdd: EventEmitter<Arc>;
	@Output() public selectCharAdd: EventEmitter<Arc>;
	@Output() public selectEventRemove: EventEmitter<Arc>;
	@Output() public selectCharRemove: EventEmitter<Arc>;
	public editing: boolean = false;

  constructor(private timelineService: TimelineService) {
		this.editingArc = defaultArc;
		this.closeArc = new EventEmitter<Arc>();
		this.deleteArc = new EventEmitter<Arc>();
		this.editEvent = new EventEmitter<Event>();
		this.editCharacter = new EventEmitter<Character>();
		this.selectEventAdd = new EventEmitter<Arc>();
		this.selectCharAdd = new EventEmitter<Arc>();
		this.selectEventRemove = new EventEmitter<Arc>();
		this.selectCharRemove = new EventEmitter<Arc>();
	}

  ngOnInit(): void {
  }
	
	addEvent() {
		this.selectEventAdd.emit(this.editingArc);
	}
	addCharacter() {
		this.selectCharAdd.emit(this.editingArc);
	}
	
	removeEvent() {
		this.selectEventRemove.emit(this.editingArc);
	}
	removeCharacter() {
		this.selectCharRemove.emit(this.editingArc);
	}
	
	closeForm() {
		this.closeArc.emit(this.editingArc);
	}
	
	deleteEntry() {
		this.deleteArc.emit(this.editingArc);
	}

	toggleEditing() {
		this.editing = !this.editing;
	}
	
	getEvent(index: number): Event {
		let t = this.timelineService.getTimeline()
		if (t)
			return t.getEvent(index);
		else
			return defaultEvent;
	}
	
	getCharacter(index: number): Character {
		let t = this.timelineService.getTimeline()
		if (t)
			return t.getCharacter(index);
		else
			return defaultCharacter;
	}
	
	onClickEvent(e: Event) {
		this.editEvent.emit(e);
	}
	onClickCharacter(e: Character) {
		this.editCharacter.emit(e);
	}

}

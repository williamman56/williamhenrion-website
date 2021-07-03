import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character, defaultCharacter, Attribute } from '@timeline/model/character';
import { Timeline } from '@timeline/model/timeline';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

	@Input() public editingCharacter: Character;
	@Input() public timeline: Timeline | null = null;
	@Output() public closeCharacter: EventEmitter<Character>;
	@Output() public deleteCharacter: EventEmitter<Character>;
	
	@Output() public editEvent: EventEmitter<Event>;
	@Output() public selectEventAdd: EventEmitter<Attribute>;
	@Output() public selectEventRemove: EventEmitter<Attribute>;
	public editing: boolean = false;

  constructor() {
		this.editingCharacter = defaultCharacter;
		this.closeCharacter = new EventEmitter<Character>();
		this.deleteCharacter = new EventEmitter<Character>();
		
		this.editEvent = new EventEmitter<Event>();
		this.selectEventAdd = new EventEmitter<Attribute>();
		this.selectEventRemove = new EventEmitter<Attribute>();
	}

  ngOnInit(): void {
  }
	
	addAttribute() {
		if (this.timeline)
			this.timeline.addAttribute(this.editingCharacter);
	}
	
	closeForm() {
		this.closeCharacter.emit(this.editingCharacter);
	}
	
	toggleEditing() {
		this.editing = !this.editing;
	}
	
	deleteEntry() {
		this.deleteCharacter.emit(this.editingCharacter);
	}
	
	deleteAttribute(e: Attribute) {
		if (this.timeline)
			this.timeline.deleteAttribute(this.editingCharacter, e.index);
	}
	
	continueOnClickEvent(e: any) {
		this.editEvent.emit(e);
	}
	continueAddEvent(e: any) {
		this.selectEventAdd.emit(e);
	}
	continueRemoveEvent(e: any) {
		this.selectEventRemove.emit(e);
	}
}

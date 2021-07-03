import { Component, OnInit } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Timeline } from '@timeline/model/timeline';
import { Event, defaultEvent } from '@timeline/model/event';
import { Character, defaultCharacter } from '@timeline/model/character';
import { Arc, defaultArc } from '@timeline/model/arc';
import { formType } from '@timeline/model/form-type';

interface formId {
	type: formType;
	index: number;
	name: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

	public timeline: Timeline | null = null;
	public openForms: Array<formId> = new Array<formId>();
	public openForm: formId | null = null;
	public selectionMode: formType | null = null;
	public selectToAdd: boolean = true;
	private selectionDestination: any = null;
	
  constructor(private timelineService: TimelineService) {}

  ngOnInit(): void {
		this.timelineService.getTimelineSubj().subscribe({
			next: (t) => this.timeline = t
		});
  }
	
	formIsOpen(toCheck: formId): boolean {
		for (let f of this.openForms) {
			if (f.type == toCheck.type && f.index == toCheck.index) 
				return true;
		}
		return false;
	}
	
	getName(f: formId): string {
		switch (f.type) {
			case formType.Event:
				return this.getEvent(f.index).name;
			case formType.Character:
				return this.getCharacter(f.index).name;
			case formType.Arc:
				return this.getArc(f.index).name;
		}
		return "Default";
	}
	
	formIsActive(toCheck: formId): boolean {
		if (!this.openForm) return false;
		if (toCheck.type == this.openForm.type && toCheck.index == this.openForm.index)
			return true;
		else
			return false;
	}
	
	clickComponent(e: any, t: formType) {
		if (this.selectionMode == t) {
			switch (this.selectionMode.valueOf()) {
				case formType.Event:
					if (this.selectionDestination && this.timeline) {
						if (this.selectToAdd)
							this.timeline.addEventToList(e.index, this.selectionDestination);
						else
							this.timeline.removeEventFromList(e.index, this.selectionDestination);
					}
					break;
				case formType.Character:
					if (this.selectionDestination && this.timeline) {
						if (this.selectToAdd) 
							this.timeline.addCharacterToList(e.index, this.selectionDestination);
						else
							this.timeline.removeCharacterFromList(e.index, this.selectionDestination);
					}
					break;
				case formType.Arc:
					console.log("Currently this cannot occur");
					break;
			}
			this.clearSelectionMode();
		} else {
			let descriptor = {type: t, index: e.index, name: e.name}
			if (!this.formIsOpen(descriptor)) {
				this.openForms.push(descriptor);
			}
			this.bringToFront(descriptor);
		}
	}
	
	waitForSelectEvent(e: any, add: boolean) {
		this.selectionMode = formType.Event;
		console.log(this.selectionMode);
		this.selectionDestination = e;
		this.selectToAdd = add;
	}
	waitForSelectChar(e: any, add: boolean) {
		this.selectionMode = formType.Character;
		this.selectionDestination = e;
		this.selectToAdd = add;
	}
	
	bringToFront(f: formId) {
		this.openForm = f;
		this.clearSelectionMode();
	}
	
	getEvent(i: number): Event {
		if (this.timeline) {
			return this.timeline.getEvent(i);
		} else {
			return defaultEvent;
		}
	}
	getCharacter(i: number): Character {
		if (this.timeline) {
			return this.timeline.getCharacter(i);
		} else {
			return defaultCharacter;
		}
	}
	
	getArc(i: number): Arc {
		if (this.timeline) {
			return this.timeline.getArc(i);
		} else {
			return defaultArc;
		}
	}
	
	//These are so the HTML can access the enum types
	getEventType(): formType {
		return formType.Event;
	}
	getCharacterType(): formType {
		return formType.Character;
	}
	getArcType(): formType {
		return formType.Arc;
	}
	
	getTabIndex(type: formType, index: number): number {
		for (let i = 0; i < this.openForms.length; i++) {
			if (this.openForms[i].type == type && this.openForms[i].index == index)
				return i;
		}
		return -1;
	}
	
	closeTab(e: any, t: formType) {
		let tab = this.getTabIndex(t, e.index);
		if (tab != -1) {
			this.openForms.splice(tab, 1);
		}
		this.clearSelectionMode();
	}
	
	deleteTab(e: any, t: formType) {
		this.closeTab(e, t);
		if (this.timeline) {
			switch (t) {
				case formType.Event:
					this.timeline.deleteEvent(e);
					break;
				case formType.Character:
					this.timeline.deleteCharacter(e);
					break;
				case formType.Arc:
					this.timeline.deleteArc(e);
					break;
			}
		}
		this.clearSelectionMode();
	}
	
	clearSelectionMode() {
		this.selectionMode = null;
		this.selectionDestination = null;
	}
	
	getClass(f: formId) {
		return {"edit-content": this.formIsActive(f)};
	}
	
	stopSelectionMode() {
		this.selectionMode = null;
	}
}

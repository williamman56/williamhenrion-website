import { Event, defaultEvent } from './event';
import { Character, defaultCharacter, Attribute, defaultAttribute } from './character';
import { Arc, defaultArc } from './arc';
import { formType } from './form-type';

export class Timeline {

	private _data: {timeline:{arcs: Array<Arc>, events: Array<Event>}, characters: Array<Character>};

	constructor(json: string) {
		this._data = JSON.parse(json);
	}
	
	public loadData(json: string) {
		this._data = JSON.parse(json);
	}
		
	get data(): any { return this._data };
	get arcs(): any { return this._data.timeline.arcs };
	get events(): any { return this._data.timeline.events };
	get characters(): any { return this._data.characters };
	
	getEvent(i: number): Event { return this._data.timeline.events[i] };
	getCharacter(i: number): any { return this._data.characters[i] };
	getArc(i: number): any { return this._data.timeline.arcs[i] };
	
	updateArcCharacterListFromEvents() {
		for (let arc of this.arcs) {
			for (let ev of arc.events) {
				for (let charIndex of this.getEvent(ev).characters) {
					this.addIfNotPresent(arc.characters, charIndex);
				}
			}
		}
	}
	
	addIfNotPresent(arr: Array<number>, val: number) {
		for (let i of arr) {
			if (i == val) return;
		}
		arr.push(val);
	}
	
	eventInArc(eventId: number): boolean {
		for (let arc of this.arcs) {
			for (let num of arc.events) {
				if (num == eventId)
					return true;
			}
		}
		return false;
	}
	characterInArc(characterId: number): boolean {
		for (let arc of this.arcs) {
			for (let num of arc.characters) {
				if (num == characterId)
					return true;
			}
		}
		return false;
	}
	
	getArclessEvents(): Array<Event> {
		let result = new Array<Event>();
		for (let e of this.events) {
			if (!this.eventInArc(e.index))
				result.push(e);
		}
		return result;
	}
	getArclessCharacters(): Array<Character> {
		let result = new Array<Character>();
		for (let e of this.characters) {
			if (!this.characterInArc(e.index))
				result.push(e);
		}
		return result;
	}
	
	addEvent() {
		this._data.timeline.events.push({
			name: "Default",
			index: this.events.length,
			description: "Default",
			occurrence: 0,
			time: 0,
			characters: []
		});
	}
	addCharacter() {
		this._data.characters.push({
			name: "Default",
			index: this.characters.length,
			description: "Default",
			start: 0,
			end: 0,
			attributes: []
		});
	}
	addArc() {
		this._data.timeline.arcs.push({
			name: "Default",
			index: this.arcs.length,
			description: "Default", 
			start: 0,
			end: 1,
			characters: [],
			events: []
		});
	}
	addAttribute(dest: any) {
		dest.attributes.push({
			name: "Default",
			index: dest.attributes.length,
			description: "Default",
			start: 0,
			end: 0,
			attributes: [],
			events: []
		});
	}
	
	deleteEvent(e: Event) {
		let val = e.index;
		this.events.splice(val, 1);
		this.decrementAllEventIndices(val);
	}
	deleteCharacter(e: Character) {
		let val = e.index;
		this.characters.splice(val, 1);
		this.decrementAllCharacterIndices(val);
	}
	deleteArc(e: Arc) {
		let val = e.index;
		this.arcs.splice(val, 1);
		for (let i = val; i < this.arcs.length; i++) {
			this.arcs[i].index = i;
		}
	}
	deleteAttribute(e: any, index: number) {
		e.attributes.splice(index, 1);
		for (let i = index; i < e.attributes.length; i++) {
			e.attributes[i].index = i;
		}
	}
	
	decrementAllCharacterIndices(base: number) {
		for (let arc of this.arcs) {
			arc.characters = arc.characters.filter((x:number)=> x != base).map((x:number) => {
				if (x > base) return x-1;
				else return x;
			});
		}
		
		for (let ev of this.events) {
			ev.characters = ev.characters.filter((x:number)=> x != base).map((x:number) => {
				if (x > base) return x-1;
				else return x;
			});
		}
		
		for (let i = base; i < this.characters.length; i++) {
			this.characters[i].index = i;
		}
	}
	
	decrementAllEventIndices(base: number) {
		for (let arc of this.arcs) {
			arc.events = arc.events.filter((x:number)=> x != base).map((x:number) => {
				if (x > base) return x-1;
				else return x;
			});
		}
		
		for (let i = base; i < this.events.length; i++) {
			this.events[i].index = i;
		}
		
		for (let character of this.characters) {
			for (let i = 0; i < character.attributes.length; i++) {
				this.decrementEventIndicesAttribute(character.attributes[i], base);
			}
		}
	}
	decrementEventIndicesAttribute(attr: Attribute, base: number) {
		attr.events = attr.events.filter((x:number)=> x != base).map((x:number) => {
			if (x > base) return x-1;
			else return x;
		});
		for (let i = 0; i < attr.attributes.length; i++) {
			this.decrementEventIndicesAttribute(attr.attributes[i], base);
		}
	}
	
	addEventToList(eventIndex: number, dest: any) {
		if (!dest.events) dest.events = [];
		for (let i of dest.events) {
			if (eventIndex == i) return;
		}
		dest.events.push(eventIndex);
	}
	addCharacterToList(charIndex: number, dest: any) {
		for (let i of dest.characters) {
			if (charIndex == i) return;
		}
		dest.characters.push(charIndex);
	}
	
	removeEventFromList(eventIndex: number, dest: any) {
		let i = dest.events.indexOf(eventIndex);
		if (i != -1) dest.events.splice(i, 1);
	}
	removeCharacterFromList(eventIndex: number, dest: any) {
		let i = dest.characters.indexOf(eventIndex);
		if (i != -1) dest.characters.splice(i, 1);
	}
}
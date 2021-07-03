import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character, defaultCharacter } from '@timeline/model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

	@Input() public character: Character;
	@Output() public edit: EventEmitter<Character>;

  constructor() {
		this.character = defaultCharacter;
		this.edit = new EventEmitter<Character>();
	}

  ngOnInit(): void {
  }
	
	editCharacter(e: any) {
		e.stopPropagation();
		this.edit.emit(this.character);
	}

}

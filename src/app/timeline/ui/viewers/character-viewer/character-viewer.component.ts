import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Timeline } from '@timeline/model/timeline';
import { Arc } from '@timeline/model/arc';
import { Character } from '@timeline/model/character';

@Component({
  selector: 'app-character-viewer',
  templateUrl: './character-viewer.component.html',
  styleUrls: ['./character-viewer.component.css']
})
export class CharacterViewerComponent implements OnInit {

  public timeline?: Timeline;//Optional ? to bypass assignment requirement
	public characters: Array<Character> = new Array<Character>();
	@Output() public editCharacter: EventEmitter<Character>;
	@Output() public editArc: EventEmitter<Arc>;
	
  constructor(private timelineService: TimelineService) {
		this.editCharacter = new EventEmitter<Character>();
		this.editArc = new EventEmitter<Arc>();
	}

  ngOnInit(): void {
		this.timelineService.getTimelineSubj().subscribe({
			next: (t: Timeline) => this.loadTimeline(t)
		});
  }
	
	loadTimeline(t: Timeline) {
		this.timeline = t;
		this.characters = t.characters;
	}
	
	onClickEvent(e: Character) {
		this.editCharacter.emit(e);
	}
	
	addCharacter() {
		if (this.timeline)
			this.timeline.addCharacter();
	}
	
	openArc(e: Arc) {
		this.editArc.emit(e);
	}
}

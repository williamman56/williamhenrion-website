import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { faCalendarWeek, faCalendarDay, faUserTag, faPlusCircle, faFolderOpen, faSave, faPeopleArrows, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
	encapsulation: ViewEncapsulation.None,
  host: {
    "(window:click)": "onClick()"
  }
})
export class ToolbarComponent implements OnInit {
	
	faCalendarWeek = faCalendarWeek;
	faCalendarDay = faCalendarDay;
	faUserTag = faUserTag;
	faPlusCircle = faPlusCircle;
	faFolderOpen = faFolderOpen;
	faSave = faSave;
	faPeopleArrows = faPeopleArrows;
	faChevronRight = faChevronRight;
	faChevronDown = faChevronDown;
	
	public open: boolean = false;
	
	constructor(private timelineService: TimelineService) {}

	ngOnInit(): void {
	}
	
	createArc() {
		let t = this.timelineService.getTimeline()
		if (t) t.addArc();
	}
	
	createEvent() {
		let t = this.timelineService.getTimeline()
		if (t) t.addEvent();
	}

	createCharacter() {
		let t = this.timelineService.getTimeline()
		if (t) t.addCharacter();
	}
	
	newFile() {
		this.timelineService.newFile();
	}
	
	openFile(e: any) {
		this.timelineService.openFile(e.target.files[0]);
	}
	
	downloadFile() {
		this.timelineService.downloadFile();
	}
	
	addToArcs() {
		this.timelineService.updateArcCharacterListFromEvents();
	}
	
	inDemoMode(): boolean {
		return this.timelineService.isDemoMode();
	}

	showDemo() {
		//window.prompt("test");
		this.timelineService.startDemo();
	}
	
	getComplete() {
		this.timelineService.downloadFinishedPrologue();
	}
	
	toggleMenu(e: any) {
		e.stopPropagation();
		this.open = !this.open;
	}
	
	onClick() {
		this.open = false;
	}
}

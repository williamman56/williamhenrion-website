import { Injectable } from '@angular/core';
import { Timeline } from '@timeline/model/timeline';
import { demoTimeline } from '@assets/timeline/demo';
import { Subject } from 'rxjs';

@Injectable()
export class TimelineService {

	private timelineSubject: Subject<Timeline> = new Subject<Timeline>();
	private timeline: Timeline | null = null;
	private currentFileUrl: File | {name: string} | null = null;
	private inDemoMode: boolean = false;
	
	public blob: Blob | null = null;

  constructor() {
	}
	
	updateArcCharacterListFromEvents() {
		if (this.timeline) this.timeline.updateArcCharacterListFromEvents();
	}
	
	getTimeline(): Timeline | null {
		return this.timeline;
	}
	
	getTimelineSubj(): Subject<Timeline> {
		return this.timelineSubject;
	}
	
	startDemo() {
		this.inDemoMode = true;
		this.timeline = new Timeline(demoTimeline);
		this.timelineSubject.next(this.timeline);
		this.currentFileUrl = {name: "Demo"};
	}
	
	isDemoMode() {
		return this.inDemoMode;
	}
	
	downloadFinishedPrologue() {
		let link = document.createElement('a');
		link.href = "/assets/timeline/prologue.pdf";
		link.download = "Prologue"
		link.click(); 
	}

	openFile(file: File) {
		const fileReader = new FileReader();
		fileReader.readAsText(file);
		fileReader.onload = (ev) => {
			if (ev.target) {
				this.timeline = new Timeline(ev.target.result as string);
				this.timelineSubject.next(this.timeline);
				this.currentFileUrl = file;
			} else {
				console.log("Error reading file");
			}
		}
		this.inDemoMode = false;
	}
	
	downloadFile() {
		if (this.timeline && this.currentFileUrl) {
			this.blob = new Blob([JSON.stringify(this.timeline.data)], {type: 'application/json'});
			let link = document.createElement('a');
			link.href = window.URL.createObjectURL(this.blob);
			link.download = this.currentFileUrl.name;
			link.click(); 
		}
	}
	
	newFile() {
		this.timeline = new Timeline(JSON.stringify(
			{
				timeline: {
					arcs: [{
						name: "First Arc",
						index: 0,
						description: "This is a description of the arc.",
						start: 0,
						end: 2,
						characters: [],
						events: []
					}],
					events: [{
							name: "First Event",
							index: 0,
							description: "This is a description of the event.",
							occurrence: 0,
							time: 0,
							characters: []
					}]
				},
				characters: [{
					name: "First Character",
					index: 0,
					description: "This is a description of the character",
					start: 0,
					end: -1,
					attributes:[]
				}]
			}
		));
		this.timelineSubject.next(this.timeline);
		this.currentFileUrl = {name: "New Timeline"};
		this.inDemoMode = false;
	}
}

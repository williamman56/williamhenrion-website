import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Timeline } from '@timeline/model/timeline';
import { Arc } from '@timeline/model/arc';
import { Event } from '@timeline/model/event';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css']
})
export class EventViewerComponent implements OnInit {

	public timeline?: Timeline;//Optional ? to bypass assignment requirement
	@Output() public editEvent: EventEmitter<Event>;
	@Output() public editArc: EventEmitter<Arc>;
	
  constructor(private timelineService: TimelineService) {
		this.editEvent = new EventEmitter<Event>();
		this.editArc = new EventEmitter<Arc>();
	}

  ngOnInit(): void {
		this.timelineService.getTimelineSubj().subscribe({
			next: (t: Timeline) => this.timeline = t
		});
  }
	
	getSortedEvents(index: number): Array<number> {
		if (this.timeline) 
			return this.timeline.arcs[index].events.sort((a: number, b: number) => {
				let e1 = this.timeline?.getEvent(a);
				let e2 = this.timeline?.getEvent(b);
				if (e1 && e2) {
					if (e1.occurrence < e2.occurrence)
						return -1;
					else if (e1.occurrence > e2.occurrence)
						return 1;
					else if (e1.index < e2.index)
						return -1;
					else
						return 1;
				}
				return 0;
			});
		return [];
	}
	
	onClickEvent(e: Event) {
		this.editEvent.emit(e);
	}
	
	addEvent() {
		if (this.timeline)
			this.timeline.addEvent();
	}
	
	openArc(e: Arc) {
		this.editArc.emit(e);
	}
}

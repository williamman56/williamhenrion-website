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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';
import { Timeline } from '@timeline/model/timeline';
import { Arc } from '@timeline/model/arc';

@Component({
  selector: 'app-timeline-viewer',
  templateUrl: './timeline-viewer.component.html',
  styleUrls: ['./timeline-viewer.component.css']
})
export class TimelineViewerComponent implements OnInit {

	public timeline?: Timeline;//Optional ? to bypass assignment requirement
	@Output() public editArc: EventEmitter<Arc>;
	public scale: number = 400;

  constructor(private timelineService: TimelineService) {
		this.editArc = new EventEmitter<Arc>();
	}

  ngOnInit(): void {
		this.timelineService.getTimelineSubj().subscribe({
			next: (t: Timeline) => this.loadTimeline(t)
		});
  }
	
	getWidth(): number {
		if (this.timeline) {
			let largest = 0;
			for (let arc of this.timeline.arcs) {
				if (arc.end > largest) largest = arc.end;
			}
			return largest * this.scale;
		}
		return 0;
	}
	
	private loadTimeline(t: Timeline) {
		this.timeline = t;
		//this.calculateScale();
	}
	
	private calculateScale() {
		if (this.timeline && this.timeline.arcs[0]) {
			let lowest: number = this.timeline.arcs[0].start;
			let highest: number = lowest;
			for (let arc of this.timeline.arcs) {
				if (arc.start < lowest) lowest = arc.start;
				if (arc.end > highest) highest = arc.end;
			}
			this.scale = window.innerWidth * .6 / (highest - lowest);
		}
	}

	onClickEvent(a: Arc) {
		this.editArc.emit(a);
	}

}

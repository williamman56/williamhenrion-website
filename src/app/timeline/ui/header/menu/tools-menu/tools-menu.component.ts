import { Component, OnInit } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';

@Component({
  selector: 'app-tools-menu',
  templateUrl: './tools-menu.component.html',
  styleUrls: ['./tools-menu.component.css']
})
export class ToolsMenuComponent implements OnInit {

  constructor(private timeline: TimelineService) { }

  ngOnInit(): void {
  }
	
	addToArcs() {
		this.timeline.updateArcCharacterListFromEvents();
	}

}

import { Component, OnInit } from '@angular/core';
import { TimelineService } from '@timeline/services/timeline.service';

@Component({
  selector: 'app-file-menu',
  templateUrl: './file-menu.component.html',
  styleUrls: ['./file-menu.component.css']
})
export class FileMenuComponent implements OnInit {

  constructor(private timeline: TimelineService) { }

  ngOnInit(): void {
  }
	
	newFile() {
		this.timeline.newFile();
	}
	
	openFile(e: any) {
		this.timeline.openFile(e.target.files[0]);
	}
	
	downloadFile() {
		this.timeline.downloadFile();
	}
	
	/*handleFileInput(event: any) {
		console.log(event);
	}*/

}

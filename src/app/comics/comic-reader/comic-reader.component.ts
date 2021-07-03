import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '@comics/services/image-service.service';

@Component({
  selector: 'app-comic-reader',
  templateUrl: './comic-reader.component.html',
  styleUrls: ['./comic-reader.component.css']
})
export class ComicReaderComponent implements OnInit {

	public name: string = "";
	public chapter: number = 0;
	public sources: Array<string> = [];
	public next: boolean = false;
	public prev: boolean = false;

  constructor(private imageService: ImageService,
							private router: Router,
							private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe((params: any) => {
			const name = params.get('comic-name');
			const number = params.get('chapter-number');
			this.sources.splice(0,this.sources.length);
			for (let i = 1; i <= this.imageService.getChapterLength(name); i++) {
				this.sources.push(`/assets/comics/${name}/chapter-${number}/${number}-${i}.jpg`);
			}
			if (name && number) {
				this.name = name.toString();
				this.chapter = parseInt(number);
				this.next = this.imageService.hasNextChapter(this.name, this.chapter);
				this.prev = this.imageService.hasPrevChapter(this.name, this.chapter);
			}
		});
  }
	
	nextChapter() {
		this.router.navigate(['comics', this.name, this.chapter+1]);
	}
	
	prevChapter() {
		this.router.navigate(['comics', this.name, this.chapter-1]);
	}

}

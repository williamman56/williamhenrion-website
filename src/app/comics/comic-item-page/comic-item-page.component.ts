import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '@comics/services/image-service.service';
import { comicListItem, defaultComicListItem } from '@assets/comics/comic-ref';

@Component({
  selector: 'app-comic-item-page',
  templateUrl: './comic-item-page.component.html',
  styleUrls: ['./comic-item-page.component.css']
})
export class ComicItemPageComponent implements OnInit {

	public comic: comicListItem = defaultComicListItem;
	public chapNums: Array<number> = [];

  constructor(private imageService: ImageService,
							private route: ActivatedRoute) { }
 
  ngOnInit(): void {
		const name = this.route.snapshot.paramMap.get('comic-name');
		if (name) {
			this.comic = this.imageService.getComic(name.toString());
			for (let i = 1; i <= this.comic.length; i++) {
				this.chapNums.push(i);
			}
		}
  }

}

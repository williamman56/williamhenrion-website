import { Component, OnInit, Input } from '@angular/core';
import { comicListItem, defaultComicListItem } from '@assets/comics/comic-ref';

@Component({
  selector: 'app-comic-list-item',
  templateUrl: './comic-list-item.component.html',
  styleUrls: ['./comic-list-item.component.css']
})
export class ComicListItemComponent implements OnInit {

	@Input() public comic: comicListItem = defaultComicListItem;
	@Input() public link: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

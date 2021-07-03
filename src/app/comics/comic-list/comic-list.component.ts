import { Component, OnInit } from '@angular/core';
import { comicsList } from '@assets/comics/comic-ref';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

	public comicList = comicsList;

  constructor() { }

  ngOnInit(): void {
  }

}

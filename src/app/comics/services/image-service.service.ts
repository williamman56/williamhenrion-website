import { Injectable } from '@angular/core';
import { comicsList, comicListItem, defaultComicListItem } from '@assets/comics/comic-ref';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
	
	getChapterLength(name: string): number {
		for (let comic of comicsList) {
			if (comic.selector == name)
				return comic.chapterSize;
		}
		
		return 0;
	}
	
	hasNextChapter(name: string, chap: number): boolean {
		let c = this.getComicNull(name);
		if (c) {
			if (chap < c.length) 
				return true;
		}
		return false;
	}
	hasPrevChapter(name: string, chap: number): boolean {
		let c = this.getComicNull(name);
		if (c) {
			if (chap > 1) 
				return true;
		}
		return false;
	}
	
	getComicNull(name: string): comicListItem | null {
		for (let c of comicsList) {
			if (c.selector == name) {
				return c;
			}
		}
		return null;
	}
	
	getComic(name: string): comicListItem {
		for (let c of comicsList) {
			if (c.selector == name) {
				return c;
			}
		}
		return defaultComicListItem;
	}
	
}

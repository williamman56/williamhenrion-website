import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicItemPageComponent } from './comic-item-page/comic-item-page.component';
import { ComicReaderComponent } from './comic-reader/comic-reader.component';

const routes: Routes = [
	{ 
		path: '',
		component: ComicsComponent
	},
	{
		path: ':comic-name',
		component: ComicItemPageComponent
	},
	{
		path: ':comic-name/:chapter-number',
		component: ComicReaderComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }

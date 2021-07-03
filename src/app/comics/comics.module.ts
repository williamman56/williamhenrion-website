import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicListItemComponent } from './comic-list-item/comic-list-item.component';
import { ComicItemPageComponent } from './comic-item-page/comic-item-page.component';
import { ComicReaderComponent } from './comic-reader/comic-reader.component';


@NgModule({
  declarations: [
    ComicsComponent,
    ComicListComponent,
    ComicListItemComponent,
    ComicItemPageComponent,
    ComicReaderComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutingModule
  ]
})
export class ComicsModule { }

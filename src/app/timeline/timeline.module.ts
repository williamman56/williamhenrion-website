import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './ui/header/toolbar/toolbar.component';
import { TimelineService } from './services/timeline.service';
import { FileMenuComponent } from './ui/header/menu/file-menu/file-menu.component';
import { MenuComponent } from './ui/header/menu/menu.component';
import { TimelineViewerComponent } from './ui/viewers/timeline-viewer/timeline-viewer.component';
import { EventViewerComponent } from './ui/viewers/event-viewer/event-viewer.component';
import { EventComponent } from './ui/event/event.component';
import { CharacterViewerComponent } from './ui/viewers/character-viewer/character-viewer.component';
import { CharacterComponent } from './ui/character/character.component';
import { CharacterFormComponent } from './ui/forms/character-form/character-form.component';
import { EventFormComponent } from './ui/forms/event-form/event-form.component';
import { ArcFormComponent } from './ui/forms/arc-form/arc-form.component';
import { EditorComponent } from './ui/editor/editor.component';
import { CollapsibleComponent } from './ui/helpers/collapsible/collapsible.component';
import { AttributeFormComponent } from './ui/forms/attribute-form/attribute-form.component';
import { HeaderComponent } from './ui/header/header.component';
import { ToolsMenuComponent } from './ui/header/menu/tools-menu/tools-menu.component';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    TimelineComponent,
    ToolbarComponent,
    FileMenuComponent,
    MenuComponent,
    TimelineViewerComponent,
    EventViewerComponent,
    EventComponent,
    CharacterViewerComponent,
    CharacterComponent,
    CharacterFormComponent,
    EventFormComponent,
    ArcFormComponent,
    EditorComponent,
    CollapsibleComponent,
    AttributeFormComponent,
    HeaderComponent,
    ToolsMenuComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TimelineRoutingModule,
    FontAwesomeModule
  ],
  providers: [TimelineService]
})
export class TimelineModule { }

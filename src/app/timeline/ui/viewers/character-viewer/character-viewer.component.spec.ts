import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterViewerComponent } from './character-viewer.component';

describe('CharacterViewerComponent', () => {
  let component: CharacterViewerComponent;
  let fixture: ComponentFixture<CharacterViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

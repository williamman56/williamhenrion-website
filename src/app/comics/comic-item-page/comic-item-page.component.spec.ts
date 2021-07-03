import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicItemPageComponent } from './comic-item-page.component';

describe('ComicItemPageComponent', () => {
  let component: ComicItemPageComponent;
  let fixture: ComponentFixture<ComicItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

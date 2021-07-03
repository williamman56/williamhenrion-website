import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcFormComponent } from './arc-form.component';

describe('ArcFormComponent', () => {
  let component: ArcFormComponent;
  let fixture: ComponentFixture<ArcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierDocumentComponent } from './publier-document.component';

describe('PublierDocumentComponent', () => {
  let component: PublierDocumentComponent;
  let fixture: ComponentFixture<PublierDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

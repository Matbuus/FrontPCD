import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublierDocumentMatiereComponent } from './publier-document-matiere.component';

describe('PublierDocumentMatiereComponent', () => {
  let component: PublierDocumentMatiereComponent;
  let fixture: ComponentFixture<PublierDocumentMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierDocumentMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierDocumentMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

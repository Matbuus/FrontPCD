import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsParMatiereComponent } from './documents-par-matiere.component';

describe('DocumentsParMatiereComponent', () => {
  let component: DocumentsParMatiereComponent;
  let fixture: ComponentFixture<DocumentsParMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsParMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsParMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

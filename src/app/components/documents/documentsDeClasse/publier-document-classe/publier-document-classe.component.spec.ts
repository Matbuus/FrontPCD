import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  PublierDocumentClasseComponent
} from './publier-document-classe.component';

describe('PublierDocumentClasseComponent', () => {
  let component: PublierDocumentClasseComponent;
  let fixture: ComponentFixture<PublierDocumentClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublierDocumentClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierDocumentClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

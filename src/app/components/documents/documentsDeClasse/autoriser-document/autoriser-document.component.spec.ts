import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriserDocumentComponent } from './autoriser-document.component';

describe('AutoriserDocumentComponent', () => {
  let component: AutoriserDocumentComponent;
  let fixture: ComponentFixture<AutoriserDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoriserDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriserDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

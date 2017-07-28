import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeudiComponent } from './jeudi.component';

describe('JeudiComponent', () => {
  let component: JeudiComponent;
  let fixture: ComponentFixture<JeudiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeudiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

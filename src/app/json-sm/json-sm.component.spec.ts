import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSmComponent } from './json-sm.component';

describe('JsonSmComponent', () => {
  let component: JsonSmComponent;
  let fixture: ComponentFixture<JsonSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

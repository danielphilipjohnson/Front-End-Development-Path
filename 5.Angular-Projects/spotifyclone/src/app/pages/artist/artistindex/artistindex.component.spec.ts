import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistindexComponent } from './artistindex.component';

describe('ArtistindexComponent', () => {
  let component: ArtistindexComponent;
  let fixture: ComponentFixture<ArtistindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

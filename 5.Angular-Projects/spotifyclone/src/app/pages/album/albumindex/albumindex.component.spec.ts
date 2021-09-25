import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumindexComponent } from './albumindex.component';

describe('AlbumindexComponent', () => {
  let component: AlbumindexComponent;
  let fixture: ComponentFixture<AlbumindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

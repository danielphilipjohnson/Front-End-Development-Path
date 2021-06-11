import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPhotoComponent } from './users-photo.component';

describe('UsersPhotoComponent', () => {
  let component: UsersPhotoComponent;
  let fixture: ComponentFixture<UsersPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

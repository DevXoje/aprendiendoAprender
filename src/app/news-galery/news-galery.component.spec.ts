import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGaleryComponent } from './news-galery.component';

describe('NewsGaleryComponent', () => {
  let component: NewsGaleryComponent;
  let fixture: ComponentFixture<NewsGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

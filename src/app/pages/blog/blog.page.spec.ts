import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogPage } from './blog.page';

describe('BlogPage', () => {
  let component: BlogPage;
  let fixture: ComponentFixture<BlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

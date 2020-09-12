import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamificationPage } from './gamification.page';

describe('GamificationPage', () => {
  let component: GamificationPage;
  let fixture: ComponentFixture<GamificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

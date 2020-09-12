import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthClubPage } from './health-club.page';

describe('HealthClubPage', () => {
  let component: HealthClubPage;
  let fixture: ComponentFixture<HealthClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthClubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

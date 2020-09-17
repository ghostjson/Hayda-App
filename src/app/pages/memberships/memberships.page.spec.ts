import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipsPage } from './memberships.page';

describe('MembershipsPage', () => {
  let component: MembershipsPage;
  let fixture: ComponentFixture<MembershipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

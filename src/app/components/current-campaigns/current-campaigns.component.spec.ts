import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCampaignsComponent } from './current-campaigns.component';

describe('CurrentCampaignsComponent', () => {
  let component: CurrentCampaignsComponent;
  let fixture: ComponentFixture<CurrentCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

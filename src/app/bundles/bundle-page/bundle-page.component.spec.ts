import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlePageComponent } from './bundle-page.component';
import { BundleDocumentsComponent } from "./documents/documents.component";
import { PanelComponent } from "../shared/panel/panel.component";
import { Store, StoreModule } from "@ngrx/store";
import { State } from "../shared/bundle.interfaces";
import { bundleReducer } from "./bundle-page.reducer";
import { RouterTestingModule } from "@angular/router/testing";

describe('BundlePageComponent', () => {
  let component: BundlePageComponent;
  let fixture: ComponentFixture<BundlePageComponent>;
  let store: Store<State>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'bundle/page/:id', component: BundlePageComponent}
        ]),
        StoreModule.forRoot({ bundle: bundleReducer })
      ],
      declarations: [BundlePageComponent, BundleDocumentsComponent, PanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(BundlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

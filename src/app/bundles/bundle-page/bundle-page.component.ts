import { Component, Input } from '@angular/core';
import { BundleDocument, State } from '../shared/bundle.interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StitchBundle } from './bundle-page.actions';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bundle-page',
  templateUrl: './bundle-page.component.html'
})
export class BundlePageComponent {

  @Input() documents$: Observable<BundleDocument[]>;
  @Input() bundleId: ParamMap;
  @Input() bundleTitle: string;
  @Input() bundleDescription: string;

  constructor(private store: Store<{ bundle: State }>,
              private route: ActivatedRoute) {
    this.documents$ = this.store.select(state => state.bundle.documents);
    this.bundleTitle = 'Bundle title';
    this.bundleDescription = 'Bundle description';
    this.bundleId = this.route.snapshot.paramMap['params']['id'];
  }

  stitchBundle(documents: BundleDocument[]) {
    this.store.dispatch(new StitchBundle(documents));
  }
}

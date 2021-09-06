import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import * as AppActionTypes from '../app/state/app.actions';
import { ChoiceData } from './shared/choice/choice-data';
import { AppSelectors } from './state/app.selectors';

export interface ViewModel {
  choiceComponent$: Observable<ChoiceData>;
}

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-demo-advanced';
  formGroup!: FormGroup;

  viewModel!: ViewModel;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store) { }


  ngOnInit(): void {

    this.formGroup = this.fb.group({
      decision: new FormControl(undefined)
    });

    this.store.dispatch(new AppActionTypes.Load());

    this.viewModel = {
      choiceComponent$: this.store.select(AppSelectors.getDecisionComponent())
    }
  }
}

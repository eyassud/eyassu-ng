import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { distinct, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import * as AppActionTypes from '../app/state/app.actions';
import { Decision } from './model/decision';
import { Choice } from './shared/choice/choice';
import { ChoiceData } from './shared/choice/choice-data';
import { AppSelectors } from './state/app.selectors';

export interface ViewModel {
  decisionComponent$: Observable<ChoiceData>;
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
      decisionComponent$: this.store.select(AppSelectors.getDecisionComponent())
        .pipe(
          tap((choiceData: ChoiceData) => this.getFormControl('decision')?.setValue(choiceData))
        )
    }

    this.getFormControl('decision')?.valueChanges
      .pipe(
        tap(val => console.log('--- ' + JSON.stringify(val))),
        filter((choice: Choice) => choice !== undefined && choice != null),
        map((choice: Choice) => { return { name: choice.label, key: choice.value }})
      )
      .subscribe((decision: Decision) => {
        console.log('+++ ' + JSON.stringify(decision));
      });
  }

  getFormControl(name: string) {
    return this.formGroup.get(name);
  }
}

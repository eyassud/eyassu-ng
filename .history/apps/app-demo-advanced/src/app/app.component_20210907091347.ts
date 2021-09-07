import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { asapScheduler, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as AppActionTypes from '../app/state/app.actions';
import { Country } from './model/country';
import { Decision } from './model/decision';
import { Choice } from './shared/choice/choice';
import { ChoiceData } from './shared/choice/choice-data';
import { DropDown } from './shared/drop-down/drop-down';
import { DropDownData } from './shared/drop-down/drop-down-data';
import { TextArea } from './shared/text-area/text-area';
import { TextAreaData } from './shared/text-area/text-area-data';
import { AppSelectors } from './state/app.selectors';

export interface ViewModel {
  destinationComponent$: Observable<DropDownData>;
  travelTypeComponent$: Observable<ChoiceData>;
  explanationComponent$: Observable<TextAreaData>;
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
      travelType: new FormControl(undefined),
      destination: new FormControl(undefined),
      explanation: new FormControl(undefined)
    });

    asapScheduler.schedule(() => this.store.dispatch(new AppActionTypes.Load()));

    this.viewModel = {
      destinationComponent$: this.store.select(AppSelectors.getTravelDestinationComponent())
        .pipe(
          tap((dropDownData: DropDownData) => this.getFormControl('destination')?.setValue(dropDownData, { emitEvent: false }))
        ),
      travelTypeComponent$: this.store.select(AppSelectors.getTravelTypeComponent())
        .pipe(
          tap((choiceData: ChoiceData) => this.getFormControl('travelType')?.setValue(choiceData, { emitEvent: false }))
        ),
      explanationComponent$: this.store.select(AppSelectors.getExplanationComponent())
        .pipe(
          tap((textAreaData: TextAreaData) => this.getFormControl('explanation')?.setValue(textAreaData, { emitEvent: false }))
        )
    }

    this.getFormControl('destination')?.valueChanges
      .pipe(
        map((dropDown: DropDown) => { return { name: dropDown.label, code: dropDown.value } })
      )
      .subscribe(
        (country: Country) => asapScheduler.schedule(() => this.store.dispatch(new AppActionTypes.UpdateDestination(country))));

    this.getFormControl('travelType')?.valueChanges
      .pipe(
        map((choice: Choice) => { return { name: choice.label, key: choice.value } })
      )
      .subscribe(
        (decision: Decision) => asapScheduler.schedule(() => this.store.dispatch(new AppActionTypes.UpdateTravelType(decision))));

    this.getFormControl('explanation')?.valueChanges
      .subscribe(
        (textArea: TextArea) => asapScheduler.schedule(() => this.store.dispatch(new AppActionTypes.UpdateExplanation(textArea))));
  }

  getFormControl(name: string) {
    return this.formGroup.get(name);
  }

  onClear(): void {
    asapScheduler.schedule(() => this.store.dispatch(new AppActionTypes.ResetForm()));
  }

  onSave(): void {
    alert(JSON.stringify(this.formGroup));
  }
}

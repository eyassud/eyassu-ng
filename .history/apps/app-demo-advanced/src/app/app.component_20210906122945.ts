import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import * as AppActionTypes from '../app/state/app.actions';
@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-demo-advanced';
  formGroup!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store) { }


  ngOnInit(): void {

    this.formGroup = this.fb.group({
      decision: new FormControl(undefined)
    });

    this.store.dispatch(new AppActionTypes.Load());
  }
}

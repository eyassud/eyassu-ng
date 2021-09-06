import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Configurable } from './model/configurable';
import { ChoiceConfig } from './shared/choice/choice-config';
import { ChoiceComponent } from './shared/choice/choice.component';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-demo-advanced';
  formGroup!: FormGroup;
  decision = new FormControl('Test');

  @ViewChild('decision', {static: false}) decisionVW: ChoiceComponent | undefined;

  constructor(private readonly fb: FormBuilder) { }


  ngOnInit(): void {

    this.formGroup = this.fb.group({
      decision: this.decision
    });
  }
}

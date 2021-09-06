import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-demo-advanced';
  formGroup: FormGroup | undefined;
  decision = new FormControl('Test');

  constructor(private readonly fb: FormBuilder) { }


  ngOnInit(): void {
    this.decision.
    this.formGroup = this.fb.group({
      decision: this.decision
    });
  }
}

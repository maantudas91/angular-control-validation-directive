import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  control: FormControl;
  customErrors = {required: 'Please accept the terms'}
  constructor(private builder: FormBuilder) { }

  get phoneNumberControl(): FormArray{
    return this.form.get('phoneNumbers') as FormArray;
  }

  ngOnInit() {
    this.control = this.builder.control('', Validators.required);

    this.form = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      terms: ['', Validators.requiredTrue],
      address: this.builder.group({
        city: ['', Validators.required],
        country: ['', Validators.required]
      }),
      phoneNumbers: new FormArray([this.createFormControl()])
    });
  }

  createFormControl(): FormControl{
    return new FormControl('', [Validators.required])
  }

  remove(i: number) {
    this.phoneNumberControl.removeAt(i);
  }

  add() {
    this.phoneNumberControl.push(this.createFormControl());
  }

}

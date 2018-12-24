import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';
  formData = {};
  isSubmited = false;

  addRandEmail() {
    const randEmail = 'test@mail.me';
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({user: {email: randEmail}});
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}

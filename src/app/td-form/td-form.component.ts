import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

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

  constructor() { }
  ngOnInit() {
  }

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

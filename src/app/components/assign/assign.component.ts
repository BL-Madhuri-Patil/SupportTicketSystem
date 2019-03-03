import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  alphabetRegx = '[a-zA-Z ]*$';
  contactExp = '^[6-9]{1}[0-9]{9}$';
  digitExp= '^[0-9]*$';
  assignedto = new FormControl(null, [Validators.required, Validators.pattern(this.alphabetRegx)]);
  contact = new FormControl(null, [Validators.required, Validators.pattern(this.contactExp)]);
  age = new FormControl(null, [Validators.required, Validators.pattern(this.digitExp)]);
  email = new FormControl(null, [Validators.required, Validators.email]);
  data: any= {};
  constructor() { }

  ngOnInit() {
  }
  getErrorForAssignedTo() {
    return this.assignedto.hasError('required') ? 'This field is required' :
      this.assignedto.hasError('pattern') ? 'Please provide valid assignedto' : '';
  }
  getErrorForContact() {
    return this.contact.hasError('required') ? 'This field is required' :
      this.contact.hasError('pattern') ? 'Please provide valid contact' : '';
  }
  getErrorForAge(){
    return this.age.hasError('required') ? 'This field is required' :
    this.age.hasError('pattern') ? 'Please provide valid age' : '';
  }
  getErrorForEmail() {
    return this.email.hasError('required') ? 'This field is required' :
    this.email.hasError('pattern') ? 'Please provide valid email' : '';
  }
}

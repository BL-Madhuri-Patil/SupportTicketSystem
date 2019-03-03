import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  alphabetRegx = '[a-zA-Z ]*$';
  contactExp = '^[6-9]{1}[0-9]{9}$';  
  name = new FormControl(null,[Validators.required, Validators.pattern(this.alphabetRegx)]);
  status = new FormControl(null,[Validators.required,Validators.pattern(this.alphabetRegx)]);
  source = new FormControl(null,[Validators.required,Validators.pattern(this.alphabetRegx)]);
  destination = new FormControl(null,[Validators.required,Validators.pattern(this.alphabetRegx)]);
  
  ticketsReference;
  // gender="";
  myform: FormGroup;
  constructor(private firebase: AngularFireDatabase) { 
    this.ticketsReference = firebase.list('tickets')
  }

  ngOnInit() {
    this.createForm()
  }
  getErrorForName() {
    return this.name.hasError('required') ? 'This field is required' : 
    this.name.hasError('pattern')? 'Please provide valid name': '';
  }
  getErrorForStatus() {
    return this.status.hasError('required') ? 'This field is required' : 
    this.status.hasError('pattern')? 'Please provide valid status': '';
  } 
  
  getErrorForSource() {
    return this.source.hasError('required') ? 'This field is required' : 
    this.source.hasError('pattern')? 'Please provide valid source': '';
  }
  getErrorForDestination() {
    return this.destination.hasError('required') ? 'This field is required' : 
    this.destination.hasError('pattern')? 'Please provide valid destination': '';
  }

  addTicket() {
      this.ticketsReference.push({
        Name: this.name.value,
        Status: this.status.value.toLowerCase(),
        Source:this.source.value,
        Destination: this.destination.value,
        AssignedTo: {}
      })
      this.myform.reset();
    
  }
  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      status: this.status,
      source:this.source,
      destination:this.destination
    });
  }

}

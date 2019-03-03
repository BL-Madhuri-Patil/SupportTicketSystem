import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedBtn:String="";
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.selectedBtn="add";
  }

  selectedButton(selected){
    this.selectedBtn = selected;
    console.log("Selected", this.selectedBtn);
    if(this.selectedBtn == 'all'){
      this.redirectTo('all')
    }
    else if(this.selectedBtn == 'pending'){
      this.redirectTo('pending')
    }
    else if(this.selectedBtn == 'closed'){
      this.redirectTo('closed');
    }
    else if(this.selectedBtn == 'resolved') {
      this.redirectTo('resolved');
    }
    else{
      this.redirectTo('add')
    }
  }

  redirectTo(path) {
    this.router.navigate(['dashboard/'+path])
  }
}

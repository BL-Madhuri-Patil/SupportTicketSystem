import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.scss']
})
export class ClosedComponent implements OnInit {

  
  ticketsReference;
  ticketsArray;
  ticketsList: Ticket[] = [];
  Key;
  displayedColumns = [ 'source','destination','assignedTo','email','contact'];

  dataSource = new MatTableDataSource<Ticket>(this.ticketsList);
  constructor(private firebase: AngularFireDatabase) { 
    this.ticketsReference = firebase.list('tickets')
  }

  ngOnInit() {
    this.getClosedTickets();
  }

  getClosedTickets() {
    this.firebase.list('tickets', ref =>
      ref.orderByChild('Status').equalTo('closed')).snapshotChanges().pipe(map(items => {  
        console.log(items);
                  // <== new way of chaining
        return items.map(note => {
          let data: any = note.payload.val() || {};
          data.key = note.payload.key;
          return data;
        });
      })).subscribe(res => {
        this.ticketsArray = res;   
        console.log("Closed Tickets", res);
        
        this.dataSource = new MatTableDataSource(this.ticketsArray);
 
      })
  }


}
export interface Ticket {
  assignedTo: string;
  adminName: string;
  gender: string;
  status: string;
  source: string;
  destination:string;
  contact: Number;
}
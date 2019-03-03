import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { AssignComponent } from '../assign/assign.component';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  ticketsReference;
  ticketsArray;
  ticketsList: Ticket[] = [];
Key;
  displayedColumns = [ 'adminName','status','source','destination','assignedTo','assign','delete'];

  dataSource = new MatTableDataSource<Ticket>(this.ticketsList);
  constructor(private firebase: AngularFireDatabase,
    private dialog:MatDialog) { 
    this.ticketsReference = firebase.list('tickets')
  }

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.firebase.list('tickets').snapshotChanges().pipe(map(items => {            // <== new way of chaining
        return items.map(note => {
          let data: any = note.payload.val() || {};
          data.key = note.payload.key;
          return data;
        });
      })).subscribe(res => {
        this.ticketsArray = res;    
        this.dataSource = new MatTableDataSource(this.ticketsArray);
      })
  }

  deleteTicket(ticketId) {
    console.log('ticketId', ticketId);
    this.ticketsReference.remove(ticketId)
  }

  openAssignDialog(ticketId) {
    console.log('ticketId', ticketId);

    var data = {
      "ticketId": ticketId
    }
    const dialogRef = this.dialog.open(AssignComponent, {
      data: data,
      panelClass:'no-padding'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.updateTicket(ticketId,result);
    })
  }

  updateTicket(ticketId, ticket) {
    console.log("Before update", ticket);
    
    var updateTicket = {
      AssignedTo: ticket
    }
    console.log("After update", updateTicket);

    this.ticketsReference.update(ticketId, updateTicket)
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


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatCardModule, MatInputModule, MatRadioModule, MatTableModule, MatDialogModule } from "@angular/material";
import { PendingComponent } from './components/pending/pending.component';
import { ClosedComponent } from './components/closed/closed.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { AddComponent } from './components/add/add.component';
import { AllComponent } from './components/all/all.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignComponent } from './components/assign/assign.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PendingComponent,
    ClosedComponent,
    ResolvedComponent,
    AddComponent,
    AllComponent,
    AssignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents:[AssignComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

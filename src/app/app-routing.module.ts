import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllComponent } from './components/all/all.component';
import { PendingComponent } from './components/pending/pending.component';
import { ClosedComponent } from './components/closed/closed.component';
import { ResolvedComponent } from './components/resolved/resolved.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'all', component: AllComponent },
      { path: 'add', component: AddComponent },
      { path: 'pending', component: PendingComponent },
      { path: 'closed', component: ClosedComponent },
      { path: 'resolved', component: ResolvedComponent }

    ]
  },
  { path: '', redirectTo: 'dashboard/add', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

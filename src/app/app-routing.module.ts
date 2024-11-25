import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchScoresComponent } from './search-scores/search-scores.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { path: 'search-scores', component: SearchScoresComponent },
  { path: 'reports', component: ReportsComponent },
  { path: '', redirectTo: '/search-scores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

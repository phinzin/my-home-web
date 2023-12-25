import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';

import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';

const routes: Routes = [
  {path:"",component: OverviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  MatTableModule,
  MatPaginatorModule,
  FormsModule

],
  exports: [RouterModule]
})
export class NotesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: "", redirectTo: "/app", pathMatch: "full" },
  { path: "note", component: DevicesComponent},
  { path: "app", component: LayoutComponent, children:[
    {path: "expenses", loadChildren: ()=> import("./expenses/expenses.module").then((m)=>m.ExpensesModule)},
    {path: "notes", loadChildren: ()=> import("./notes/notes.module").then((m)=>m.NotesModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

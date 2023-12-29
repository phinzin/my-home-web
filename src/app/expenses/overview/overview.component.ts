import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../components/edit/edit.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
startAddTransaction() {
const addDialog = this.dialog.open(EditComponent);
addDialog.afterClosed().subscribe(e=>{
  console.log(e)
})
}

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}

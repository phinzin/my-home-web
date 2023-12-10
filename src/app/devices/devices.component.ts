import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyHomeServiceService } from './my-home-service.service';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],

})

export class DevicesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'recentStage', 'nextStage', 'note', 'action'];
  dataSource = new MatTableDataSource<MyHomeItem>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getNotes();
  }

  constructor(private myHomeService: MyHomeServiceService,
    private dialog: MatDialog) {
  }

  getNotes() {
    this.myHomeService.getData().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditComponent, { data: data })

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getNotes();
        }
      },
    });
  }

  openAddNoteForm() {
    const dialogRef = this.dialog.open(EditComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getNotes();
        }
      },
    });
  }
  deleteNote(arg0: any) {

  }

}

export interface MyHomeItem {
  partitionKey: string,
  id: string,
  name: string,
  executedDate: string,
  nextStage: string,
  remark: string
}


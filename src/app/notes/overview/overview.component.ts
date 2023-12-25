import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {

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
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Delete Note',
      dialogContent: 'Delete '+arg0["name"]+" ?",
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Yes',
      callbackMethod: () => {
        this.performDialogDelete(arg0);
      },
    };
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: dialogInterface,
    });
  }
  performDialogDelete(item:any) {
    this.myHomeService.deleteNote(item.id).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e)
    })
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

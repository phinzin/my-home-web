import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyHomeServiceService } from './my-home-service.service';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],

})

export class DevicesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'recentStage', 'nextStage', 'note'];
  dataSource = new MatTableDataSource<MyHomeItem>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.myHomeService.getData().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  constructor(private myHomeService: MyHomeServiceService) {
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


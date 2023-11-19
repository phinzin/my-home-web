import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MyHomeServiceService } from './my-home-service.service';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  
})

export class DevicesComponent implements AfterViewInit  {
  displayedColumns: string[] = ['name', 'recentStage','nextStage','note'];
  dataSource = new MatTableDataSource<MyHomeItem>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(2)
    this.myHomeService.getData().subscribe((data) => {
      console.log(data);
      console.log(1)
      this.dataSource.data = data;
    });
  }

  constructor(private myHomeService: MyHomeServiceService){}
  
}
export interface MyHomeItem {
  partitionKey:string,
  id:string,
  name:string,
  executedDate:string,
  nextStage:string,
  remark:string
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Lõi Lọc - Bình Chánh', recentStage: '12/09/2023',nextStage:'12/12/2023',note:'đã thay 3 lõi'},
//   {position: 2, name: 'Vệ sinh máy lạnh - Phú Định', recentStage: '12/10/2023',nextStage:'12/04/2024', note:''},
//   {position: 3, name: 'Chích ngừa', recentStage: '11/11/2023',nextStage:'12/12/2023', note:''}

// ];

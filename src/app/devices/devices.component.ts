import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  
})

export class DevicesComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'recentStage','nextStage'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}
export interface PeriodicElement {
  name: string;
  position: number;
  recentStage: string;
  nextStage: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', recentStage: '14/10/2023',nextStage:'14/01/2024'},
  {position: 2, name: 'Helium',recentStage: '14/10/2023',nextStage:'14/01/2024'},
  {position: 3, name: 'Lithium', recentStage: '14/10/2023',nextStage:'14/01/2024'},
  {position: 4, name: 'Beryllium', recentStage: '14/10/2023',nextStage:'14/01/2024'}

];
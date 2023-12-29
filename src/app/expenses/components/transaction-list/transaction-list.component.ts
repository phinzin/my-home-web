import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/interfaces/transaction';
import { ExpensesService } from '../../expenses.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
toggleSelection(_t55: any) {
}

  displayedColumns: string[] = ['select', 'Ngày', 'Mô tả', 'Số Lượng'];
  dataSource: MatTableDataSource<Transaction>;
  selectedTransactions: Transaction[] = [];

  // transactions: Transaction[] = [
  //   { date: '2023-01-01', description: 'Expense 1', amount: 50 , isExpense: true, who:''},
  //   { date: '2023-01-02', description: 'Expense 2', amount: 75 , isExpense: true, who: ''},
  //   // Add more transactions as needed
  // ];

  constructor(private service: ExpensesService) {
    this.service.getData().subscribe((data: Transaction[]) => {
      this.dataSource = new MatTableDataSource<Transaction>(data);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selectedTransactions.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise, clear selection. */
  masterToggle(): void {
    this.isAllSelected()
      ? (this.selectedTransactions = [])
      : (this.selectedTransactions = [...this.dataSource.data]);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Transaction): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.date}`;
  }

  /** Whether the row is selected. */
  isSelected(row: Transaction): boolean {
    return this.selectedTransactions.includes(row);
  }


  ngOnInit(): void {
  }

}

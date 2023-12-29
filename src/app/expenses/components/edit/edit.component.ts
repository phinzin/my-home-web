import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpensesService } from '../../expenses.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  selected: Date | undefined;

onFormSubmit() {
  if (this.transactionForm.valid) {
    // Handle form submission (e.g., send data to a service)
    this.saveData();
    this.matDialogRef.close(true);
  } else {
    // Mark form controls as touched to display validation errors
    this.transactionForm.markAllAsTouched();
  }
}

transactionForm: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditComponent>,
    private service: ExpensesService) {

      this.transactionForm = this.fb.group({
        date:[null, Validators.required],
        amount:[null, [Validators.required, Validators.min(0)]],
        description: [null, Validators.required],
        isExpense: true,
        who:''
      })
     }

  ngOnInit(): void {


  }
  saveData(){
    this.service.addTransaction(this.transactionForm.value)
  }

}

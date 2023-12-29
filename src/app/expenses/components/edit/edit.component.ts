import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    console.log('Expense Form Submitted:', this.transactionForm.value);
    this.matDialogRef.close(true);
  } else {
    // Mark form controls as touched to display validation errors
    this.transactionForm.markAllAsTouched();
  }
}

isNegative: boolean = true;
transactionForm: FormGroup;

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<EditComponent>) {

      this.transactionForm = this.fb.group({
        date:[null, Validators.required],
        amount:[null, [Validators.required, Validators.min(0)]],
        description: [null, Validators.required],
        who:''
      })
     }

  ngOnInit(): void {


  }

}

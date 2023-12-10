import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MyHomeServiceService } from '../my-home-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private myHomeService: MyHomeServiceService,
    private dialogRef: MatDialogRef<EditComponent>,
  ) { 
    this.noteForm = this.fb.group({
      partitionKey: '',
      id: '',
      name: '',
      executedDate: '',
      nextStage: '',
      remark: ''
    })
  }

  ngOnInit(): void {
    this.noteForm.patchValue(this.data)
  }

  onFormSubmit() {
    if (this.noteForm.valid) {
      if (this.data) {
        this.myHomeService
          .updateNote(this.data.id, this.noteForm.value)
          .subscribe({
            next: (val: any) => {
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.myHomeService.addNote(this.noteForm.value).subscribe({
          next: (val: any) => {
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

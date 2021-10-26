import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserNotes } from 'src/app/models/UserNotes';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  Form! : FormGroup;

  isNewUser! : boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserNotes,
              public dialogRef: MatDialogRef<FormNoteComponent>) {
      this.isNewUser = this.data.Id == "0";
      
   }

  ngOnInit(): void {
   

    this.Form = new FormGroup({
      Title: new FormControl(this.data.Title, [Validators.required, Validators.minLength(6)]),
      Note : new FormControl(this.data.Note, [Validators.required, Validators.minLength(6)]),
      CreatedAt : new FormControl(this.data.CreatedAt),
      UpdatedAt : new FormControl(this.data.UpdatedAt)
      }
      );
      // console.log("init");
      // console.log( this.isNewUser);
  }

  onClear(){
    this.Form.reset()
  }

  onSaveNote() {
     this.data.Title = this.Form.controls['Title'].value;
     this.data.Note = this.Form.controls['Note'].value;
     this.dialogRef.close({'Note': this.data});
  }

  onCancel(){
    this.dialogRef.close({'Note': null});
  }


}

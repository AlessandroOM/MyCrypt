import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserNotes } from 'src/app/models/UserNotes';
import { GlobalService } from 'src/app/Services/global.service';
import { RepositoryService } from 'src/app/Services/repository.service';
import { FormNoteComponent } from '../form-note/form-note.component';


@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  private isNewNote! : boolean;
  public notes : Array<UserNotes> =[]; 

  constructor(private repository: RepositoryService,
              public dialog: MatDialog) {
      this.notes = this.repository.notes; 
      this.isNewNote = false;         
   }

  ngOnInit(): void {
  }

  deleteNote(note : UserNotes): void {
    this.repository.deleteNote(note.Id);
    this.notes = this.repository.notes;     
  }

  addNote():void {
    let newNote = new UserNotes();
    newNote.Id = "0";
    this.isNewNote = true;
    this.editNote(newNote);
  }

  editNote(note : UserNotes): void {
   
    const dialogRef = this.dialog.open(FormNoteComponent, {
      maxHeight: '95vh',
      maxWidth:300,
      data: note
   }
   );

   dialogRef.afterClosed().subscribe(result => {
      
      if (result.Note != null)
      {
        if (this.isNewNote)
        {
          this.repository.addNewNote(result.Note);
        } else
        {
          this.repository.editNote(result.Note);
        }
      }
    
      this.notes = this.repository.notes; 
      this.isNewNote = false;
     }
     
   );
  }

}

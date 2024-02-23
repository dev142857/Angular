import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-event-field',
  standalone: true,
  imports: [ CommonModule, MatDialogModule],
  templateUrl: './event-field.component.html',
  styleUrl: './event-field.component.css'
})

export class EventFieldComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EventFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    // console.log(this.data);
  }

  @Input() rowData: any;
}

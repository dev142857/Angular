import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataTableDirective, DataTablesModule } from "angular-datatables";
import { EventFieldComponent } from '../event-field/event-field.component';
@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [CommonModule, DataTablesModule, EventFieldComponent],
  templateUrl: './event-info.component.html',
  styleUrl: './event-info.component.css'
})


export class EventInfoComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) {}

  @ViewChild(DataTableDirective, {static: false})
  isModalOpen: boolean = false;
  selectedRow: any;

  datatableElement?: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pageLength:50,
    }
  }
  
  openModal(event: any) {
    this.dialog.open(EventFieldComponent, {
      width: '500px',
      data: event
    });
    this.selectedRow = event;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  @Input() eventsData: any = {};
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../models/reminder';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder-list',
  standalone: true,
  imports: [MatTableModule,CommonModule],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {
  reminders: Reminder[] = [];
  displayedColumns: string[] = ['status', 'shortDescription', 'createdAt', 'completedAt'];

  constructor(private reminderService: ReminderService, private router: Router) {}

  ngOnInit(): void {
    this.reminders = this.reminderService.getReminders();
  }

  openReminder(reminder: Reminder) {
    this.router.navigate(['/reminder', reminder.id]);
  }
}

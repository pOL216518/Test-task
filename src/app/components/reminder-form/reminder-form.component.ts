import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ActivatedRoute,Router } from '@angular/router';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../models/reminder';
import { CommonModule } from '@angular/common';
import { Status } from '../../models/status';

@Component({
  selector: 'app-reminder-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSelectModule],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css'
})
export class ReminderFormComponent implements OnInit {
  reminder: Reminder | undefined; 
  statuses = ['Новый', 'Исполнен', 'Запланирован', 'Просрочен'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reminderService: ReminderService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.reminder = this.reminderService.getReminder(+id); 

    }

    if (!this.reminder) {
      this.reminder = new Reminder(
        6, 
        'новое напоминание', 
        'здесь будет хранится напоминание',
        new Date(),
        new Date(), 
        new Status('Новый') 
      );
    }
  }
 

  save() {
    if (this.reminder) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id !== null) {
          this.reminderService.updateReminder(+id, this.reminder);
      } else {
          this.reminderService.addReminder(this.reminder); 
      }
      this.router.navigate(['/reminders']);
    }
  }
}

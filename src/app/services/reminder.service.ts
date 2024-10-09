import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[] = [];

  constructor() {
    this.inintializeTestData();
  }

  inintializeTestData(){
    const statuses = [
      new Status('Новый'),
      new Status('Исполнен'),
      new Status('Запланирован'),
      new Status('Просрочен')
    ];
    
    this.reminders = [
      new Reminder(1,'Купить продукты','Купить овощи и фрукты',new Date(),new Date(),statuses[0]),
      new Reminder(2,'Сдать проект','Сдать проект на Unreal Engine 5',new Date(),new Date(),statuses[2]),
      new Reminder(3,'Сделать здание','Написать тестовое задание',new Date(),new Date(),statuses[1]),
      new Reminder(4,'Сделать лаб. работу','Написать лаб.работу №6',new Date(),new Date(),statuses[3]),
      new Reminder(5,'Подготовиться к собеседованию','Основательно пдготовиться к собеседованию,повторить материал',new Date(),new Date(),statuses[2]),
    ]
  }

  getReminders() {
    return this.reminders;
  }

  getReminder(id: number): Reminder | undefined {
    return this.reminders.find(reminder => reminder.id === id);
  }

  updateReminder(id: number, reminder: Reminder) {
    const index = this.reminders.findIndex(r => r.id === id);
    if (index !== -1) {
      this.reminders[index] = reminder;
    }
  }

  addReminder(reminder: Reminder) {
    const newId = this.reminders.length > 0 ? Math.max(...this.reminders.map(r => r.id)) + 1 : 1; // генерирует новый ID
    reminder.id = newId; // устанавливает новый ID
    this.reminders.push(reminder);
  }
}

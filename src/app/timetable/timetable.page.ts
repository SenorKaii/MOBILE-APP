import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.page.html',
  styleUrls: ['./timetable.page.scss'],
})
export class TimetablePage implements OnInit {

  timetableRef: any;
  timetable: any = [
    { time: '9:00 AM', days: ['', '', '', '', ''] },
    { time: '10:00 AM', days: ['', '', '', '', ''] },
    { time: '11:00 AM', days: ['', '', '', '', ''] },
    { time: '12:00 PM', days: ['', '', '', '', ''] },
    { time: '1:00 PM', days: ['', '', '', '', ''] },
    { time: '2:00 PM', days: ['', '', '', '', ''] },
    { time: '3:00 PM', days: ['', '', '', '', ''] },
    { time: '4:00 PM', days: ['', '', '', '', ''] },
    { time: '5:00 PM', days: ['', '', '', '', ''] },
    // add more hours of the day and days of the week as needed
  ];

  constructor(private afDB: AngularFireDatabase) {
    this.timetableRef = afDB.object('timetable');
    this.timetableRef.valueChanges().subscribe((data: any) => {
      if (data) {
        this.timetable = data;
      }
    });
  }

  editCell(row: any, dayIndex: number) {
    const cellValue = row.days[dayIndex];
    const newCellValue = prompt('Enter a new value:', cellValue);

    if (newCellValue !== null) {
      row.days[dayIndex] = newCellValue;
      this.timetableRef.set(this.timetable);
    }
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  value;

  observable = interval(1000)           // create an observable to transmit count every second
    .pipe(
      filter((value) => {               // only retransmit observables that match the expression (i.e. are even)
        return value % 2 === 0;
      })
    )
    .subscribe(
      (value) => {                      // 'next' function that output the passed observable value
        this.value = value;
      },
      (error) => {
        console.log('Error :', error);  // 'error' function that console logs the passed observable error
      }
    );
}

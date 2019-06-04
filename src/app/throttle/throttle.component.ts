import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css']
})
export class ThrottleComponent {

  value;

  observable$ = interval(1000)          // create an observable to transmit count every second
    .pipe(
      throttleTime(3000)                // only retransmit observables every 3 sec
    )                                   // note that will only show every 4 sec because of interval(1000) is also 1 sec
    .subscribe(
      (value) => {
        this.value = value;             // 'next' function that output the passed observable value
      },
      (error) => {
        console.log('Error :', error);  // 'error' function that console logs the passed observable error
      }
    );

}

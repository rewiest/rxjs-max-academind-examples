
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  value;
  observable$ = interval(1000)        // create an observable to transmit count every second
    .pipe(
      map((value) => {                // map the passed observable value and double it
        return value = value * 2;
      })
    )
    .subscribe(
      (value) => {                    // 'next' function that output the passed observable value
        this.value = value;
      },
      (error) => {                    // 'error' function that console logs the passed observable error
        console.log(error);
      },
      () => {                         // 'complete' function that outputs the statis 'Complete'
        console.log('Complete');
      }
    );
}

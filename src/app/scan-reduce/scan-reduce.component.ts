
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { reduce, scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan-reduce',
  templateUrl: './scan-reduce.component.html',
  styleUrls: ['./scan-reduce.component.css']
})
export class ScanReduceComponent {

  reduceValues: Array<number> = [];
  scanValues: Array<number> = [];

  reduceObservable = of(1, 2, 3, 4, 5)            // create observable that immediately transmits each element of array
    .pipe(
      reduce((total, currentValue) => {           // used for creating a value at end of all observable transmissions
        return total + currentValue;              // return the previous total + the passed observable
      }, 0)                                       // initial value for total
    )
    .subscribe(
      (value) => {
        this.reduceValues.push(value as number);
      },
      (error) => {
        console.log('Reduce Error :', error);
      }
    );

  scanObservable = of(1, 2, 3, 4, 5)              // create observable that immediately transmits each element of array
    .pipe(
      scan((total, currentValue) => {             // used for maintaining values between observable transmissions (maintain state)
        return total + currentValue;              // return the previous total + the passed observable
      }, 0)                                       // initial value for total
    )
    .subscribe(
      (value) => {
        this.scanValues.push(value as number);
      },
      (error) => {
        console.log('Scan Error :', error);
      }
    );

}

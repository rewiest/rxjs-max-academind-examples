
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

  reduceObservable = of(1, 2, 3, 4, 5)
    .pipe(
      reduce((total, currentValue) => {
        return total + currentValue;
      }, 0)
    )
    .subscribe({
      next: (value) => {
        this.reduceValues.push(value as number);
      },
      error: (error) => {
        console.log('Reduce Error :', error);
      }
    });

  scanObservable = of(1, 2, 3, 4, 5)
    .pipe(
      scan((total, currentValue) => {
        return total + currentValue;
      }, 0)
    )
    .subscribe({
      next: (value) => {
        this.scanValues.push(value as number);
      },
      error: (error) => {
        console.log('Scan Error :', error);
      }
    });

}

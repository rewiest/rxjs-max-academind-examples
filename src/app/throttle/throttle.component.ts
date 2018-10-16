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

  observable = interval(1000)
    .pipe(
      throttleTime(3000)
    )
    .subscribe({
      next: (value) => {
        this.value = value;
      },
      error: (error) => {
        console.log('Error :', error);
      }
    });

}

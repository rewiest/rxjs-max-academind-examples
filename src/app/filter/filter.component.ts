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

  observable = interval(1000)
    .pipe(
      filter((value) => {
        return value % 2 === 0;
      })
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

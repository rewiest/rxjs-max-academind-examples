
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
  observable = interval(1000);

  observer = {
    next: (value) => {
      this.value = value;
    },
    error: (error) => {
      console.log(error);
    },
    complete: () => {
      console.log('Complete');
    }
  };

  sub = this.observable
    .pipe(
      map((value) => {
        return value = value * 2;
      })
    )
    .subscribe(this.observer);

}

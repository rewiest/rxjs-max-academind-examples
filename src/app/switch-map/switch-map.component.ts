
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent {

  value;

  form = new FormGroup({
    input: new FormControl
  });

  obs1 = this.form.get('input').valueChanges;   // reactive form automatically transmits observable via form.valueChanges
  obs2 = interval(1000);                        // create an observable to transmit count every second

  m1 = this.obs1
    .pipe(
      switchMap(event => {                      // received the event and value from observable f1
        return this.obs2;                       // but switch to return new observable f2
      })
    )
    .subscribe(
      (value) => {
        console.log(value);                     // although f1 triggered the event, the value is that of f2
        this.value = value;                     // when f1 is triggered again, the value of f2 will be reset
      }                                         // and cancels old f1 subscriptions when resetting
    );
}

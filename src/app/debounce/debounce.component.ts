
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent {

  values: Array<string> = [];

  form = new FormGroup({
    input: new FormControl
  });

  f = this.form.valueChanges        // reactive form automatically transmits observable via form.valueChanges
    .pipe(
      map(value => value.input),    // get only the input text
      debounceTime(500),            // wait until typing has stoppped for .5 sec
      distinctUntilChanged()        // only transmit a new text value if it is different
    )
    .subscribe(
      (value) => {                           // only showing the 'next' function parameter
        console.log(value);                  // the lastest text value in the observable
        this.values.push(value as string);   // this is only used to show the list in HTML
      }
    );
}

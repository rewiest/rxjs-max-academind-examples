
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent {

  values: Array<string> = [];

  form = new FormGroup({
    input: new FormControl
  });

  f = this.form.valueChanges                // reactive form automatically transmits observable via form.valueChanges
    .pipe(
      pluck('input'),                       // plucks out the value for the specified property shown in quotes (i.e. value.input)
      debounceTime(500),                    // wait until typing has stoppped for .5 sec
      distinctUntilChanged()                // only transmit a new text value if it is different
    )
    .subscribe(
      (value) => {
        console.log(value);
        this.values.push(value as string);
      }
    );

}


import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  f = this.form.valueChanges
    .pipe(
      map(value => value.input),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe({
      next: (value) => {
        console.log(value);
        this.values.push(value as string);
      }
    });
}

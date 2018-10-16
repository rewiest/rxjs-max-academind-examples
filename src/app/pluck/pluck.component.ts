
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

  f = this.form.valueChanges
    .pipe(
      pluck('input'),
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

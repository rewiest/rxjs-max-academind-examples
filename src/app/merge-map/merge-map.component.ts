
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent {

  combinedValue;

  form = new FormGroup({
    input1: new FormControl,
    input2: new FormControl
  });

  f1 = this.form.get('input1').valueChanges;      // reactive form automatically transmits observable via form.valueChanges
  f2 = this.form.get('input2').valueChanges;      // reactive form automatically transmits observable via form.valueChanges

  m1 = this.f1
    .pipe(
      mergeMap(event1 => {                        // received the value from f1 observable
        return this.f2                            // return f2 observable
          .pipe(
            map(event2 => event1 + ' ' + event2)  // but only after mapping value of f2 observable with that of f1
          );                                      // however, the trigger is only with change to f2 and not f1
      })
    )
  .subscribe(combinedValue => this.combinedValue = combinedValue);

}

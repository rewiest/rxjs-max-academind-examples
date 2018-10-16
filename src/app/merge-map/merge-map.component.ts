
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

  f1 = this.form.get('input1').valueChanges;
  f2 = this.form.get('input2').valueChanges;

  m1 = this.f1
    .pipe(
      mergeMap(event1 => {
        return this.f2
          .pipe(
            map(event2 => event1 + ' ' + event2)
          );
      })
    )
  .subscribe(combinedValue => this.combinedValue = combinedValue);

}

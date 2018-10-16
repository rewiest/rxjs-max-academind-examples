
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

  obs1 = this.form.get('input').valueChanges;
  obs2 = interval(1000);

  m1 = this.obs1
    .pipe(
      switchMap(event => {
        return this.obs2;
      })
    )
    .subscribe({
      next: (value) => {
        console.log(value);
        this.value = value;
      }
    });
}

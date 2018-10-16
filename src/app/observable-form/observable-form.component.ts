
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-observable-form',
  templateUrl: './observable-form.component.html',
  styleUrls: ['./observable-form.component.css']
})
export class ObservableFormComponent {

  squaredata: number;

  form = new FormGroup({
    inputnumber: new FormControl
  });

  f = this.form.get('inputnumber').valueChanges
    .pipe(
      map(n => n * n)
      )
    .subscribe(squaredata => this.squaredata = squaredata);

}

import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  values: Array<string> = [];
  subject = new Subject();                  // create a new observable via Subject

  subscription1 = this.subject.subscribe(   // create a subscriber
    (value) => {
      this.values.push(value as string);
    },
    (error) => {
      this.values.push(error as string);
    },
    () => {
      this.values.push('Completed');
    }
  );

  subscription2 = this.subject.subscribe(   // create a second subscriber
    (value) => {
      this.values.push(value as string);
    }
  );

  subject1 = this.subject.next('A new data piece');   // transmits the text via observable
  subject2 = this.subject.complete();                 // transmits a completion of observable
}

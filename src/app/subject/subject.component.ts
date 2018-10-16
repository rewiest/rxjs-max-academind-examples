import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  values: Array<string> = [];
  subject = new Subject();

  subscription1 = this.subject.subscribe({
    next: (value) => {
      this.values.push(value as string);
    },
    error: (error) => {
      this.values.push(error as string);
    },
    complete: () => {
      this.values.push('Completed');
    }
  });

  subscription2 = this.subject.subscribe({
    next: (value) => {
      this.values.push(value as string);
    }
  });

  subject1 = this.subject.next('A new data piece');
  subject2 = this.subject.complete();
}

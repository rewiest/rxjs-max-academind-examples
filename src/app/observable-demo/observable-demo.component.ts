
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  private data: Observable<string>;
  fruits: Array<string> = [];
  anyErrors: boolean;
  finished: boolean;

  start() {
    this.data = new Observable (
      observer => {
        setTimeout(() => {
          observer.next('Apple');
        }, 1000);

        setTimeout(() => {
          observer.next('Mango');
        }, 2000);

        setTimeout(() => {
          observer.next('Orange');
        }, 3000);

        setTimeout(() => {
          observer.error(new Error('Error Occurred'));
        }, 4000);

        setTimeout(() => {
          observer.complete();
        }, 5000);
     }
  );

  this.data
    .subscribe(
      (fruit) => this.fruits.push(fruit),
      (error) => this.anyErrors = true,
      () => this.finished = true
    );
  }
}

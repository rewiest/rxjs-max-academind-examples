import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ObservableFormComponent } from './observable-form/observable-form.component';
import { SubjectComponent } from './subject/subject.component';
import { FilterComponent } from './filter/filter.component';
import { MapComponent } from './map/map.component';
import { ThrottleComponent } from './throttle/throttle.component';
import { PluckComponent } from './pluck/pluck.component';
import { ScanReduceComponent } from './scan-reduce/scan-reduce.component';
import { DebounceComponent } from './debounce/debounce.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableDemoComponent,
    ObservableFormComponent,
    SubjectComponent,
    FilterComponent,
    MapComponent,
    ThrottleComponent,
    PluckComponent,
    ScanReduceComponent,
    DebounceComponent,
    MergeMapComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

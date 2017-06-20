import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';

import { PersonReducer } from './person.reducer';
import { FilterReducer } from './filter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ people: PersonReducer, filter: FilterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

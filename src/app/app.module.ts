import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, INITIAL_STATE } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';
import { PartyStatsComponent } from './party-stats/party-stats.component';

import { LocalStoreService } from './shared/services/local-store.service';

import { rootReducer } from './shared/reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    LocalStoreService,
    {
      provide: INITIAL_STATE,
      deps: [LocalStoreService],
      useFactory: lsService => {
        return {people: lsService.getItem('people') || []};
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

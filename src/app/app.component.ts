import { ADD_PERSON } from './actions';
import { id } from './id';
import { LocalStoreService } from './shared/services/local-store.service';
import { partyModel } from './selectors';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/let';
import { ADD_GUEST, REMOVE_GUEST, REMOVE_PERSON, TOGGLE_ATTENDING } from "app/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public model;

  constructor(
    private _store: Store<any>,
    private _lsService: LocalStoreService
  ) {}

  ngOnInit() {
    this.model = Observable.combineLatest(
        this._store.select('people'),
        this._store.select('filter')
      ).let(partyModel());
    this._store.select('people').subscribe(people => this._lsService.setItem('people', people));
  }

  addPerson(name) {
    this._store.dispatch({type: ADD_PERSON, payload: {id: id(), name: name}});
  }

  updateFilter(filter) {
    this._store.dispatch({type: filter});
  }

  addGuest(id) {
    this._store.dispatch({type: ADD_GUEST, payload: id});
  }

  removeGuest(id) {
    this._store.dispatch({type: REMOVE_GUEST, payload: id});
  }

  removePerson(id) {
    this._store.dispatch({type: REMOVE_PERSON, payload: id});
  }

  toggleAttending(id) {
    this._store.dispatch({type: TOGGLE_ATTENDING, payload: id});
  }
}

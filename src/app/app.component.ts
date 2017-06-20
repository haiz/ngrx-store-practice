import { Subject } from 'rxjs/Subject';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public people;
  private id: number = 0;
  public a;
  constructor(
    private _store: Store<any>
  ) {
    // _store.select('people').subscribe(people => {
    //   this.people = people;
    // });
    this.people = Observable.combineLatest(
      _store.select('people'),
      _store.select('filter'),
      (people: any[], filter: (person: any) => any) => {
        return people.filter(filter);
      }
    );
    this.a = new Subject;
  }
  addPerson(name) {
    this._store.dispatch({
      type: 'ADD_PERSON',
      payload: {
        id: ++this.id,
        name: name,
        guests: 0,
        attending: false
      }
    });
  }

  updateFilter(filter) {
    this._store.dispatch({type: filter});
  }

  addGuest(id) {
    this._store.dispatch({
      type: 'ADD_GUESTS',
      payload: id
    });
  }

  removeGuest(id) {
    this._store.dispatch({
      type: 'REMOVE_GUESTS',
      payload: id
    });
  }

  removePerson(id) {
    this._store.dispatch({
      type: 'REMOVE_PERSON',
      payload: id
    });
  }

  toggleAttending(id) {
    this._store.dispatch({
      type: 'TOGGLE_ATTENDING',
      payload: id
    });
  }
}

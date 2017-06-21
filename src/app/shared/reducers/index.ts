import { combineReducers } from "@ngrx/store";

import { PeopleReducer } from './people.reducer';
import { FilterReducer } from './filter.reducer';

export const rootReducer = (state, action) => {
    const reducer = combineReducers({
        people: PeopleReducer,
        filter: FilterReducer
    });
    return reducer(state, action);
};

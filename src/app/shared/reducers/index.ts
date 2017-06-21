import { combineReducers } from "@ngrx/store";

import { PeopleReducer } from './people.reducer';
import { FilterReducer } from './filter.reducer';
import { reset } from './../../states';

export const rootReducer = (state, action) => {
    const reducer = combineReducers({
        people: reset(PeopleReducer),
        filter: FilterReducer
    });
    return reducer(state, action);
};



import { ADD_PERSON, REMOVE_PERSON, REMOVE_GUEST, ADD_GUEST, TOGGLE_ATTENDING } from './../../actions';

const changePerson = (state, action, fn) => {
    return state.map(person => {
        if (person.id === action.payload) {
            return fn(person, action.payload);
        }
        return person;
    });
};

export const PeopleReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PERSON:
            return [
                ...state,
                Object.assign({}, {id: action.payload.id, name: action.payload.name, guests: 0, attending: false})
            ];
        case REMOVE_PERSON:
            return state.filter(person => person.id !== action.payload);
        case ADD_GUEST:
            return changePerson(state, action,
                person => Object.assign({}, person, {guests: person.guests + 1})
            );
        case REMOVE_GUEST:
            return changePerson(state, action,
                person => Object.assign({}, person, {guests: person.guests - 1})
            );
        case TOGGLE_ATTENDING:
            return changePerson(state, action,
                person => Object.assign({}, person, {attending: !person.attending})
            );

        default:
            return state;
    }
};

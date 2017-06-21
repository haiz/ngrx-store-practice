import { SHOW_ATTENDING, SHOW_ALL, SHOW_WITH_GUESTS } from './../../actions';

export const FilterReducer = (state = person => person, action) => {
    switch (action.type) {
        case SHOW_ATTENDING:
            return person => person.attending;
        case SHOW_ALL:
            return person => person;
        case SHOW_WITH_GUESTS:
            return person => person.guests;

        default:
            return person => person;
    }
};

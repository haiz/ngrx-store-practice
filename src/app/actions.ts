/* 
  I prefer to keep all action constants in one file,
  this provides a one stop reference for all relevant user interaction
  within your application. It also allows those new to project to see
  everything your app 'does' in a quick glance.
*/

//Person Action Constants
export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const ADD_GUEST = 'ADD_GUEST';
export const REMOVE_GUEST = 'REMOVE_GUEST';
export const TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';

//Party Filter Constants
export const SHOW_ATTENDING = 'SHOW_ATTENDING';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_WITH_GUESTS = 'SHOW_GUESTS';
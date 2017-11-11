/*
 * CategoryReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_CATEGORY,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
});

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:

      // Delete prefixed '@' from the github username
      return state
        .set('categoryName', action.name);
    default:
      return state;
  }
}

export default categoryReducer;

/*
 * HomeReducer
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
  SAVE_COLOUR_PALETTE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  colourPalette: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COLOUR_PALETTE:
      return state
        .set('colourPalette', action.colour);
    default:
      return state;
  }
}

export default homeReducer;

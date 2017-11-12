/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_IMAGE_BY_CATEGORY = 'boilerplate/Recommendation/GET_IMAGE_BY_CATEGORY';
export const STORE_CATEGORY_IMAGE = 'boilerplate/Recommendation/STORE_CATEGORY_IMAGE';
export const SET_SELECTED_IMAGES = 'boilerplate/Recommendation/SET_SELECTED_IMAGES';

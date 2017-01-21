import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };
// post -> active or selected post

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
      break;
    default:
      return state;
  }
}

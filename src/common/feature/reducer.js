import { FETCH_SOME_DATA } from "./action";

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_SOME_DATA:
      return action.payload.data;
    default:
      return state;
  }
};

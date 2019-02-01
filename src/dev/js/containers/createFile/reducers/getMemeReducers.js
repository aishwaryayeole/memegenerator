import * as types from "../../common/functions/commonActionTypes";

export default function(state = {}, action = null) {
  switch (action.type) {
    case types.GET_MEME_RESPONSE:
      if (action.payload.success === true) {
        console.log("In reducer");
        return Object.assign({}, state, {
          getMemesData: action.payload.data.memes,
          target: action.type
        });
      } else {
        return Object.assign({}, state, {
          getMemesData: [],
          target: action.type
        });
      }

    case types.CREATE_MEME_RESPONSE:
      if (action.payload.success === true) {
        return Object.assign({}, state, {
          imageURL: action.payload.data.url,
          target: action.type
        });
      } else {
        return Object.assign({}, state, {
          imageURL: "",
          error: action.payload.error_message,
          target: action.type
        });
      }
    default:
      return state;
  }
}

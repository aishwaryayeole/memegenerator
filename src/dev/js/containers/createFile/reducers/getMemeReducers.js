import * as types from '../../common/functions/commonActionTypes';

export default function (state = {}, action = null) {
    switch (action.type) {

        case types.GET_MEME_RESPONSE:
            if (action.payload.status == 200) {
                return Object.assign({}, state, { getMemesData: action.payload.data, target: action.type });
            }
            else {
                return Object.assign({}, state, { getMemesData: [], target: action.type });
            }


        default:
            return state;
    }
}
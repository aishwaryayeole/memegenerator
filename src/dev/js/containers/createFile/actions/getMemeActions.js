import axios from 'axios';
import * as config from '../../common/config';
import * as types from '../../common/functions/commonActionTypes';
import { httpRequest } from '../../common/functions/commonAjaxActions';

export function getMemeRequest() {
    return function (dispatch, getState) {
        var request = {
            url:config.getUrl('getMemes'),
            method:'GET',
        	successCallback:getMemeResponse,
        	failureCallback:getMemeResponse
        };
        return httpRequest(dispatch, getState, request);
    }
}

export function getMemeResponse(response) {
    return {
        type: types.GET_MEME_RESPONSE,
        payload: response
    }
}

import axios from 'axios';
import * as config from '../../common/config';
import * as types from '../../common/functions/commonActionTypes';

export function getMemeRequest() {  
  return function(dispatch) {
    // axios.get('https://api.imgflip.com/get_memes')
    axios({
      method: 'GET',
      url: config.getUrl('getMemes'),
      // params: request.params,
      // data: requestData,
      // headers: headers
  
    })
    .then(response => {
      console.log("response: ",response)
      dispatch({
        type: types.GET_MEME_RESPONSE,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
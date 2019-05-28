import axios from "axios";
import * as config from "../../common/config";
import * as types from "../../common/functions/commonActionTypes";

export function getMemeRequest() {
  return function(dispatch) {
    // axios.get('https://api.imgflip.com/get_memes')
    axios({
      method: "GET",
      url: config.getUrl("getMemes")
      // params: request.params,
      // data: requestData,
      // headers: headers
    })
      .then(response => {
        console.log("response: ", response);
        dispatch({
          type: types.GET_MEME_RESPONSE,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function createMemeRequest(createData) {
  return function(dispatch) {
    // axios.get('https://api.imgflip.com/get_memes')
    axios({
      method: "POST",
      url:
        config.getUrl("createMemes") +
        "template_id=" +
        createData.id +
        "&username=aishwaryayeole&password=Welcome@123&text0=" +
        createData.text0 +
        "&text1=" +
        createData.text1
      // params: request.params,
      // data: requestData,
      // headers: headers
    })
      .then(response => {
        console.log("response: ", response);
        dispatch({
          type: types.CREATE_MEME_RESPONSE,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function resetTarget() {
  return {
    type: types.DEFAULT
  };
}

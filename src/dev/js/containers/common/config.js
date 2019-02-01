import { getServerUrl } from "./server.config.js";
export function getUrl(APIName) {
  var APIUrls = {
    getMemes: "https://api.imgflip.com/get_memes",
    createMemes: "https://api.imgflip.com/caption_image?"
  };
  return APIUrls[APIName];
}

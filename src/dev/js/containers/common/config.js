import {getServerUrl} from './server.config.js';
export function getUrl(APIName){
    var APIUrls={

        'getMemes':'https://api.imgflip.com/get_memes'
       
    };
    return APIUrls[APIName];
}
import {SteamService} from './service';

/**
 * The main class of the Steam API library. *
 * @public
 */
export default class Steam {
    constructor(steamApiKey: string){
        if(!steamApiKey){
            throw new Error('Steam API Key missing. Obtain one here: https://steamcommunity.com/dev/apikey.');
        }

        let service = new SteamService(steamApiKey);
    }
}
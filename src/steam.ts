import {SteamService} from './service';
import {PlayerService} from './player';
import { PlayerApi } from './interfaces';

/**
 * The main class of the Steam API library. *
 * @public
 */
export default class Steam {
    public Player: PlayerApi;

    constructor(steamApiKey: string){
        if(!steamApiKey){
            throw new Error('Steam API Key missing. Obtain one here: https://steamcommunity.com/dev/apikey.');
        }

        let service = new SteamService(steamApiKey);

        this.Player = new PlayerService(service);
    }
}
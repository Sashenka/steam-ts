import * as request from "request-promise";
import {logger} from "../utils";
import {SteamAPI} from '../enums'
import {InvalidSteamIdApiKeyError} from '../errors'

const log = logger.getLogger("service.Steam");

/**
 * The ApiService class provide a method to query either the Steam Web or Store API.
 * @private
 */
export class SteamService {
    constructor(private steamApiKey: string){
        if(!steamApiKey){
            log.error('Steam API Key missing or invalid. Obtain one here: https://steamcommunity.com/dev/apikey.');
            throw new InvalidSteamIdApiKeyError();
        }
    }

     /**
     * Make HTTP calls to the Steam Web API.
     *
     * @param path - The API interface to interrogate.
     * @param parameters - The parameters to add to the HTTP call.
     * @param api - The Steam API to use, either the Web, Store or Community API. Defaults to the Web API.
     * @returns The response from the API.
     */
    get: any = async (path: string, parameters: string, api: SteamAPI = SteamAPI.Web) => {
        log.info(`GET ${api}${path}?key=${this.steamApiKey}&${parameters}`);

        try{
            return await request.get(`${api}${path}?key=${this.steamApiKey}&${parameters}`,{json: true});
        } catch(exception){
            throw exception;
        }
    }
}
import {InvalidSteamIdError, InvalidSteamIdArrayError} from '../errors';

export const validateSteamIds = (steamIds: string[]): void => {
    let rule: RegExp = /^[\d]{17}$/;

    if(steamIds.length == 0 || steamIds.length > 100){
        throw new InvalidSteamIdArrayError(steamIds.length);
    }

    for(let id of steamIds){
        if(!rule.test(id)){
            throw new InvalidSteamIdError(id);
        }
    }

}
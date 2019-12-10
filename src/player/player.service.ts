import {
    Player,
    PlayerApi,
    Friend,
    Badge,
    Ban,
    RecentGame,
    OwnedGame
} from '../interfaces';
import {validateSteamIds} from '../validation'

import {PlayerMapper} from './player.mapper';
import {SteamService} from '../service';
import {map} from '../utils';

export class PlayerService implements PlayerApi {
    constructor(private apiService: SteamService){}
    
    getSteamId = async (vanityUrl: string): Promise<string> => {
        const data: any = await this.apiService.get('ISteamUser/ResolveVanityURL/v1/', `vanityUrl=${vanityUrl}`);
        return data.steamid;
    }
    
    getSummaries = async (steamIds: string[]): Promise<Player[]> => {
        validateSteamIds(steamIds);

        const data: any = await this.apiService.get('ISteamUser/GetPlayerSummaries/v2/', `steamids=${steamIds}`);
        return map(PlayerMapper.mapPlayerSummaries, this, data.response);
    }
    
    getFriendList = async (steamId: string): Promise<Friend[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUser/GetFriendList/v1/', `steamid=${steamId}`);
        return map(PlayerMapper.mapFriendList, data.friendslist.friends);
    }
    
    getLevel = async (steamId: string): Promise<number> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetSteamLevel/v1/', `steamid=${steamId}`);
        return data.response.player_level;
    }
    
    getBadges = async (steamId: string): Promise<Badge[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetBadges/v1/', `steamid=${steamId}`);
        return map(PlayerMapper.mapBadges, data.response.badges);
    }
    
    getBans = async (steamIds: string[]): Promise<Ban[]> => {
        validateSteamIds(steamIds);

        const data: any = await this.apiService.get('ISteamUser/GetPlayerBans/v1/', `steamids=${steamIds}`);
        return map(PlayerMapper.mapBans, data.players);
    }
    
    getRecentlyPlayedGames = async (steamId: string, count: number = 0): Promise<RecentGame[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetRecentlyPlayedGames/v1/', `steamid=${steamId}&count=${count}`);
        return map(PlayerMapper.mapRecentGames, data.response.games);
    }
    
    getOwnedGames = async (steamId: string, includePlayedFreeGames: boolean = false):  Promise<OwnedGame[]> => {
        validateSteamIds([steamId]);

        let parameters: string = `steamid=${steamId}&include_appinfo=1`;

        if(includePlayedFreeGames){
            parameters += '&include_played_free_games=1'
        }

        const data: any = await this.apiService.get('IPlayerService/GetOwnedGames/v1/', parameters);
        return map(PlayerMapper.mapOwnedGames, data.response.games);
    }

    getGroups = async (steamId: string): Promise<string[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUser/GetUserGroupList/v1', `steamid=${steamId}`);
        return map(PlayerMapper.mapGroupIds, data.response.groups);
    }

    getPlayerAchievements = async (steamId: string, appid: string, language: string = 'english'): Promise<any> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUserStats/GetPlayerAchievements/v1', `steamid=${steamId}&appid=${appid}&l=${language}`);

        if(!data.playerstats.success){

        }

        return map(PlayerMapper.mapPlayerAchievements, data.playerstats.achievements);
    }
}
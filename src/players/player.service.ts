import {
    Player as PlayerInterface,
    Friend,
    Badge,
    Ban,
    RecentGame,
    OwnedGame    
} from './interfaces';
import {validateSteamIds} from '../validation'

import {PlayerMapper} from './player.mapper';
import {
    Configuration, 
    SteamService
} from '../steam';
import {map} from '../utils';

/**
 * The SteamUser class provides methods to query the Steam API regarding informations about a Steam user.
 * @public
 */
export class PlayerService {
    private apiService: SteamService;

    constructor(configuration: Configuration){
        this.apiService = new SteamService(configuration.apiKey);
    }
    
    /**
     * Get the SteamdId of a Steam user from the profile vanity URL.
     *
     * @remarks
     * The vanity URL is the last part of the Steam profile URL (https://steamcommunity.com/id/<VanityURL>).
     * The Steam Id is returned as a string to overcome the limitation of the the number type.
     *
     * @param vanityUrl - The vanity URL.
     * @returns The SteamId of the user as a string.
     */
    getSteamId = async (vanityUrl: string): Promise<string> => {
        const data: any = await this.apiService.get('ISteamUser/ResolveVanityURL/v1/', `vanityUrl=${vanityUrl}`);
        return data.steamid;
    }
    
    /**
     * Return the player summary of the SteamdIds provided.
     *
     * @remarks
     * Keep in mind that the order of the array of SteamIds is not necessarily the order in which the Players will be returned by the Steam API.
     *
     * @param steamIds - A list of SteamIds (max: 100).
     * @returns A list of Player objects.
     */
    getSummaries = async (steamIds: string[]): Promise<PlayerInterface[]> => {
        validateSteamIds(steamIds);

        const data: any = await this.apiService.get('ISteamUser/GetPlayerSummaries/v2/', `steamids=${steamIds}`);
        return map(PlayerMapper.mapPlayerSummaries, this, data.response);
    }
    
    /**
     * Return the player's friend list.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns A list of Friend objects.
     */
    getFriendList = async (steamId: string): Promise<Friend[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUser/GetFriendList/v1/', `steamid=${steamId}`);
        return map(PlayerMapper.mapFriendList, data.friendslist.friends);
    }
    
    /**
     * Return the Steam level of the Player.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns The Steam level as a number.
     */
    getLevel = async (steamId: string): Promise<number> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetSteamLevel/v1/', `steamid=${steamId}`);
        return data.response.player_level;
    }
    
    /**
     * Return the player's bagdes.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns A list of Badge objects.
     */
    getBadges = async (steamId: string): Promise<Badge[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetBadges/v1/', `steamid=${steamId}`);
        return map(PlayerMapper.mapBadges, data.response.badges);
    }
    
    /**
     * Return the ban information of the of the SteamdIds provided.
     *
     * @param steamIds - A list of SteamIds.
     * @returns A list of Ban objects.
     */
    getBans = async (steamIds: string[]): Promise<Ban[]> => {
        validateSteamIds(steamIds);

        const data: any = await this.apiService.get('ISteamUser/GetPlayerBans/v1/', `steamids=${steamIds}`);
        return map(PlayerMapper.mapBans, data.players);
    }
    
    /**
     * Return the list of the recently played games of a player.
     *
     * @param steamId - The SteamdId of the Player.
     * @param count - The number of recently played games to return. 0 or null will return all of them. Defaults to 0.
     * @returns A list of RecentGame objects.
     */
    getRecentlyPlayedGames = async (steamId: string, count: number = 0): Promise<RecentGame[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('IPlayerService/GetRecentlyPlayedGames/v1/', `steamid=${steamId}&count=${count}`);
        return map(PlayerMapper.mapRecentGames, data.response.games);
    }
    
    /**
     * Return the list of games owned by a player.
     *
     * @param steamId - The SteamdId of the Player.
     * @param includePlayedFreeGames - If played Free Games should be included in the response. Defaults to false.
     * @returns A list of OwnedGame objects.
     */
    getOwnedGames = async (steamId: string, includePlayedFreeGames: boolean = false):  Promise<OwnedGame[]> => {
        validateSteamIds([steamId]);

        let parameters: string = `steamid=${steamId}&include_appinfo=1`;

        if(includePlayedFreeGames){
            parameters += '&include_played_free_games=1'
        }

        const data: any = await this.apiService.get('IPlayerService/GetOwnedGames/v1/', parameters);
        return map(PlayerMapper.mapOwnedGames, steamId, data.response.games);
    }

    /**
     * Return the list of groups of which the player is a member of.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns A list of Group objects.
     */
    getGroups = async (steamId: string): Promise<string[]> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUser/GetUserGroupList/v1', `steamid=${steamId}`);
        return map(PlayerMapper.mapGroupIds, data.response.groups);
    }

    /**
     * Return the list of achievements for a specific game.
     *
     * @param steamId - The SteamdId of the Player.
     * @param appid - The AppID to get achievements for.
     * @param language - The Language to return strings for.
     * @returns A list of Achievement objects.
     */
    getPlayerAchievements = async (steamId: string, appid: string, language: string = 'english'): Promise<any> => {
        validateSteamIds([steamId]);

        const data: any = await this.apiService.get('ISteamUserStats/GetPlayerAchievements/v1', `steamid=${steamId}&appid=${appid}&l=${language}`);

        if(!data.playerstats.success){

        }

        return map(PlayerMapper.mapPlayerAchievements, data.playerstats.achievements);
    }
}
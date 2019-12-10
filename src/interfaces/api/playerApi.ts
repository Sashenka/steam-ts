import {
    Player,
    Friend,
    Badge,
    Ban,
    RecentGame,
    OwnedGame
} from '../player';

/**
 * The PlayerApi class provides methods to query the Steam API regarding informations about a player.
 * @public
 */
export interface PlayerApi {
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
    getSteamId(vanityUrl: string): Promise<string>;

    /**
     * Return the player summary of the SteamdIds provided.
     *
     * @remarks
     * Keep in mind that the order of the array of SteamIds is not necessarily the order in which the Players will be returned by the Steam API.
     *
     * @param steamIds - A list of SteamIds.
     * @returns A list of Player objects.
     */
    getSummaries(steamIds: string[]): Promise<Player[]>;

    /**
     * Return the player's friend list.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns A list of Friend objects.
     */
    getFriendList(steamId: string): Promise<Friend[]>;

    /**
     * Return the Steam level of the Player.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns The Steam level as a number.
     */
    getLevel(steamId: string): Promise<number>;

    /**
     * Return the player's bagdes.
     *
     * @param steamId - The SteamdId of the Player.
     * @returns A list of Badge objects.
     */
    getBadges(steamId: string): Promise<Badge[]>;

    /**
     * Return the ban information of the of the SteamdIds provided.
     *
     * @param steamIds - A list of SteamIds.
     * @returns A list of Ban objects.
     */
    getBans(steamIds: string[]): Promise<Ban[]>;

    /**
     * Return the list of the recently played games of a player.
     *
     * @param steamId - The SteamdId of the Player.
     * @param count - The number of recently played games to return. 0 or null will return all of them. Defaults to 0.
     * @returns A list of RecentGame objects.
     */
    getRecentlyPlayedGames(steamId: string, count?: number): Promise<RecentGame[]>;

    /**
     * Return the list of games owned by a player.
     *
     * @param steamId - The SteamdId of the Player.
     * @param includePlayedFreeGames - If played Free Games should be included in the response. Defaults to false.
     * @returns A list of OwnedGame objects.
     */
    getOwnedGames(steamId: string, includePlayedFreeGames?: boolean):  Promise<OwnedGame[]>;
    getGroups(steamId: string): Promise<string[]>;
    getPlayerAchievements(steamId: string, appid: string, language?: string): Promise<any>;
}
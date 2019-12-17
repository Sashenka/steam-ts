import {
    Badge,
    Ban,
    Friend,
    Player as PlayerInterface,
    RecentGame,
    OwnedGame,
    Achievement
} from './interfaces';
import {Player} from './player.internal';
import {PlayerService} from './player.service';

/**
 * The PlayerMapper class provides methods to map the Stean API JSON response to a typed object.
 * @private
 */
export class PlayerMapper {

    /**
    * Map the JSON from the response to a list of Player objects.
    *
    * @param response - The response JSON
    * @returns A list of Player objects.
    */
    public static mapPlayerSummaries = (playerApi:PlayerService, response: any): PlayerInterface[] => {
        let players: PlayerInterface[] = [];

        if(!response){
            return players;
        }

        for(let p of response.players){
            let player: PlayerInterface = new Player(playerApi, p);
            players.push(player);
        }

        return players;
    }

    /**
    * Map the JSON from the response to a list of Friend objects.
    *
    * @param response - The response JSON
    * @returns A list of Friend objects.
    */
    public static mapFriendList = (response: any): Friend[] => {
        let friends: Friend[] = [];

        if(!response){
            return friends;
        }

        for(let f of response){
            const friend: Friend = {
                steamId: f.steamid,
                relationship: f.relationship,
                since: (new Date(f.friend_since*1000))
            }

            friends.push(friend);
        }

        return friends;
    }

    /**
    * Map the JSON from the response to a list of Badge objects.
    *
    * @param response - The response JSON
    * @returns A list of Badge objects.
    */
    public static mapBadges = (response: any): Badge[] => {
        let badges: Badge[] = [];

        if(!response){
            return badges;
        }

        for(let b of response){
            const badge: Badge = {
                id: b.badgeid,
                level: b.level,
                completedAt: (new Date(b.completion_time*1000)),
                experience: b.xp,
                scarcity: b.scarcity,
                appId: b.appid,
                communityItemId: b.communityitemid,
                borderColor: b.border_color
            }

            badges.push(badge);
        }

        return badges;
    }

    /**
    * Map the JSON from the response to a list of Ban objects.
    *
    * @param response - The response JSON
    * @returns A list of Ban objects.
    */
    public static mapBans = (response: any): Ban[] => {
        let bans: Ban[] = [];

        if(!response){
            return bans;
        }

        for(let b of response){
            const ban: Ban = {
                steamId: b.SteamId,
                isCommunityBanned: b.CommunityBanned,
                vacBanned: b.VACBanned,
                numberOfVACBans: b.NumberOfVACBans,
                daysSinceLastBan: b.DaysSinceLastBan,
                numberOfGameBans: b.NumberOfGameBans,
                isEconomyBanned: b.EconomyBan
            }

            bans.push(ban);
        }

        return bans;
    }

    /**
    * Map the JSON from the response to a list of RecentGame objects.
    *
    * @param response - The response JSON
    * @returns A list of RecentGame objects.
    */
    public static mapRecentGames = (response: any): RecentGame[] => {
        let games: RecentGame[] = [];

        if(!response){
            return games;
        }

        for(let g of response){
            const game: RecentGame = {
                appId: g.appid,
                name: g.name,
                playtimeLastTwoWeeks: g.playtime_2weeks,
                playtimeForever: g.playtime_forever,
                icon: g.img_icon_url,
                logo: g.img_logo_url
            }

            games.push(game);
        }

        return games;
    }

    /**
    * Map the JSON from the response to a list of OwnedGame objects.
    *
    * @param response - The response JSON
    * @returns A list of OwnedGame objects.
    */
    public static mapOwnedGames = (response: any): OwnedGame[] => {
        let games: OwnedGame[] = [];

        if(!response){
            return games;
        }

        for(let g of response){
            const game: OwnedGame = {
                appId: g.appid,
                name: g.name,
                playtimeForever: g.playtime_forever,
                icon: g.img_icon_url,
                logo: g.img_logo_url,
                hasCommunityVisibleStatistics: g.has_community_visible_stats
            }

            games.push(game);
        }

        return games;
    }

    /**
    * Map the JSON from the response to a list of strings.
    *
    * @param response - The response JSON
    * @returns A list of Group IDs strings.
     */
    public static mapGroupIds = (response: any): string[] => {
        let groups: string[] = [];

        if(!response){
            return groups;
        }

        for (let g of response){
            groups.push(g.gid);
        }

        return groups;
    }

    /**
    * Map the JSON from the response to a list of Achievement objects.
    *
    * @param response - The response JSON
    * @returns A list of Achievement objects.
     */
    public static mapPlayerAchievements = (response: any): Achievement[] => {
        let achievements: Achievement[] = [];

        if(!response){
            return achievements;
        }

        for (let a of response){
            const achievement: Achievement = {
                apiName: a.apiname,
                name: a.name,
                description: a.description,
                isAchieved: a.achieved,
                achievedAt: (a.unlocktime == 0) ? null : (new Date(a.unlocktime*1000))
            }

            achievements.push(achievement);
        }

        return achievements;
    }

}
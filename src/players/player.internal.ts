import {
    Avatar,
    Badge,
    Ban,
    Friend,
    Persona,
    Player as PlayerInterface,
    Community,
    RecentGame,
    OwnedGame,
    Achievement
} from './interfaces';
import {PlayerService} from './player.service';

/**
 * The internal Player class used to build the Player API.
 * @private
 */
export class Player implements PlayerInterface {
    public steamId: string;
    public persona: Persona;
    public realName: string;
    public community: Community;
    public avatar: Avatar;
    public primaryGroupId: string;
    public countryCode: string;
    public stateCode: string;
    public cityId: number;
    public createdAt: Date;
    public lastLogOffAt: Date;

    constructor(private playerService: PlayerService, playerJSON: any){
        const p = playerJSON;

        const avatar: Avatar = {
            small: p.avatar,
            medium: p.avatarmedium,
            full: p.avatarfull
        };

        const persona: Persona = {
            name: p.personaname,
            state: p.personastate,
            flags: p.personastateflags
        }

        const community: Community = {
            url: p.profileurl,
            state: p.profilestate,
            visibility: p.communityvisibilitystate
        }

        this.steamId = p.steamid;
        this.persona = persona;
        this.realName = p.realname;
        this.community = community;
        this.avatar = avatar;
        this.primaryGroupId = p.primaryclanid;
        this.countryCode = p.loccountrycode;
        this.stateCode = p.locstatecode;
        this.cityId = p.loccityid;
        this.createdAt = (new Date(p.timecreated*1000));
        this.lastLogOffAt = (new Date(p.lastlogoff*1000));
    }

    public get level(): Promise<number> {
        return (async () => await this.playerService.getLevel(this.steamId))();
    }

    public get badges(): Promise<Badge[]> {
        return (async () => await this.playerService.getBadges(this.steamId))();
    }

    public get bans(): Promise<Ban> {
        return (
            async () => await this.playerService.getBans([this.steamId]).then(b=> {return b[0]})
        )();
    }

    public get friendList(): Promise<Friend[]> {
        return (async () => await this.playerService.getFriendList(this.steamId))();
    }

    public recentlyPlayedGames = (count: number = 0) : Promise<RecentGame[]> => {
        return this.playerService.getRecentlyPlayedGames(this.steamId, count);
    }

    public ownedGames = (includePlayedFreeGames: boolean = false) : Promise<OwnedGame[]> => {
        return this.playerService.getOwnedGames(this.steamId, includePlayedFreeGames);
    }

    public get groups(): Promise<string[]> {
        return (async () => await this.playerService.getGroups(this.steamId))();
    }

    public achievements = (appId: string): Promise<Achievement[]> => {
        return (async () => await this.playerService.getPlayerAchievements(this.steamId, appId))();
    }

}
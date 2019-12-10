import {
    Avatar,
    Badge,
    Ban,
    Friend,
    Persona,
    Player,
    Profile,
    RecentGame,
    OwnedGame,
    Achievement
} from '../interfaces';
import {PlayerApi} from '../api';

/**
 * The internal Player class used to build the Player API.
 */
export class PlayerInternal implements Player {
    public steamId: string;
    public persona: Persona;
    public realName: string;
    public profile: Profile;
    public avatar: Avatar;
    public primaryGroupId: string;
    public countryCode: string;
    public stateCode: string;
    public cityId: number;
    public createdAt: Date;
    public lastLogOffAt: Date;

    constructor(private playerApi: PlayerApi, playerJSON: any){
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

        const profile: Profile = {
            url: p.profileurl,
            state: p.profilestate,
            visibility: p.communityvisibilitystate
        }

        this.steamId = p.steamid;
        this.persona = persona;
        this.realName = p.realname;
        this.profile = profile;
        this.avatar = avatar;
        this.primaryGroupId = p.primaryclanid;
        this.countryCode = p.loccountrycode;
        this.stateCode = p.locstatecode;
        this.cityId = p.loccityid;
        this.createdAt = (new Date(p.timecreated*1000));
        this.lastLogOffAt = (new Date(p.lastlogoff*1000));
    }

    public get level(): Promise<number> {
        return (async () => await this.playerApi.getLevel(this.steamId))();
    }

    public get badges(): Promise<Badge[]> {
        return (async () => await this.playerApi.getBadges(this.steamId))();
    }

    public get bans(): Promise<Ban> {
        return (
            async () => await this.playerApi.getBans([this.steamId]).then(b=> {return b[0]})
        )();
    }

    public get friendList(): Promise<Friend[]> {
        return (async () => await this.playerApi.getFriendList(this.steamId))();
    }

    public recentlyPlayedGames = (count: number = 0) : Promise<RecentGame[]> => {
        return this.playerApi.getRecentlyPlayedGames(this.steamId, count);
    }

    public ownedGames = (includePlayedFreeGames: boolean = false) : Promise<OwnedGame[]> => {
        return this.playerApi.getOwnedGames(this.steamId, includePlayedFreeGames);
    }

    public get groups(): Promise<string[]> {
        return (async () => await this.playerApi.getGroups(this.steamId))();
    }

    public achievements = (appId: string): Promise<Achievement[]> => {
        return (async () => await this.playerApi.GetPlayerAchievements(this.steamId, appId))();
    }

}
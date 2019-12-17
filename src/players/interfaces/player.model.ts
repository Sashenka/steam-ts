import {Avatar} from './avatar.model';
import {Badge} from './badge.model';
import {Ban} from './ban.model';
import {Friend} from './friend.model'
import {Persona} from './persona.model';
import {Community} from './community.model';
import {RecentGame, OwnedGame} from './game.model';
import {Achievement} from './achievement.model';

/**
 * The Player class describe a Player from the Steam API. It also provides methods to call API with the current player's Steam Id.
 * @public
 */
export interface Player {
    /** 64bit SteamID of the user */
    steamId: string;
    persona: Persona;
    /** The player's "Real Name", if they have set it. */
    realName: string;
    community: Community;
    avatar: Avatar;
    /** The player's primary group, as configured in their Steam Community profile. */
    primaryGroupId: string;
    /** The user's country of residence, 2-character ISO country code. */
    countryCode: string;
    /** The user's state of residence. */
    stateCode: string;
    /** An internal code indicating the user's city of residence. */
    cityId: number;
    /** The date the player's account was created. */
    createdAt: Date;
    /** The last time the user was online. */
    lastLogOffAt: Date;
    /** The user's Steam level. */
    level: Promise<number>;
    badges: Promise<Badge[]>;
    bans: Promise<Ban>;
    friendList: Promise<Friend[]>;
    recentlyPlayedGames(count: number) : Promise<RecentGame[]>;
    ownedGames(includePlayedFreeGames: boolean): Promise<OwnedGame[]>
    groups: Promise<string[]>
    achievements(appId: string): Promise<Achievement[]>
}
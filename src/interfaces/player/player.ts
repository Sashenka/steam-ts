import {Avatar} from './avatar';
import {Badge} from './badge';
import {Ban} from './ban';
import {Friend} from './friend'
import {Persona} from './persona';
import {Profile} from './profile';
import {RecentGame, OwnedGame} from './game';
import {Achievement} from './achievement';

/**
 * The Player class describe a Player from the Steam API. It also provides methods to call API with the current player's Steam Id.
 * @public
 */
export interface Player {
    steamId: string;
    persona: Persona;
    realName: string;
    profile: Profile;
    avatar: Avatar;
    primaryGroupId: string;
    countryCode: string;
    stateCode: string;
    cityId: number;
    createdAt: Date;
    lastLogOffAt: Date;

    level: Promise<number>;
    badges: Promise<Badge[]>;
    bans: Promise<Ban>;
    friendList: Promise<Friend[]>;
    recentlyPlayedGames(count: number) : Promise<RecentGame[]>;
    ownedGames(includePlayedFreeGames: boolean): Promise<OwnedGame[]>
    groups: Promise<string[]>
    achievements(appId: string): Promise<Achievement[]>
}
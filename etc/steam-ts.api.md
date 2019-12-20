## API Report File for "steam-ts"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export interface Achievement {
    // (undocumented)
    achievedAt: Date;
    // (undocumented)
    apiName: string;
    // (undocumented)
    description: string;
    // (undocumented)
    isAchieved: boolean;
    // (undocumented)
    name: string;
}

// @public
export interface Avatar {
    full: string;
    medium: string;
    small: string;
}

// @public
export interface Badge {
    // (undocumented)
    appId: number;
    // (undocumented)
    borderColor: number;
    // (undocumented)
    communityItemId: string;
    // (undocumented)
    completedAt: Date;
    // (undocumented)
    experience: number;
    // (undocumented)
    id: number;
    // (undocumented)
    level: number;
    // (undocumented)
    scarcity: number;
}

// @public
export interface Ban {
    // (undocumented)
    daysSinceLastBan: number;
    // (undocumented)
    isCommunityBanned: boolean;
    // (undocumented)
    isEconomyBanned: string;
    // (undocumented)
    numberOfGameBans: number;
    // (undocumented)
    numberOfVACBans: number;
    // (undocumented)
    steamId: string;
    // (undocumented)
    vacBanned: boolean;
}

// @public
export interface Community {
    state: number;
    url: string;
    visibility: number;
}

// @public
export interface Configuration {
    apiKey: string;
}

// @public
export interface Friend {
    relationship: string;
    since: Date;
    steamId: string;
}

// @public
export interface Game {
    // (undocumented)
    appId: string;
    // (undocumented)
    icon: string;
    // (undocumented)
    logo: string;
    // (undocumented)
    name: string;
    // (undocumented)
    playtimeForever: number;
}

// @public
export class InvalidSteamIdApiKeyError extends Error {
    constructor();
}

// @public
export class InvalidSteamIdArrayError extends Error {
    constructor(given: number);
}

// @public
export class InvalidSteamIdError extends Error {
    constructor(given: string);
}

// @public
export class MappingError extends Error {
    constructor(originalErrorMessage: string);
}

// @public
export interface OwnedGame extends Game {
    // (undocumented)
    hasCommunityVisibleStatistics: boolean;
}

// @public
export interface Persona {
    // (undocumented)
    flags: number;
    name: string;
    state: number;
}

// @public
export interface Player {
    achievements(appId: string): Promise<Achievement[]>;
    avatar: Avatar;
    badges: Promise<Badge[]>;
    bans: Promise<Ban>;
    cityId: number;
    community: Community;
    countryCode: string;
    createdAt: Date;
    friendList: Promise<Friend[]>;
    // (undocumented)
    groups: Promise<string[]>;
    lastLogOffAt: Date;
    level: Promise<number>;
    ownedGames(includePlayedFreeGames: boolean): Promise<OwnedGame[]>;
    persona: Persona;
    primaryGroupId: string;
    realName: string;
    recentlyPlayedGames(count: number): Promise<RecentGame[]>;
    stateCode: string;
    steamId: string;
}

// @public
export class PlayerService {
    constructor(configuration: Configuration);
    getBadges: (steamId: string) => Promise<Badge[]>;
    getBans: (steamIds: string[]) => Promise<Ban[]>;
    getFriendList: (steamId: string) => Promise<Friend[]>;
    getGroups: (steamId: string) => Promise<string[]>;
    getLevel: (steamId: string) => Promise<number>;
    getOwnedGames: (steamId: string, includePlayedFreeGames?: boolean) => Promise<OwnedGame[]>;
    getPlayerAchievements: (steamId: string, appid: string, language?: string) => Promise<any>;
    getRecentlyPlayedGames: (steamId: string, count?: number) => Promise<RecentGame[]>;
    getSteamId: (vanityUrl: string) => Promise<string>;
    getSummaries: (steamIds: string[]) => Promise<Player[]>;
}

// @public
export interface RecentGame extends Game {
    // (undocumented)
    playtimeLastTwoWeeks: number;
}


```
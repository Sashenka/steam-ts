/**
 * A basic game.
 * @public
 */
export interface Game {
    appId: string,
    /** Name of the application. */
    name: string,
    /** Overall playtime in minutes. */
    playtimeForever: number,
    icon: string,
    logo: string
}

/**
 * A player's recently played game.
 * @public
 */
export interface RecentGame extends Game {
    /** Playtime in minute since the last two weeks. */
    playtimeLastTwoWeeks: number,
}

/**
 * A player's owned game.
 * @public
 */
export interface OwnedGame extends Game {
    hasCommunityVisibleStatistics: boolean
}
/**
 * A basic game.
 * @public
 */
export interface Game {
    /** Unique identifier for the game. */
    appId: string,
    /** Name of the application. */
    name: string,
    /** Overall playtime in minutes. */
    playtimeForever: number,
    /** URL for the icon of the game. */
    icon: string,
    /** URL for the logo of the game. */
    logo: string
}

/**
 * A player's recently played game.
 * @public
 */
export interface RecentGame extends Game {
    /** Playtime in minute in the last two weeks. */
    playtimeLastTwoWeeks: number,
}

/**
 * A player's owned game.
 * @public
 */
export interface OwnedGame extends Game {
    /** Indicates there is a statistics page with achievements or other game statistics available for this game. */
    hasCommunityVisibleStatistics: boolean,
    /** If hasCommunityVisibleStatistics is True, this is the URL to the statistics page of the Player fo this game. */
    statistics: string
}
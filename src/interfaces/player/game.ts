/**
 * An interface describing a basic game.
 * @public
 */
export interface Game {
    appId: string,
    name: string,
    playtimeForever: number,
    icon: string,
    logo: string
}

/**
 * An interface describing a player's recently played game.
 * @public
 */
export interface RecentGame extends Game {
    playtimeLastTwoWeeks: number,
}

/**
 * An interface describing a player's owned game.
 * @public
 */
export interface OwnedGame extends Game {
    hasCommunityVisibleStatistics: boolean
}
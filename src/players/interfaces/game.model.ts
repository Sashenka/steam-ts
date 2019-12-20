/**
 * A basic game.
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
 * A player's recently played game.
 * @public
 */
export interface RecentGame extends Game {
    playtimeLastTwoWeeks: number,
}

/**
 * A player's owned game.
 * @public
 */
export interface OwnedGame extends Game {
    hasCommunityVisibleStatistics: boolean
}
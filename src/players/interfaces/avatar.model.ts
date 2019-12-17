/**
 * An interface describing an player's avatar.
 * @public
 */
export interface Avatar {
    /** The full URL of the player's 32x32px avatar. */
    small: string;
    /** The full URL of the player's 64x64px avatar. */
    medium: string;
    /** The full URL of the player's 184x184px avatar. */
    full: string;
}
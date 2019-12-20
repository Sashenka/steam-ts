/**
 * The player's community profile.
 * @public
 */
export interface Community{
    /** The full URL of the player's Steam Community profile. */
    url: string;
    /** Indicates the user has a community profile configured (will be set to '1'). */
    state: number;
    /** This represents whether the profile is visible or not. */
    visibility: number;
}
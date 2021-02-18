/**
 * A member of the player's friendlist.
 * @public
 */
export interface Friend{
    /** 64bit SteamID of the user. */
    steamId: string;
    /** Relationship qualifier. */
    relationship: string;
    /** Date when the relationship was created. */
    since: Date
}
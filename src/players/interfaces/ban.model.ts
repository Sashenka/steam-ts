/**
 * The player's ban history.
 * @public
 */
export interface Ban {
    steamId: string;
    isCommunityBanned: boolean;
    vacBanned: boolean;
    numberOfVACBans: number;
    daysSinceLastBan: number;
    numberOfGameBans: number;
    isEconomyBanned: string
}
/**
 * A player's badge.
 * @public
 */
export interface Badge {
    id:number;
    /** The level of this badge. */
    level: number;
    /** The date at which this badge was awarded. */
    completedAt: Date;
    /** The amount of experience awarded by this badge. */
    experience: number;
    scarcity: number;
    appId:number;
    communityItemId: string;
    borderColor: number;
}
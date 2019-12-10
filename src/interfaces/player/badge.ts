/**
 * An interface describing a badge.
 * @public
 */
export interface Badge {
    id:number;
    level: number;
    completedAt: Date;
    experience: number;
    scarcity: number;
    appId:number;
    communityItemId: string;
    borderColor: number;
}
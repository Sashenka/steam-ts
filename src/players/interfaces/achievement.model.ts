/**
 * An interface describing a player achievement.
 * @public
 */
export interface Achievement {
    apiName: string;
    name: string;
    description: string;
    isAchieved: boolean;
    achievedAt: Date;
}
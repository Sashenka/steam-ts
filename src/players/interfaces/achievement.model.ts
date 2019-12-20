/**
 * A game achievement.
 * @public
 */
export interface Achievement {
    apiName: string;
    name: string;
    description: string;
    isAchieved: boolean;
    achievedAt: Date;
}
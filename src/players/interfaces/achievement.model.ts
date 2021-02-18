/**
 * A game achievement.
 * @public
 */
export interface Achievement {
    /** The string used to access this achievement using the API.*/
    apiName: string;
    /** The name of this achievement.*/
    name: string;
    /** A description of this achievement, for displaying in the Community. May be localized.*/
    description: string;
    /** A boolean indicating if this achievement has been attained.*/
    isAchieved: boolean;
    /** The date at which the achievement has been attained, null if isAchieved is false.*/
    achievedAt: Date;
}
import { Avatar } from "./avatar.model";

export interface Group {
    /** 64bit SteamID of the group */
    steamId: string;
    name: string;
    vanityUrl: string;
    avatar: Avatar;
    headline: string;
    summary: string;    
    members: string[]
}
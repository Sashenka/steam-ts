/**
 * A player's persona.
 * @public
 */
export interface Persona {
    /** The player's persona name (display name). */
    name: string;
    /** The player's current status. */
    state: number;
    flags: number;
}
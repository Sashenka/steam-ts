/**
 * An Error with a the Steam API key.
 * @public
 */
export class InvalidSteamIdApiKeyError extends Error {
    constructor() {
        super('Steam API Key missing or invalid. Obtain one here: https://steamcommunity.com/dev/apikey.');
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidSteamIdApiKeyError.name;
    }
}

/**
 * An Error with a SteamID.
 * @public
 */
export class InvalidSteamIdError extends Error {
    constructor(given: string) {
        super(`Expected the SteamId to be a 17 digits long string, but got ${given}.`);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidSteamIdError.name;
    }
}

/**
 * An Error with an Array of Steam Id. The Error concerns the Array itself, an Error with its content will be an InvalidSteamIdError.
 * @public
 */
export class InvalidSteamIdArrayError extends Error {
    constructor(given: number) {
        super(`Expected an Array of at least 1 SteamId and a maximum of 100, but got ${given} elements.`);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = InvalidSteamIdArrayError.name;
    }
}

/**
 * An error while mapping the JSON response to the Typescript object.
 * @public
 */
export class MappingError extends Error {
    constructor(originalErrorMessage: string) {
        super(`Error while mapping the JSON response to the Typescript object. Message: ${originalErrorMessage}.`);
        Error.captureStackTrace(this, this.constructor);
        this.name = MappingError.name;
    }
}
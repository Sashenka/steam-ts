import { SteamService } from '../../src/steam/steam.service';
import { InvalidSteamIdApiKeyError } from '../../src/errors';
import { expect } from 'chai';
import 'mocha';

describe('SteamService',
() => { 
    it('should throw an InvalidSteamIdApiKeyError if the key is missing', () => { 
        expect(() => {new SteamService(undefined)}).to.throw(InvalidSteamIdApiKeyError);
    });

    it('should return an instance of the SteamService class', () => {
        expect(new SteamService('KEY')).to.be.instanceOf(SteamService);
    });
});
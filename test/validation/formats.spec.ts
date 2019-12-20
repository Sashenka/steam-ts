import {InvalidSteamIdError, InvalidSteamIdArrayError} from '../../src/errors';
import {validateSteamIds} from '../../src/validation'
import { expect } from 'chai';
import 'mocha';

//Array.from(Array(10).keys())
describe('Validation',
() => {
    it('should throw an InvalidSteamIdArrayError if an array of length 0 is provided', () => { 
        expect(() => {validateSteamIds([])}).to.throw(InvalidSteamIdArrayError);
    });

    it('should throw an InvalidSteamIdArrayError if an array of lenght greater than 100 is provided', () => { 
        let array: string[] = new Array(101);
        expect(() => {validateSteamIds(array)}).to.throw(InvalidSteamIdArrayError);
    });

    it('should throw an InvalidSteamIdError if one or more SteamID provided is invalid', () => { 
        expect(() => {validateSteamIds(['76561197994625075', 'INVALID'])}).to.throw(InvalidSteamIdError);
    });

    it('should not throw an Error if the SteamIDs provided are valid', () => { 
        expect(() => {validateSteamIds(['76561197994625075', '76561198093483350'])}).to.not.throw(InvalidSteamIdError);
    });
});
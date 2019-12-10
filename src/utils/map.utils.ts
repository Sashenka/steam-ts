import {MappingError} from '../errors';

/**
* Helper function to map the JSON from a Steam API call to a Typescript object.
*
* @param mappingFunction - The mapping function
* @param parameters - The parameters to be passed to the mapping function. Must be passed in the same order as declared in the mapping function.
* @returns The result of the mapping function called.
* @internal
*/
export const map = <T>(mappingFunction: Function, ...parameters:any[]): T => {
    try{
        return mappingFunction(...parameters);
    }catch(error){
        throw new MappingError(error.message);
    }
}
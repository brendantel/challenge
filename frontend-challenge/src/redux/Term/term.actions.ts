/*
    * Create an enumerated value called TermActionTypes
        it should have one value called updateTerm

    * Create an action creator called updateTerm.  It should update the term piece of state.
*/
export enum TermActionTypes {
    updateTerm = 'UPDATE_TERM'
}

interface UpdateTermAction {
    type: typeof TermActionTypes.updateTerm
    payload: string 
}

export function updateTerm(term: string): UpdateTermAction {
    return {
        type: TermActionTypes.updateTerm,
        payload: term
    }
}





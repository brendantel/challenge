/*
    the inital state should be an empty string
    the reducer should have one case to update the term
*/
import { TermActionTypes } from './term.actions'

const initialState: string = ''

export default function termReducer(state = initialState, action): string {
    switch (action.type) {
        case TermActionTypes.updateTerm:
            return action.payload
        default:
            return state
    }
}

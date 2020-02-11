import { FilterActionTypes } from "./filter.actions"

/*
    the inital state should be an empty string
    the reducer should have one case to update the filter
*/
const initialState: string = ''

export default function filterReducer(state = initialState, action): string {
    switch (action.type) {
        case FilterActionTypes.updateFilter:
            return action.payload
        default:
            return state
    }
}


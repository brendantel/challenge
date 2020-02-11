/*
    * Create an enumerated value called FilterActionTypes
        it should have one value called updateFilter

    * Create an action creator called updateFilter that updates the filter state.
*/
export enum FilterActionTypes {
    updateFilter = 'UPDATE_FILTER'
}

interface UpdateFilterAction {
    type: typeof FilterActionTypes.updateFilter
    payload: string
}

export function updateFilter(filter: string): UpdateFilterAction {
    return {
        type: FilterActionTypes.updateFilter,
        payload: filter
    }
}


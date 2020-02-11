import { combineReducers } from 'redux';
import term from './Term/term.reducer'
import filter from './Filter/filter.reducer'

const rootReducer = combineReducers({
    term,
    filter,
});

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

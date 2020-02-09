import { combineReducers } from 'redux';
import term from './Term/term.reducer'
import filter from './Filter/filter.reducer'

export default combineReducers({
    term,
    filter,
});

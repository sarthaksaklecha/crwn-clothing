import { createSelector } from 'reselect';
import directoryReducer from './directory.reducer';

const directorySelector = state => state.directory;

export const sectionsSelector = createSelector(
    [directorySelector],
    (directory) => directory.sections
)
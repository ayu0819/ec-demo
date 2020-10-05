import {createSelector} from "reselect";

const usersSelector = (state) => state.users;

// ↓ add
// getSignedInを呼び出せば
export const getSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
)
export const getUsername = createSelector(
    [usersSelector],
    state => state.username
)
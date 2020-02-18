import A from './user.types';

export const setCurrentUser = user => ({
  type: A.SET_CURRENT_USER,
  payload: user
});

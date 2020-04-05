export const RECIEVE_USERS = 'RECIEVE_USERS';

export function receiveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users, // short form of users : users
  };
}

export const userStatus = (state, userId) => state.data.users[userId];

export const getUser = (state, userId) => state.entities.user[userId];

export type Action = { type: 'REGISTER_USER', payload: Object };

export const registerUser = (user: Object): Action => ({
    type: 'REGISTER_USER',
    payload: user
})
export type Action = { type: 'REGISTER_USER', payload: Object };

export const registerUser = (userToRegister: Object): Action => ({
    type: 'REGISTER_USER',
    payload: userToRegister
})
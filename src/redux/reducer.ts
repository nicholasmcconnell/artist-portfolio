import { Action } from "./actions";

//Need to export?
export interface RegisterUserState {
    user: Object,
}

const initialState = {
    user: {}
}


export const registerUserReducer = (state: RegisterUserState = initialState, action: Action) => {
    switch (action.type) {
        case 'REGISTER_USER': {
            return { user: [action.payload] }
        }
    }
}
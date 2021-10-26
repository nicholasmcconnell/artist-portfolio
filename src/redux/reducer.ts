import { Action } from "./actions";

//Need to export?
export interface RegisterUserState {
    userToRegister: {},
    //     [Symbol.iterator]: function* (): any {
    //     let properties = Object.keys(this);
    //     for (let i of properties) {
    //         yield[i, this[i]];
    //     }
    // }
}

const initialState: any = {
    userToRegister: {},
}
//Need this function if wanting to continually add users to state.
initialState.userToRegister[Symbol.iterator] = function* (): any {
    let properties = Object.keys(this);
    for (let i of properties) {
        yield [i, this[i]];
    }
}

// NOTE => spreading state.userToRegister into userToRegister Array requires removal of RegisterUserState typing from registerUserReducer()


export const registerUserReducer = (state: RegisterUserState = initialState, action: Action) => {
    switch (action.type) {
        case 'REGISTER_USER': {
            return { ...state, userToRegister: [action.payload] }
        }
        default:
            return state;
    }
}
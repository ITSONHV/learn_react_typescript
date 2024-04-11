import { User } from "../models/UserModel";

export interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null
};

type AuthAction = {type: "LOGIN"; payload: User} | {type: "LOGOUT"};

const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch(action.type){
        case "LOGIN":
            debugger
            return {
                isLoggedIn: true,
                user: action.payload
            };
        case "LOGOUT":
            return {
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }
}
export default authReducer;
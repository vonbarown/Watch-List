import { RECEIVE_USERS, LOAD_USER, LOGIN_USER } from '../actions/actionTypes';

const initialState = {
    users: [],
    user: [],
    loggedUser: {
        user: null,
        isUserLoggedIn: false
    }
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_USERS:
            stateCopy.users = action.payload
            break
        case LOAD_USER:
            stateCopy.user = action.payload
            break
        case LOGIN_USER:
            stateCopy.loggedUser = {
                user: action.payload,
                isUserLoggedIn: true
            }
            break
        default:
            break
    }
    return stateCopy;
};
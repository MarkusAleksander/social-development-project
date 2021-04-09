import * as actionTypes from "./../actions/actionTypes";
import { updateObject } from "./../../utility/index";

const initialState = {
    idToken: null,
    userId: null,
    refreshToken: null,
    loading: false,
    authRedirectPath: "/",
    error: null,
    refreshing: false
}

// * prepare state for auth process
const authState = (state, action) => {
    return updateObject(state, { error: null, loading: true });
}

// * on auth success
const authSuccess = (state, action) => {
    return updateObject(state, {
        idToken: action.idToken,
        userId: action.userId,
        refreshToken: action.refreshToken,
        error: null,
        loading: false
    });
}

// * on auth fail
const authFail = (state, action) => {
    return updateObject(state, {
        idToken: null,
        userId: null,
        refreshToken: null,
        error: action.error,
        loading: false
    });
}

// * on auth logout
const authLogout = (state, action) => {
    return updateObject(state, {
        idToken: null,
        userId: null,
        refreshToken: null,
        error: null,
        loading: false
    });
}

// * on auth refresh start
const authRefreshStart = (state, action) => {
    return updateObject(state, { error: null, refreshing: true });
}

// * on auth refresh success
const authRefreshSuccess = (state, action) => {
    return updateObject(state, {
        idToken: action.idToken,
        refreshToken: action.refreshToken,
        error: null,
        refreshing: false
    });
}

// * on auth refresh fail
const authRefreshFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        refreshing: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authState(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAIL:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.AUTH_REFRESH_START:
            return authRefreshStart(state, action);
        case actionTypes.AUTH_REFRESH_SUCCESS:
            return authRefreshSuccess(state, action);
        case actionTypes.AUTH_REFRESH_FAIL:
            return authRefreshFail(state, action);
        default:
            return state
    }
}

export default reducer;
// * AUTH ACTIONS

import * as actionTypes from "./actionTypes";
import * as authStorageKeys from "./../../config/auth/index";
import axios from "axios";

// * ----- MAIN AUTH PROCESS ------ *//

// * Begin auth process
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

// * On auth success
export const authSuccess = (userId, idToken, refreshToken) => {
    return {
        type: actionTypes.AUTH_START,
        userId: userId,
        idToken: idToken,
        refreshToken: refreshToken
    }
}

// * On auth fail
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

// * main auth entry point
export const auth = (email, password) => {
    return dispatch => {
        // * Dispatch auth process starting
        dispatch(authStart());

        // * package entered data for auth
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        // * auth endpoint
        let url = "";

        // * send data
        axios.post(url, authData)
            .then(response => {
                // * calculate session end time
                const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));

                // * set storage items - TODO
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_USERID, response.data.userId);
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_IDTOKEN, response.data.idToken);
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_REFRESHTOKEN, response.data.refreshToken);
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_EXPIRATIONDATE, expirationDate);

                dispatch(authSuccess(response.data.userId, response.data.idToken, response.data.refreshToken));
                dispatch(authTimeout(response.data.expiresIn));
            })
            .catch(error => dispatch(authFail(error)));
    }
}

// * ----- MAIN AUTH REFRESH PROCESS ------ *//

// * auth refresh start
export const authRefreshStart = () => {
    return {
        type: actionTypes.AUTH_REFRESH_START
    }
}

// * auth refresh success
export const authRefreshSuccess = (idToken, refreshToken) => {
    return {
        type: actionTypes.AUTH_REFRESH_SUCCESS,
        idToken: idToken,
        refreshToken: refreshToken
    }
}

// * auth refresh fail
export const authRefreshFail = (error) => {
    return {
        type: actionTypes.AUTH_REFRESH_FAIL,
        error: error
    }
}

// * main auth refresh entry point
export const authRefresh = () => {
    return dispatch => {
        dispatch(authRefreshStart());
        // * reach out to server with refresh token

        let url = "";

        const refreshData = {
            // userId,
            // refreshToken
        }

        axios.post(url, refreshData)
            .then(response => {
                // * calculate new session end time
                const expirationDate = new Date(new Date().getTime() + (response.data.expiresIn * 1000));

                // * set storage items - TODO
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_IDTOKEN, response.data.idToken);
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_REFRESHTOKEN, response.data.refreshToken);
                localStorage.setItem(authStorageKeys.AUTH_STORAGE_KEY_EXPIRATIONDATE, expirationDate);

                dispatch(authRefreshSuccess(response.data.idToken, response.data.refreshToken));
                dispatch(authTimeout(response.data.expiresIn));

                dispatch(authRefreshSuccess(response))
            })
            .catch(error => dispatch(authRefreshFail(error)))
    }
}

// * ----- AUTH FUNCTIONS ------ *//

// * check current auth state when user loads/refreshes site
export const authCheckState = () => {
    return dispatch => {
        const idToken = localStorage.getItem(authStorageKeys.AUTH_STORAGE_KEY_IDTOKEN);

        if (!idToken) {
            // * no stored data, ensure fully logged out
            dispatch(authLogout());
        } else {
            // * do we have an expiration date?
            const expirationDate = new Date(localStorage.getItem(authStorageKeys.AUTH_STORAGE_KEY_EXPIRATIONDATE));
            if (expirationDate <= new Date()) {
                // * attempt auth refresh
                dispatch(authRefreshStart());
            } else {
                // * we're within the available session, set logged in and refresh timeout
                const userId = localStorage.getItem(authStorageKeys.AUTH_STORAGE_KEY_USERID);
                dispatch(authSuccess(idToken, userId));
                dispatch(authTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }

    }
}

// * On auth logout
export const authLogout = () => {
    localStorage.removeItem(authStorageKeys.AUTH_STORAGE_KEY_USERID);
    localStorage.removeItem(authStorageKeys.AUTH_STORAGE_KEY_IDTOKEN);
    localStorage.removeItem(authStorageKeys.AUTH_STORAGE_KEY_REFRESHTOKEN);
    localStorage.removeItem(authStorageKeys.AUTH_STORAGE_KEY_EXPIRATIONDATE);
    return {
        type: actionTypes.AUTH_FAIL,
    }
}

// * hold reference to the current timeout
let AUTH_TIMEOUT_ID = null;

// * set auth timeout
export const authTimeout = (expirationTime) => {
    return dispatch => {
        if (AUTH_TIMEOUT_ID) {
            clearTimeout(AUTH_TIMEOUT_ID);
        }
        AUTH_TIMEOUT_ID = setTimeout(() => {
            dispatch(authRefresh());
        }, expirationTime * 1000);
    }
}
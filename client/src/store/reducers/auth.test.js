import reducer from "./auth";

import * as actionTypes from "./../actions/actionTypes";

const defaultInitialState = {
    idToken: null,
    userId: null,
    refreshToken: null,
    loading: false,
    authRedirectPath: "/",
    error: null,
    refreshing: false,
}

describe("Auth reducer", () => {

    it("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(defaultInitialState);
    });

    it("should set loading on auth start", () => {
        expect(reducer(defaultInitialState, {
            type: actionTypes.AUTH_START
        })).toEqual({
            idToken: null,
            userId: null,
            refreshToken: null,
            loading: true,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        });
    });

    it("should store tokens upon login", () => {
        expect(reducer(defaultInitialState, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
        })).toEqual({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        });
    });

    it("should store error on auth fail", () => {
        expect(reducer(defaultInitialState, {
            type: actionTypes.AUTH_FAIL,
            error: "Error"
        })).toEqual({
            idToken: null,
            userId: null,
            refreshToken: null,
            loading: false,
            authRedirectPath: "/",
            error: "Error",
            refreshing: false,
        });
    });

    it("should clear data upon logout", () => {
        expect(reducer({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        }, {
            type: actionTypes.AUTH_LOGOUT
        })).toEqual({
            idToken: null,
            userId: null,
            refreshToken: null,
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        });
    });

    it("should set refresh to true when auth refreshing", () => {
        expect(reducer({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        }, {
            type: actionTypes.AUTH_REFRESH_START
        })).toEqual({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: true,
        });
    });

    it("should change refresh token on auth refresh success", () => {
        expect(reducer({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: true,
        }, {
            type: actionTypes.AUTH_REFRESH_SUCCESS,
            idToken: "newIdToken",
            refreshToken: "newRefreshToken"
        })).toEqual({
            idToken: "newIdToken",
            userId: "userId",
            refreshToken: "newRefreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: false,
        });
    });

    it("should store error on auth refresh fail", () => {
        expect(reducer({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: null,
            refreshing: true,
        }, {
            type: actionTypes.AUTH_REFRESH_FAIL,
            error: "Error"
        })).toEqual({
            idToken: "idToken",
            userId: "userId",
            refreshToken: "refreshToken",
            loading: false,
            authRedirectPath: "/",
            error: "Error",
            refreshing: false,
        });
    });
});
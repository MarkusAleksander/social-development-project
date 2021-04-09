import * as actionTypes from "./../actions/actionTypes";
import { updateObject } from "./../../utility/index";

const initialState = {
    profile_picture: null,
    friend_list: [],
    profile_posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;
import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../actions/users';

const initialState = {
    items: [],
    loading: true,
    error: null
};

export default function usersReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state, 
                loading: false,
                items: [...state.items, ...action.payload.users]
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            }
        default:
            return state;
    }
}
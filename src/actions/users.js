export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: { users }
});

export const fetchUsersFaileur = error => ({
    type: FETCH_USERS_SUCCESS,
    payload: { error }
});

export function fetchUsers(page) {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return fakeGetUsers(page)
            .then(json => {
                dispatch(fetchUsersSuccess(json));
                return json;
            })
            .catch(error =>
                dispatch(fetchUsersFaileur(error))
            );
    };
}

let serverData = [];
function fakeGetUsers(page) {

    if (!serverData.length) {
        serverData = require('../resources/users.json');
    }

    const pageSize = 25;
    const seek = page * pageSize;
    const seekEnd = seek + pageSize;
    let json = [];
    if (seekEnd < serverData.length) {
        json = serverData.slice(seek, seekEnd);
    }
    return new Promise(resolve => {
        // Resolve after a timeout so we can see the loading indicator
        setTimeout(
            () =>
                resolve(json),
            1000
        );
    });
}
import axios from 'axios'
import { UserRootObject } from '../../interface/user'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_USER_OBJ,
    UPDATE_USER_OBJ
} from './userTypes'

export const fetchUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest())
        axios
            .get('data/users.json')
            .then(response => {
                // response.data is the users
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message))
            })
    }
}
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users: UserRootObject[]) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error: any) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}
export const setUserRowObj = (user: UserRootObject) => {
    return {
        type: SET_USER_OBJ,
        payload: user
    }
}
export const updateUserRowObj = (user: UserRootObject) => {
    return {
        type: UPDATE_USER_OBJ,
        payload: user
    }
}
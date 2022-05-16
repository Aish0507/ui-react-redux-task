import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_USER_OBJ
} from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error: '',
    userRowObj: {}
}

const reducer = (state = initialState, action: any) => {
    switch (action?.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action?.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action?.payload
            }
        case SET_USER_OBJ:
            return {
                ...state,
                userRowObj: action?.payload
            }
        default: return state
    }
}

export default reducer
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SET_USER_OBJ,
    UPDATE_USER_OBJ
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
        case UPDATE_USER_OBJ:
            return {
                ...state,
                userRowObj: action?.payload,
                users: updateUsersArr(state, action?.payload)
            }
        default: return state
    }
}
function updateUsersArr(state: any, payload: any) {
    state.users = state.users.filter((data: any) => {
        if (data.id === payload?.id) {
            // data = payload
            data.name = payload?.name
            data.email = payload?.email
            data.address.city = payload?.city
            data.phone = payload?.phone
            data.website = payload?.website
            data.company.name = payload?.cname
        }
        return data
    })
    return state.users
}
export default reducer
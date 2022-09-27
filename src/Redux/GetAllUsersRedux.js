export const GETALLUSER_SUCCESS = 'GETALLUSER_SUCCESS';
export const USER_STATE = 'USER_STATE';
export const GETUSERBYID_SUCCESS ="GETUSERBYID_SUCCESS";
// export const ERROR = 'ERROR';
// export const LOADING = 'LOADING';
// export const LOGOUT = 'LogOut';
export const SET_TOKEN_USER = 'SET_TOKEN_USER';

const getAllUserState = {
    users:[],
    success: false,
    token: localStorage.getItem('accessToken'),
    error: '',
    loading: false,
    blocked:false,
    blockedSuccess: false,
    userByID:{}
}

function GetAllUsersRedux(state = getAllUserState, action) { 

    if (action.type === GETALLUSER_SUCCESS) { 
             return {
            // users:[...state.users, ...action.payload.data],
            users:[...action.payload.data],
            success: action.payload.success,
            loading: false,
            error:'',
            blockedSuccess: false,
           
        }
    }
    else if (action.type === SET_TOKEN_USER) {
        return {
            ...state,
            token: localStorage.getItem('accessToken')
        }
    }
     else if (action.type === USER_STATE) {
        console.log(action.payload,"REDUUX")
        return {
            ...state,
            blocked: action.payload.blocked,
            blockedSuccess: true,

        }
    }
    else if (action.type === GETUSERBYID_SUCCESS) {
        return {
          
            userByID: action.payload.data,

        }
    }
    // else if (action.type === LOADING) {
    //     return {
    //         ...state,
    //         loading: true,

    //     }
    // }
    // else if (action.type === ERROR) {
    //     return {
    //         ...state,
    //         error: action.payload.error,
    //         loading: false,
    //     }
    // }

    return state;
}



export default GetAllUsersRedux;

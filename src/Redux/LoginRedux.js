export const SUCCESS = 'LOGIN_SUCCESS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const LOGOUT = 'LogOut';
export const SET_TOKEN = 'SET_TOKEN';

const loginState = {
    success: false,
    token: localStorage.getItem('accessToken'),
    error: '',
    loading: false,
}

function LoginRedux(state = loginState, action) {

    if (action.type === SUCCESS) {
           localStorage.setItem('accessToken', action.payload.data.data.access_token)
        return {
            ...state,
            success: action.payload.success,
            loading: false,
            error:'',
            token: action.payload.data.data.access_token
        }
    }
    else if (action.type === SET_TOKEN) {
        return {
            ...state,
            token: localStorage.getItem('accessToken')
        }
    }
    else if (action.type === LOADING) {
        return {
            ...state,
            loading: true,

        }
    }
    else if (action.type === ERROR) {
        return {
            ...state,
            error: action.payload.error,
            loading: false,
        }
    }
    else if(action.type === LOGOUT){
        localStorage.removeItem('accessToken');
        return {
            ...state,
            success:false,
            token:''
        }

    }
    return state;
}

export function LogOut() {
    return {
        type: LOGOUT,
    }

    
}


export default LoginRedux;

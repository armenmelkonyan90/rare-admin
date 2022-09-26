export const ADS_SUCCESS = 'ADS_SUCCESS';
// export const ERROR = 'ERROR';
// export const LOADING = 'LOADING';
// export const LOGOUT = 'LogOut';
export const SET_TOKEN_ADS = 'SET_TOKEN_ADS';

const getAllAdsState = {
    ads:[],
    success: false,
    token: localStorage.getItem('accessToken'),
    error: '',
    loading: false,
}

function GetAllAdsRedux(state = getAllAdsState, action) { 

    if (action.type === ADS_SUCCESS) { 
  
          return {
            ads:[...state.ads, ...action.payload?.data],
            success: action.payload.success,
            loading: false,
            error:'',
           
        }
    }
    else if (action.type === SET_TOKEN_ADS) {
        return {
            ...state,
            token: localStorage.getItem('accessToken')
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



export default GetAllAdsRedux;

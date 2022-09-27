// export const ERROR = 'ERROR';
// export const LOADING = 'LOADING';
export const GET_APP_STATISTICS = 'GET_APP_STATISTICS';
export const SET_TOKEN_ADS = 'SET_TOKEN_ADS';

const getAllstatisticsState = {
    statistics:"",
    success: false,
    token: localStorage.getItem('accessToken'),
    error: '',
    loading: false,
   
}

function GetAllStatisticsRedux(state = getAllstatisticsState, action) { 

    if (action.type === GET_APP_STATISTICS) { 
  
        // console.log(action.payload.statistics,"Redux");
          return {
            statistics:action.payload.statistics,
            success: action.payload.success,
            loading: false,
            error:'',
           
        }
    }
    else if (action.type === SET_TOKEN_ADS) {
        return {
            ...state,
            token: localStorage.getItem('accessToken')
        }    }

    // else if (action.type === ERROR) {
    //     return {
    //         ...state,
    //         error: action.payload.error,
    //         loading: false,
    //     }
    // }

    return state;
}



export default GetAllStatisticsRedux;

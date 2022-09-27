export const ADS_SUCCESS = 'ADS_SUCCESS';
// export const ERROR = 'ERROR';
// export const LOADING = 'LOADING';
export const GET_ADS_BY_ID_SUCCESS = 'GET_ADS_BY_ID_SUCCESS';
export const SET_TOKEN_ADS = 'SET_TOKEN_ADS';
export const GET_GENDER_SUCCESS = 'GET_GENDER_SUCCESS';
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS';
export const GET_SUBCATEGORY_SUCCESS = 'GET_SUBCATEGORY_SUCCESS';
export const PRODUCT_ACTIVATION_SUCCESS = 'PRODUCT_ACTIVATION_SUCCESS';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS';
export const UPDATE_ADS_SUCCESS = 'UPDATE_ADS_SUCCESS';


const getAllAdsState = {
    ads:[],
    success: false,
    token: localStorage.getItem('accessToken'),
    error: '',
    loading: false,
    adsByID:{},
    gender:[],
    category:[],
    subcategory:[]
}

function GetAllAdsRedux(state = getAllAdsState, action) { 

    if (action.type === ADS_SUCCESS) { 
  
          return {
            ...state,
            ads:[...action.payload?.data],
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
    else if (action.type === GET_ADS_BY_ID_SUCCESS) {
        return {
            adsByID:action.payload.data

        }
    }
    else if (action.type === UPDATE_ADS_SUCCESS) {
        return {
            adsByID:action.payload.data

        }
    }
    else if (action.type === GET_GENDER_SUCCESS) {
        // console.log(action.payload.data, 'gendersReducer')
        return {
            ...state         

        }
    }
    else if (action.type === GET_CATEGORY_SUCCESS) {
        return {
            ...state,
            category:action.payload.data
        }
    }
    else if (action.type === GET_SUBCATEGORY_SUCCESS) {
        return {
            ...state,
            subcategory:action.payload.data
        }
    }
    else if (action.type === PRODUCT_ACTIVATION_SUCCESS) {
        return {
            ...state,
            subcategory:action.payload.data
        }
    }
    else if (action.type === DELETE_PRODUCT_SUCCESS) {
        return {
            ...state,
            subcategory:action.payload.data
        }
    }
    else if (action.type === DELETE_PHOTO_SUCCESS) {
        return {
            ...state,
            subcategory:action.payload.data
        }
    }
    
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

import { ADS_SUCCESS,
    GET_ADS_BY_ID_SUCCESS,
    SET_TOKEN_ADS,
    GET_GENDER_SUCCESS,
    GET_CATEGORY_SUCCESS,
    GET_SUBCATEGORY_SUCCESS, 
    PRODUCT_ACTIVATION_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PHOTO_SUCCESS,
    UPDATE_ADS_SUCCESS } from '../Redux/AdsRedux';
import { api } from '../Services/Base';


export function AdsThunk(state) {
    return async (dispatch, getState) => {
 
        // dispatch({
        //     type: LOADING,
        // })

        if(state == "new-ads"){
            state = "new";
        }
        api.get(`/product/all/admin?status=${state}`)
            .then((data) => {   
                // console.log(data,"adsss")       
                dispatch({
                    type:ADS_SUCCESS,
                    payload:{
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function GetAdsByIdThunk(id) {
    return async (dispatch, getState) => {
 
        // dispatch({
        //     type: LOADING,
        // })
        api.get(`/product/${id}`)
            .then((data) => {   
                // console.log(data.data.data,"adsss")       
                dispatch({
                    type:GET_ADS_BY_ID_SUCCESS,
                    payload:{
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}


export function UpdateAdsThunk(values) {

    // console.log(values, "VAluesINTHUNKs")
    return async (dispatch, getState) => { 
       
        api.put('product',values)
            .then((data) => {   
                // console.log(data.data.data,"gender")       
                dispatch({
                    type:UPDATE_ADS_SUCCESS,
                    payload:{
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}


export function GetGenderThunk() {
    return async (dispatch, getState) => { 
       
        api.get('gender/all')
            .then((data) => {   
                // console.log(data.data.data,"gender")       
                dispatch({
                    type:GET_GENDER_SUCCESS,
                    payload:{
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function GetCategoryThunk() {
    return async (dispatch, getState) => {        
        api.get('category/all')
            .then((data) => {   
                // console.log(data.data.data,"category")       
                dispatch({
                    type:GET_CATEGORY_SUCCESS,
                    payload:{                        
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function GetSubCategoryThunk(id) {
    return async (dispatch, getState) => {   
        // console.log(typeof id,"1111");     
        api.get(`subcategory/all?categoryId=${id}`)
            .then((data) => {   
                // console.log(data.data.data,"subcategory")       
                dispatch({
                    type:GET_SUBCATEGORY_SUCCESS,
                    payload:{                        
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function ProductActivationThunk(id,status) {
    return async (dispatch, getState) => {   
        // console.log(typeof id,"1111");     
        api.patch(`/product/status/${id}`, status)
            .then((data) => {   
                // console.log(data.data.data,"subcategory")       
                dispatch({
                    type:PRODUCT_ACTIVATION_SUCCESS,
                    payload:{                        
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function DeleteProductThunk(id) {
    return async (dispatch, getState) => {   
          
        api.delete(`product/${id}`)
            .then((data) => {                       
                dispatch({
                    type:DELETE_PRODUCT_SUCCESS,
                    payload:{                        
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
export function DeletePhotosThunk(id) {
    return async (dispatch, getState) => {   
          
        api.delete(`product/photos/${id}`)
            .then((data) => {                       
                dispatch({
                    type:DELETE_PHOTO_SUCCESS,
                    payload:{                        
                        success:true,
                        data:data.data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN_USER,
                // })
            })
            .catch((error) => {
                console.log(error, 'catch');
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
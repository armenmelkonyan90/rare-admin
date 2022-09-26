import { ADS_SUCCESS,SET_TOKEN_ADS } from '../Redux/AdsRedux';
import { api } from '../Services/Base';


export function AdsThunk() {
    return async (dispatch, getState) => {
 
        // dispatch({
        //     type: LOADING,
        // })
        api.get('/product/all')
            .then((data) => {   
                console.log(data.data.data,"adsss")       
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
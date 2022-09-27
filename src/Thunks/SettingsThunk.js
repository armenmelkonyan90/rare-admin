import { APP_STATUS,GET_APP_STATUS } from '../Redux/SettingsRedux';
import { api } from '../Services/Base';



export function SettingsThunk(status) {
    return async (dispatch, getState) => {
 
      
        api.patch(`/global/working/status`, {            
            status:status
        })      
            .then((data) => {
                console.log(data,"Thunk");
                    dispatch({
                    type:APP_STATUS,
                    payload:{
                        // success:true,
                        status:data.data,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN,
                // })
            })
            .catch((error) => {
                console.log(error,'errbloked')
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}

export function GetAppStatusThunk(status) {
    return async (dispatch, getState) => {
 
      
        api.get('/global/working/status', {            
            
        })      
            .then((data) => {
                console.log(data,"Thunk");
                    dispatch({
                    type:GET_APP_STATUS,
                    payload:{
                        // success:true,
                        status:data.data.data.status,
                    }
                })
                // dispatch({
                //     type:SET_TOKEN,
                // })
            })
            .catch((error) => {
                console.log(error,'errbloked')
            //    dispatch({
            //         type: ERROR,
            //         payload: {
            //             error: error?.response?.data?.error?.message,
            //         }
            //     });
            })
    }
}
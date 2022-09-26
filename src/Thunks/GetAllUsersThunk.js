import { GETALLUSER_SUCCESS,GETUSERBYID_SUCCESS,SET_TOKEN_USER,USER_STATE } from '../Redux/GetAllUsersRedux';
import { api } from '../Services/Base';


export function GetAllUsersThunk() {
    return async (dispatch, getState) => {
 
        // dispatch({
        //     type: LOADING,
        // })
        api.get('/user/all')
            .then((data) => {
              //  console.log(data.data.data, 'dataaa')
                dispatch({
                    type:GETALLUSER_SUCCESS,
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

export function GetUsersByIdThunk(id) {
    return async (dispatch, getState) => {

        // dispatch({
        //     type: LOADING,
        // })
        api.get(`user/${id}`)
            .then((data) => {
                //  console.log(data.data.data, 'dUSERID')
                dispatch({
                    type:GETUSERBYID_SUCCESS,
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

export function BlockedUser(id,blocked) {
    return async (dispatch, getState) => {
 
      
        api.put(`/user/block/${id}`, {            
            blocked:blocked
        })      
            .then((data) => {
                console.log(data,"BlockedData");
                 dispatch({
                    type:USER_STATE,
                    payload:{
                        // success:true,
                        blocked:data.data,
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
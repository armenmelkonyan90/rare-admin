import { NOTICE_SUCCESS } from '../Redux/NoticeRedux';
import { api } from '../Services/Base';



export function NoticeThunk(title, message) {
    return async (dispatch, getState) => {
 
      
        api.post(`/notification/news`, {            
            title:title,
            message:message
        })      
            .then((data) => {
                console.log(data,"Thunk");
                    dispatch({
                    type:NOTICE_SUCCESS,
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


import { api } from '../Services/Base';
import { ERROR,SUCCESS,LOADING, SET_TOKEN } from '../Redux/LoginRedux';


export function LoginThunk(email, password) {
    return async (dispatch, getState) => {
 
        dispatch({
            type: LOADING,
        })
        api.post('/auth/login/admin', {
            email: email,
            password: password
        })
            .then((data) => {
                 dispatch({
                    type:SUCCESS,
                    payload:{
                        success:true,
                        data:data.data,
                    }
                })
                dispatch({
                    type:SET_TOKEN,
                })
            })
            .catch((error) => {
                console.log(error,'err')
               dispatch({
                    type: ERROR,
                    payload: {
                        error: error?.response?.data?.error?.message,
                    }
                });
            })
    }
}
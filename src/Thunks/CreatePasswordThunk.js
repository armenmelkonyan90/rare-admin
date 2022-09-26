import { CREATE_PASSWORD_SUCCESS, CREATE_PASSWORD_LOADING, CREATE_PASSWORD_ERROR } from '../Redux/CreatePasswordRedux';
import {api} from './../Services/Base';

export function CreatePasswordThunk(code,values) {
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PASSWORD_LOADING
        });
         api.post('auth/create-password', {
            code: code,
            password: values.password
        })
            .then((data) => {
            dispatch({
                type:CREATE_PASSWORD_SUCCESS
            })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_PASSWORD_ERROR,
                    payload: {
                        error: error.response.data.error.message
                    }
                })
            })
    }
}



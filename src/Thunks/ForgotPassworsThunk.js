import { FORGOTE_PASSWORD_SUCCESS, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_ERROR } from '../Redux/ForgotePasswordRedux';
import {api} from '../Services/Base';

export function ForgotPasswordThunk(values) {
    return (dispatch, getState) => {
        dispatch({
            type: FORGOT_PASSWORD_LOADING
        });
        api.post('auth/forgot-password', {
            email: values.email,
        })
            .then((data) => {
                dispatch({
                    type: FORGOTE_PASSWORD_SUCCESS,
                })
            })
            .catch((error) => {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR,
                    payload: {
                        error: error.response.data.error.message
                    }
                })
            })
    }
}
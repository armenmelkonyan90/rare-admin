export const FORGOTE_PASSWORD_SUCCESS = 'forgot_password_success';
export const FORGOT_PASSWORD_LOADING = 'forgot_password_loading';
export const FORGOT_PASSWORD_ERROR = 'forgot_password_error';

const forgotPasswordState = {
    forg_pass_success: false,
    forg_pass_loading: false,
    forg_pass_error: '',
}

export function ForgotPasswordRedux(state = forgotPasswordState, action) {
    if (action.type === FORGOTE_PASSWORD_SUCCESS) {
        return {
            ...state,
            forg_pass_success: true,
            forg_pass_loading: false,
            forg_pass_error: '',
        }
    }
    else if (action.type === FORGOT_PASSWORD_LOADING) {
        return {
            ...state,
            forg_pass_success: false,
            forg_pass_loading: true,
            forg_pass_error: '',
        }
    }
    else if (action.type === FORGOT_PASSWORD_ERROR) {
        return {
            ...state,
            forg_pass_success: false,
            forg_pass_loading: false,
            forg_pass_error: action.payload.error,
        }
    }
    return state;
}

export default ForgotPasswordRedux;
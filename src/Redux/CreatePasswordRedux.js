export const CREATE_PASSWORD_SUCCESS = 'create_password_success';
export const CREATE_PASSWORD_LOADING = 'create_password_loading';
export const CREATE_PASSWORD_ERROR = 'create_password_error';

const createPasswordState = {
    create_pass_success: false,
    create_pass_loading: false,
    create_pass_error: '',
}

export function CreatePasswordRedux(state = createPasswordState, action) {
    if (action.type === CREATE_PASSWORD_SUCCESS) {
        return {
            ...state,
            create_pass_success: true,
            create_pass_loading: false,
            create_pass_error: '',
        }
    }

    else if (action.type === CREATE_PASSWORD_LOADING) { 
        return {
            ...state,
            create_pass_success: false,
            create_pass_loading: true,
            create_pass_error: '',
        }
    }

    else if (action.type === CREATE_PASSWORD_ERROR) {
        return {
            ...state,
            create_pass_success: false,
            create_pass_loading: false,
            create_pass_error: action.payload.error,
        }
    }
    return state;
}

export default CreatePasswordRedux;
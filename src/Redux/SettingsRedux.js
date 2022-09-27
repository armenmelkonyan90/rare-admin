export const APP_STATUS = 'APP_STATUS';
export const GET_APP_STATUS = 'GET_APP_STATUS';



const getAppState = {
     status: false,   
     statusSuccess:false
}

function SettingsRedux(state = getAppState, action) { 

    if (action.type === APP_STATUS) {
        return {
             ...state,
             statusSuccess: true,

        }
    }
    if (action.type === GET_APP_STATUS) {
        console.log(action.payload, "ooooooo");
        return {
             ...state,
            status: action.payload.status,
            statusSuccess:false

        }
    }


    return state;
}



export default SettingsRedux;

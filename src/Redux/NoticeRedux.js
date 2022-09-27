export const NOTICE_SUCCESS = 'NOTICE_SUCCESS';




const getNoticeState = {
     status: false,   
     statusSuccess:false
}

function NoticeRedux(state = getNoticeState, action) { 

    if (action.type === NOTICE_SUCCESS) {
        return {
             ...state,
             statusSuccess: true,

        }
    }
    // if (action.type === GET_APP_STATUS) {
    //     console.log(action.payload, "ooooooo");
    //     return {
    //          ...state,
    //         status: action.payload.status,
    //         statusSuccess:false

    //     }
    // }


    return state;
}



export default NoticeRedux;

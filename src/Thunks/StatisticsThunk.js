import { GET_APP_STATISTICS} from '../Redux/StatisticsRedux';
import { api } from '../Services/Base';



export function StatisticsThunk(from="",to="") {
    return async (dispatch, getState) => {
    let request = "";
    //   console.log(from, "Thunkssss");
      if(from != "" && to !=""){
        request = `statistics/all?dateFrom=${from}&dateTo=${to}`;
      }
      else {
        request = `statistics/all`;
      }
      console.log(request, "Thunkssss");
        api.get(request)      
            .then((data) => {
                // console.log(data.data.data.statistics,"statsticsThunk");
                    dispatch({
                    type:GET_APP_STATISTICS,
                    payload:{
                        success:true,
                        statistics:data.data.data.statistics,
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

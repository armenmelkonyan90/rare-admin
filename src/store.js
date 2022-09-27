import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import LoginRedux from './Redux/LoginRedux';
import ForgotPasswordRedux from './Redux/ForgotePasswordRedux';
import GetAllUsersRedux from "./Redux/GetAllUsersRedux";
import GetAllAdsRedux from "./Redux/AdsRedux";
import SettingsRedux from "./Redux/SettingsRedux";
import GetAllStatisticsRedux from "./Redux/StatisticsRedux";

const rootReducer = combineReducers({
    login: LoginRedux,
    forgotPassword:ForgotPasswordRedux,
    getalluser:GetAllUsersRedux,
    getallads:GetAllAdsRedux,
    getsettings:SettingsRedux,
    getstatistics:GetAllStatisticsRedux,
    
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
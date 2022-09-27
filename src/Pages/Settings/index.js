import { Switch } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAppStatusThunk, SettingsThunk } from '../../Thunks/SettingsThunk';
import styles from './Settings.module.css';

const Settings = () => {
  const appstatussuccess = useSelector((state) => {     
    return state.getsettings.statusSuccess;    
  });
  const getappstatus = useSelector((state) => {   
    return state.getsettings.status;    
  });
  const dispatch = useDispatch();   
   const onChange = (checked) => {      
        dispatch(SettingsThunk(checked));
      };
     useEffect(() => {
       
          dispatch(GetAppStatusThunk());
        
     }, []);
     useEffect(() => {
      if(appstatussuccess){
       
      dispatch(GetAppStatusThunk());
      }
    
 }, [appstatussuccess]);
      
    return(   
     <div className={styles.settings}> 
     <h3>Настройки</h3>
     <span className={styles.state}> Отключения приложения на «технические работы» </span>  
        {<Switch checked={getappstatus} onChange={onChange} />}        
     <span className={styles.state}> Включить приложения  </span>  
    </div>
    );
 };
 
 export default Settings;
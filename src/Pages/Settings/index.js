import { Switch } from 'antd';
import React from 'react';
import styles from './Settings.module.css';

const Settings = () => {
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };
      
    return(   
     <div className={styles.settings}> 
     <h3>Настройки</h3>
     <span className={styles.state}> Отключения приложения на «технические работы» </span>  
     <Switch defaultChecked onChange={onChange} />
     <span className={styles.state}> Включить приложения  </span>  

    </div>
    );
 };
 
 export default Settings;


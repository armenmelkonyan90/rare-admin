import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut } from '../../Redux/LoginRedux';


import styles from './Logout.module.css';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => { 
    return state.login.error;
  });
  const loading = useSelector((state) => {
    return state.login.loading;
  });
  const token = useSelector((state) => {
    return state.login.success;
  })

  return (
   <> 
     <div className={styles.logout} onClick={(() => {
          dispatch(LogOut());
          window.href = '/';
        })}>
          Выйти
        </div>
    </>
  );
};

export default Logout;
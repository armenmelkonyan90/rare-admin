import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUsersByIdThunk } from '../../Thunks/GetAllUsersThunk';
import AdsList from './AdsList';
import styles from './UserInfo.module.css';


const UserInfo = ({id}) => { 
 
  const userbyid = useSelector((state)=>{
   // console.log(state.getalluser.userByID,"userbyid");
    return state.getalluser.userByID;
   
  });

    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(GetUsersByIdThunk(id));
          },[])
 
    return(   
     <> 
       <div className={styles.userinfo}>
       <h3 className={styles.sectiontitle}>Персональные данные</h3> 
       <div className={styles.topsection}>
        <img src = {userbyid.avatar} className={styles.avatar}/>
         <div> 
           <div className={styles.section1}>
              <p>Имя</p> <p>{userbyid.name} {userbyid.surname} </p>
           </div>
           <div className={styles.section1}>
              <p>Эл. адрес</p> <p>{userbyid.email}</p>
           </div>
           <div className={styles.section1}>
              <p>Телефон</p> <p>{userbyid.phone}</p>
           </div>
           <div className={styles.section1}>
              <p>Город</p> <p>{userbyid.city}</p>
           </div>
           
           </div>
         
       </div>
       </div>
       <div className={styles.userinfo}>
       <h3 className={styles.sectiontitle}>Список объявлений</h3> 
 
               <AdsList adslist={userbyid.product} />
    


            

       </div>
     </>
    );
 };
 
 export default UserInfo;
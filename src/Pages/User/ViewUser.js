import { Link, useParams} from "react-router-dom";
import UserInfo from "../../Components/UserInfo";

import styles from './User.module.css';



const ViewUser = () => {
 
  const { id } = useParams();
  
     return(   
      <> 
      <div className={styles.back}><Link to="/all-users"> Назад</Link></div>
        
        <h2>Просмотр информации о пользователе</h2>  
       
          <UserInfo id = {id}/>
        
      </>
     );
  };
  
  export default ViewUser;
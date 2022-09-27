import { Link, useParams} from "react-router-dom";
import AdsInfo from "../../Components/AdsInfo";
import styles from './Ads.module.css';


const ViewUser = () => {
 
  const { id } = useParams();
  
     return(   
      <> 
      <div className={styles.back}><Link to="/ads"> Назад</Link></div>
        
        <h2>Редактирование объявления {id}</h2>  
       
          <AdsInfo id = {id}/>
        
      </>
     );
  };
  
  export default ViewUser;
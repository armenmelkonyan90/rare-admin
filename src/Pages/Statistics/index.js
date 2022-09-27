import { DatePicker, Space } from 'antd';
import {
   UserOutlined,
   UserAddOutlined,
   PieChartFilled,
   PushpinFilled,
   CloseOutlined,
   PlusOutlined,
   MessageFilled
 } from '@ant-design/icons';
import moment from 'moment';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatisticsThunk } from "../../Thunks/StatisticsThunk";
import styles from './Statistics.module.css';
const Statistics = () => {
   const current = new Date();
   console.log(current.getMonth(), "DADAD");
   const today_from = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}  00:00:00`;
   const today_to = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}  23:59:59`;

   const yesterday_from =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()-1} 00:00:00`; 
   const yesterday_to =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()} 23:59:59`; 
  

   const last7days_from =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()-7} 00:00:00`; 
   const last7days_to =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()} 23:59:59`; 
  
   const last30days_from =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()-30} 00:00:00`; 
   const last30days_to =`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()} 23:59:59`; 

   const thismonth_from =`${current.getFullYear()}-${current.getMonth()+1}-1 00:00:00`; 
   const thismonth_to =`${current.getFullYear()}-${current.getMonth()+1}-30 23:59:59`; 

console.log(((current.getDate()-20)));
   const lastmonth_from =`${current.getFullYear()}-0${current.getMonth()}-01 00:00:00`; 
   const lastmonth_to =`${current.getFullYear()}-0${current.getMonth()}-30 23:59:59`;

   const alltime_from = ""; 
   const alltime_to = "";

      const filters = [
         {name:"Сегодня",from:today_from,to:today_to},
         {name:"Вчера",from:yesterday_from,to:yesterday_to},
         {name:"Последние 7 дней",from:last7days_from,to:last7days_to},
         {name:"Последние 30 дней",from:last30days_from,to:last30days_to},
         {name:"Этот месяц",from:thismonth_from,to:thismonth_to},
         {name:"Прошлый месяц",from:lastmonth_from,to:lastmonth_to},
         {name:"За все время",from:alltime_from,to:alltime_to}
];


    const dispatch = useDispatch();
    const { RangePicker } = DatePicker;

    const appstatussuccess = useSelector((state) => {   
        console.log(state.getstatistics.statistics,"Statistics");  
        return state.getstatistics.statistics;    
      });
       
      
      useEffect(()=>{
        dispatch(StatisticsThunk());
      },[])

      const onChange = (dates, dateStrings) => {
        if (dates) {
         //  console.log('From1: ', dates[0], ', to1: ', dates[1]);
         dispatch(StatisticsThunk(dateStrings[0],dateStrings[1]));
          console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        } else {
          console.log('Clear');
        }
      };
      const onFiltersChange = (from, to) => {
           dispatch(StatisticsThunk(from,to));
         
       
       };

    return(   
     <> 
     <h2 className={styles.left}>App | Description</h2>
     <h3 className={styles.left}>Статистика</h3>       
     <p className={styles.left}>Период отображения статистики</p> 
     <Space direction="vertical" size={12} className={styles.left}>

    <RangePicker 
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      onChange={onChange}
    />
  </Space>  
  <div className={`${styles.left} ${styles.statistcefilter}`} > 
   {filters.map((item,i)=>{
       return (
         <span key = {i} onClick={()=>{
            onFiltersChange(item.from,item.to);
         }}>{item.name}</span>
       )
   }
   )}

  </div>

  <div className={styles.statisticSection}>
    <div className={styles.allUser}>
       <p className={styles.text}>{appstatussuccess.users}</p>
       <p className={styles.text}>Все пользователи</p>
       <div className={styles.statistic_icon}>  <UserOutlined /></div>
         
       </div>
    <div className={styles.useronline}>
       <p className={styles.text}>6725</p>
       <p className={styles.text}>Пользователей онлайн</p> 
       <div className={styles.statistic_icon}>  <UserOutlined /></div>   
    </div>
    <div className={styles.newusercount}>
       <p className={styles.text}>6725</p>
       <p className={styles.text}>Количество новых пользователей</p>
       <div className={styles.statistic_icon}>  <UserAddOutlined /> </div>   
    </div>
    <div className={styles.mobile}>
       <p className={styles.text}>6725</p>
       <p className={styles.text}>Количество запусков (iOS/ Android)</p> 
       <div className={styles.statistic_icon}>  <PieChartFilled />  </div>   
    </div>
    <div className={styles.allads}>
       <p className={styles.text}>{appstatussuccess.products}</p>
       <p className={styles.text}>Всего объявлений</p>
       <div className={styles.statistic_icon}>   <PushpinFilled /> </div>     
    </div>
    <div className={styles.closedads}>
       <p className={styles.text}>{appstatussuccess.closedProducts}</p>
       <p className={styles.text}>Закрытых объявлений</p>   
       <div className={styles.statistic_icon}>  <CloseOutlined />   </div>
    </div>
    <div className={styles.archiveads}>
       <p className={styles.text}>{appstatussuccess.archivedProducts}</p>
       <p className={styles.text}>Архивированных объявлений</p> 
       <div className={styles.statistic_icon}>  <PieChartFilled />  </div>  
    </div>
    <div className={styles.adscount}>
       <p className={styles.text}>{appstatussuccess.newProducts}</p>
       <p className={styles.text}>Количество созданных объявлений</p> 
       <div className={styles.statistic_icon}>  <PlusOutlined />  </div>    
        
    </div>
    <div className={styles.newdialogs}>
       <p className={styles.text}>{appstatussuccess.dialogs}</p>
       <p className={styles.text}>Новые диалоги</p>  
       <div className={styles.statistic_icon}>  <MessageFilled />  </div>     
       
    </div>
    </div>
    </>
    );
 };
 
 export default Statistics;
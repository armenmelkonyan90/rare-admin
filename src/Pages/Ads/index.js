import { DatePicker, Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdsThunk, DeleteProductThunk } from '../../Thunks/AdsThunk';
import moment from 'moment';
import styles from './Ads.module.css';

const Ads = () => { 
  const current = new Date();
  const { RangePicker } = DatePicker;
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


  const lastmonth_from =`${current.getFullYear()}-0${current.getMonth()}-1 00:00:00`; 
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

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      },
      {
        title: 'User ID',
        dataIndex: 'userId',
        key: 'userId',
       
        },     
      {
        title: 'Отдел',
        dataIndex: 'genderId',
        key: 'genderId',       
        render: (_,record) =>( <p>{record.genderId?.name}</p>)
       
        },
        {
          title: 'Категория и подкатегория',
          dataIndex: 'catgorysubcategory',
          key: 'catgorysubcategory',
          render: (_,record) =>( <p>{record.categoryId?.name} / {record.subcategoryId?.name}</p>)
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
          title: 'Название товара',
          dataIndex: 'model',
          key: 'model',
        },
        {
          title: 'Размер',
          dataIndex: 'size',
          key: 'size',
          render: (_,record) =>( <p>{record.sizeId?.type}  {record.sizeId?.value}</p>)
        },
        {
          title: 'Состояние',
          dataIndex: 'conditionId',
          key: 'conditionId',
          render: (_,record) =>( <p>{record.conditionId?.name}</p>)
        },
        {
          title: 'Цена',
          dataIndex: 'price',
          key: 'price',
          
        },
        {
          title: 'Город',
          dataIndex: 'city',
          key: 'city',  
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          render: (_, record) => {
            return <div style={{cursor:"pointer"}} onClick={()=>{console.log("see")} }>Смотреть</div>
          }
        },
          {
            title: 'Опции',
            dataIndex: 'options',
            key: 'options',  
          },
          {
            title: 'Фото',
            dataIndex: 'photo',
            key: 'photo', 
            render: (_, record) => {
              return <div style={{cursor:"pointer"}} onClick={()=>{console.log("see")} }>Открыть</div>
            } 
          }, 
          {
            title:'CreatedAt',
            key:'createdAt',
            dataIndex:'createdAt',
          },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
        <a onClick={(() => {
                   const { id } = record;
                   navigate(`/edit-ads/${id}`);
                  })}>Edit</a>
        <a onClick={(()=>{           
            const { id } = record;
            dispatch(DeleteProductThunk(id));
          
          })}>       
           Delete</a>
        </Space>
      ),
    },
  ];
  const {state} = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();   

  const ads = useSelector((state) => { 
    return state.getallads.ads;
  });
 
  useEffect(()=>{
    if (state) {
        dispatch(AdsThunk(state));
    }
   },[state])

     useEffect(()=>{
          dispatch(AdsThunk(state));
     },[])


     const onChange = (dates, dateStrings) => {
      if (dates) {
       //  console.log('From1: ', dates[0], ', to1: ', dates[1]);
      // dispatch(StatisticsThunk(dateStrings[0],dateStrings[1]));
        console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      } else {
        console.log('Clear');
      }
    };
    const onFiltersChange = (from, to) => {
        // dispatch(StatisticsThunk(from,to));
       
     
     };


   return(   
    <div className='top'> 
    <h3>Объявления</h3> 

    <p className={styles.left}>Период отображения объявлений</p> 
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
  <div className={`${styles.left} ${styles.adsfilter}`} > 
   {filters.map((item,i)=>{
       return (
         <span key = {i} onClick={()=>{
            onFiltersChange(item.from,item.to);
         }}>{item.name}</span>
       )
   }
   )}

  </div>
   {ads.length ? <Table columns={columns} dataSource={ads} rowKey="id"/> : <p>No Details</p>}  
  </div>
   );
};

export default Ads;
import { Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdsThunk } from '../../Thunks/AdsThunk';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'City',
    key: 'city',
    dataIndex: 'city',  
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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Ads = () => {

  const ads = useSelector((state) => { 
    return state.getallads.ads;
  });
  const dispatch =useDispatch();   
     useEffect(()=>{
          dispatch(AdsThunk());
     },[])
   return(   
    <div className='top'> 
    <h3>Объявления</h3>          
    {ads.length ? <Table columns={columns} dataSource={ads} rowKey="id"/> : <p>No Details</p>}  
  </div>
   );
};

export default Ads;
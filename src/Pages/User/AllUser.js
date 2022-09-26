import { Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_STATE } from '../../Redux/GetAllUsersRedux';
import { BlockedUser, GetAllUsersThunk } from '../../Thunks/GetAllUsersThunk';




const AllUser = () => {

  const [blocked, setBlocked] = useState(false);
  const [clickedId, setClickedId] = useState(null);

  const navigate = useNavigate();
  const users = useSelector((state) => { 
  
    return state.getalluser.users;
  });
  const blockedred = useSelector((state) => {   
    return state.getalluser.users.blocked;
  });
  const dispatch =useDispatch();   
     useEffect(()=>{
          dispatch(GetAllUsersThunk());
     },[])
    
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
},
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
},
{
    title: 'Эл. адрес',
    dataIndex: 'email',
    key: 'email',
},
{
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
},
{
  title: 'Количество объявлений',
  dataIndex: 'productsCount',
  key: 'productsCount',
},
{
  title: 'Создано на',
  dataIndex: 'createdAt',
  key: 'createdAt',
},
{
  title: 'Blocked',
  dataIndex: 'blocked',
  key: 'blocked',
},
  {
    title: 'Действие',
    key: 'action',
    render: (_, record) => {
     
      return (
       
      <Space size="middle">
        <a onClick={(() => {
                 const { id } = record;
                 navigate(`/view-user/${id}`);
                })}>View</a>
        <a onClick={(()=>{
          // console.log(record.id);
          const { id } = record;
          setClickedId(id);
          setBlocked(!blocked);
          dispatch(BlockedUser(record.id, !blocked));
        })}>
       
          {(blocked && clickedId === record.id) || record.blocked  ? "Enabled" : "Disabled"}</a>
      </Space>
      )
     }
  
  },
];
  

   return(   
    <div className='top'> 
      <h3>Пользователи</h3>  
   {users.length ? <Table columns={columns} dataSource={users} rowKey="id" id="id"/> : <p>No Details</p>}        
      
  </div>
   );
};

export default AllUser;
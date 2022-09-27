import { Popconfirm, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BlockedUser, GetAllUsersThunk } from '../../Thunks/GetAllUsersThunk';
import { EditOutlined, StopOutlined } from '@ant-design/icons';



const AllUser = () => {

 const {state} = useLocation();
 

  const navigate = useNavigate();
  const users = useSelector((state) => { 
  console.log(state.getalluser.users, "usersss");
    return state.getalluser.users;
  });

  const blockedSuccess = useSelector((state) => {   
    return state.getalluser.users.blockedSuccess;
  });
  const dispatch = useDispatch();   
     useEffect(()=>{
      if (state) {
          dispatch(GetAllUsersThunk(state));
      }
     },[state])

     useEffect(() => {
        if (blockedSuccess) {
          dispatch(GetAllUsersThunk(state));
        }
     }, [blockedSuccess]);
    
     function confirm(id,blocked) {
      dispatch(BlockedUser(id,blocked));
  }

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
},
{
  title: 'Дата регистрации',
  dataIndex: 'createdAt',
  key: 'createdAt',
},
{
  title: 'Объявления',
  dataIndex: 'email',
  key: 'email',
},
{
  title: 'Объявления / Количество объявлений',
  dataIndex: 'productsCount',
  key: 'productsCount',
},
{
  title: 'Отзывы / рейтинг',
  dataIndex: 'review',
  key: 'review',
  render: (_, record) => {
    return <div style={{cursor:"pointer"}} onClick={()=>{console.log("see")} }>Смотреть</div>
  }
},
{
  title: 'VK ID',
  dataIndex: 'vkid',
  key: 'vkid',
},
{
  title: 'Телефон',
  dataIndex: 'phone',
  key: 'phone',
},

{
  title: 'Комментарий',
  dataIndex: 'comments',
  key: 'comments',
  render: (_, record) => {
    return (
      <Popconfirm
      title={<div>Новый комметарий <div><textarea> Текст нового комментария </textarea></div></div>}
      onConfirm={() => confirm(record.id, !record.blocked)}
      okText={"Добавить"}
      cancelText="Отменить">
                 <span style={{cursor:"pointer"}}>{"add"}</span>
              </Popconfirm>
    )
  }
},
  {
    title: 'Действия',
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
          // setClickedId(id);
          // setBlocked(!blocked);
          // dispatch(BlockedUser(record.id, !record.blocked));
        })}>       
           <Popconfirm
                title={<div> Вы уверены, что хотите заблокироватьпользователя ${record.id} <div><p>Срок (дней)</p><input type="text"/><input type="submit"/></div> </div>}
                onConfirm={() => confirm(record.id, !record.blocked)}
                okText={record.blocked ? "Заблокировать" : "Разблокировать"}
                cancelText="Отменить">
                           {record.blocked  ? "Enabled" : <a> <StopOutlined /></a>}
                        </Popconfirm>
              </a>
      </Space>
      )
     }
  
  },
];
  

   return(   
    <div className='top'> 
      <h3>Все пользователи</h3>  
   {users.length ? <Table columns={columns} dataSource={users} rowKey="id" id="id"/> : <p>No Details</p>}        
      
  </div>
   );
};

export default AllUser;
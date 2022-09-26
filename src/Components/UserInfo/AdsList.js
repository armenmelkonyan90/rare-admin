import { Table } from "antd";



const AdsList = ({adslist}) => { 

      
      const columns = [
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
          title: 'Model',
          dataIndex: 'model',
          key: 'model',
        },
        {
          title: 'City',
          dataIndex: 'city',
          key: 'city',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Options',
            dataIndex: 'options',
            key: 'options',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
          },
          {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
          },
      ];
      
     

     return(   
     <> 
     {/* <div> {adslist.brand}</div>
     <div> {adslist.city}</div>
     <div> {adslist.description}</div>
     <div> {adslist.model}</div>
     <div>{adslist.options}</div>
     <div> {adslist.price}</div> 
     <div> {adslist.views}</div>
     <div> {adslist.createdAt}</div> */}
      
     <Table  dataSource={adslist} columns={columns} rowKey="id" id="id"/>;



      
     </>
    );
 };
 
 export default AdsList;
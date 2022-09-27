import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAdsByIdThunk,GetGenderThunk,GetCategoryThunk,GetSubCategoryThunk, ProductActivationThunk, DeletePhotosThunk, UpdateAdsThunk } from '../../Thunks/AdsThunk';
import styles from './AdsInfo.module.css';
import { Select,Input,Button, Form } from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';

const AdsInfo = ({id}) => { 
   const { Option } = Select;
   const { TextArea } = Input;
   const navigate = useNavigate();
   // const {id} = useParams();
   const adsbyid = useSelector((state)=>{     
      // console.log(state.getallads?.adsByID); 
    return state.getallads?.adsByID; 
  });

  const [ads, setAds]  = useState({});


  const gendersstate = useSelector((state)=>{ 
      return state.getallads?.gender;})
      
      console.log(gendersstate,'GENDER')
 const categorystate = useSelector((state)=>{
    return state.getallads?.category;});

 const subcategorystate = useSelector((state)=>{     
      return state.getallads?.subcategory;});



  const productsPhotos = adsbyid?.productPhotos;
 
  const handleChange = (value) => {
 
   // console.log(`selected ${value}`);
 };
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(GetAdsByIdThunk(id));
    },[])
      useEffect(()=>{
           dispatch(GetGenderThunk());
           dispatch(GetCategoryThunk());
         //   dispatch(GetSubCategoryThunk(adsbyid?.categoryId?.id));
      },[]);

      useEffect(() => {
         if (adsbyid?.categoryId?.id) {
            dispatch(GetSubCategoryThunk(adsbyid?.categoryId?.id));
         }
      }, [adsbyid?.categoryId?.id]);

      const onFinish = (values) => {
       
         values={ id:id,...values}
         // console.log(values,"values");
         dispatch(UpdateAdsThunk(values))
       };
 
       const [form] = Form.useForm();
       const [initialValuess, setInitialValuess] = useState({
         gender:adsbyid?.genderId?.name,
         category:adsbyid?.categoryId?.name,
         subcategory:adsbyid?.subCategoryId?.name,
         brand:adsbyid?.brand,
         model:adsbyid?.model,
         size:adsbyid?.sizeId?.name,
         status:adsbyid?.status,
         price:adsbyid?.price,
         city:adsbyid?.city,
         optons:adsbyid?.options,
         description:adsbyid?.description,
         condition:adsbyid?.conditionId?.name
       });
    
    useEffect(() => {
      form.setFieldsValue({
         gender:adsbyid?.genderId?.name,
         category:adsbyid?.categoryId?.name,
         subcategory:adsbyid?.subCategoryId?.name,
         brand:adsbyid?.brand,
         model:adsbyid?.model,
         size:adsbyid?.sizeId?.name,
         status:adsbyid?.status,
         price:adsbyid?.price,
         city:adsbyid?.city,
         optons:adsbyid?.options,
         description:adsbyid?.description,
         condition:adsbyid?.conditionId?.name
      })
    }, [adsbyid]);

    return(   
     <>
      <Form  form={form} name="updateAds"  layout="vertical" onFinish={onFinish} initialValues={initialValuess}>
     <div className={styles.adsinfo}>    
     
         <div className= {styles.left}>
         <div  className= {styles.leftchild}>
         <Form.Item
          name="gender"
          label="Отдел"
          className={styles.label}>         
         <Select
         value={adsbyid?.genderId?.name}    
         style={{
            width: 300,
            
         }}
         onChange={handleChange}
         >
             {
               gendersstate && gendersstate.length !== 0 ? 
               gendersstate.map((item)=>(<Option value={item.name} key= {item.id}>{item.name}</Option>))
               :null
             }
         </Select>
         </Form.Item>
         </div>
         <div  className= {styles.leftchild}>
         <Form.Item
            name="category"
            label="Категория">
           
         <Select
         value={adsbyid?.categoryId?.name}  
         style={{
            width: 300,
            
         }}
         onChange={handleChange}
         >
             {
               categorystate && categorystate.length !== 0 ? 
               categorystate.map((item)=>(<Option value={item.name} key= {item.id}>{item.name}</Option>))
               :null
             }          
         </Select>
         </Form.Item>
         </div>
         <div  className= {styles.leftchild}>
         <Form.Item
            name="subcategory"
            label="Подкатегория">          
         <Select
         value={adsbyid?.subCategoryId?.name}     
         style={{
            width: 300,
            
         }}
         onChange={handleChange}
         >
             {
               subcategorystate && subcategorystate.length !== 0 ? 
               subcategorystate.map((item)=>(<Option value={item.name} key= {item.id}>{item.name}</Option>))
               :null
             }
         </Select>
         </Form.Item>
         </div>
         <div  className= {styles.leftchild}>
         <Form.Item
            name="brand"
            label="Бренд">
           
         <Input type="text"  onChange={handleChange}/>
         </Form.Item>
         </div>
         <div  className= {styles.leftchild}>
            <Form.Item
            name="model"
            label="Название">       
         <Input placeholder="Basic usage" value={adsbyid?.model}/>
         </Form.Item>
         </div>
      </div>


      <div className= {styles.middle}>  
        <div  className= {styles.middlechild}>
        <Form.Item
         name="size"
         label="Размер">            
            <Input />
            </Form.Item>
         </div>

         <div  className= {styles.middlechild}>
         <Form.Item
            name="status"
            label="Состояние">         
          <Input value={adsbyid?.status}/>
          </Form.Item>
         </div>
         <div  className= {styles.middlechild}>
               <Form.Item
            name="price"
            label="Цена">
         <Input  value={adsbyid?.price}/>
         </Form.Item>
         </div>
         <div  className= {styles.middlechild}>
               <Form.Item
            name="city"
            label="Город">               
            <Input  value={adsbyid?.city}/>
            </Form.Item>
         </div>
         <div className= {styles.middlechild}>  
               <Form.Item
            name="option"
            label="Опции"> 
            <Input  value={adsbyid?.options}/>
            </Form.Item>  
            </div> 
                     </div>
     


      <div className= {styles.right}>
         <div  className= {styles.rightchild}>
            <Form.Item
            name="description"
            label="Описание">            
            <TextArea rows={12} cols={18} value={adsbyid?.description}/>
            </Form.Item>
         </div>
         <div  className= {styles.middlechild}>
         <Form.Item
        name="condition"
        label="Condition">            
            <Input />
            </Form.Item>
         </div>
      </div>
 
   </div>
 
    
   <div className={styles.images}>
     
      {productsPhotos?.map((item)=>{ 
         return (item.url ? <div key={item.id}><img src={item.url} alt="Rare" className={styles.img}/><DeleteOutlined className={styles.deleteicon} onClick ={()=>{dispatch(DeletePhotosThunk(item.id))}}/> </div> :null
                 
            )
      })}
              

    </div>
    <div className={styles.buttons}>
      <Button htmlType="submit" className={styles.save}>Сохранить</Button>
      <Button className={styles.publish} htmlType="button" onClick={()=>{
         dispatch(ProductActivationThunk(id,{status:"accepted"}));
         navigate('/new-ads');
      }}>Опубликовать</Button>
      <Button className={styles.reject} htmlType="button" onClick={()=>{
         dispatch(ProductActivationThunk(id,{status:"rejected"}));
         navigate('/new-ads');
      }}>Отклонить</Button>
      <Button className={styles.cancel} htmlType="button" onClick={()=>{
            navigate('/new-ads');
      }}>Отменить</Button>
    </div>
    </Form>
     
    </>
    );
 };
 
 export default AdsInfo;
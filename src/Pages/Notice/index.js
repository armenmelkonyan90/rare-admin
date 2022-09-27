import { Button, DatePicker, Form, Input, InputNumber, TimePicker } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NoticeThunk } from '../../Thunks/NoticeThunk';
import styles from './Notice.module.css';
const Notice = () => {
  const dispatch =useDispatch();

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 8,
        },
      };
      /* eslint-disable no-template-curly-in-string */
      const validateMessages = {
        required: '${label} is required!',  
      
      };
      /* eslint-enable no-template-curly-in-string */
      const onFinish = (values) => {
        dispatch(NoticeThunk(values.title,values.message));
        console.log(values);
        
      };

    return(   
     <div className={styles.notice}> 
     <h3>Добавить уведомление</h3>  
     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
         <Form.Item
        name={['title']}
        label="Заголовок"
        rules={[
            {
              required: true,
            },
          ]}
          
      >
        <Input/>
      </Form.Item>
     
      <Form.Item name={['message']} label="Текст">
        <Input.TextArea rows={6}/>
      </Form.Item>
      <Form.Item
        name="url"
        label="Ссылка"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
            warningOnly: true,
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Дата рассылки">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Время рассылки (МСК)">
      <TimePicker onChange={(value) => console.log(value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">Отправить</Button>
      </Form.Item>
    </Form>

    </div>
    );
 };
 
 export default Notice;












import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import styles from './Notice.module.css';
const Notice = () => {

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
        console.log(values);
      };

    return(   
     <div className={styles.notice}> 
     <h3>Уведомления</h3>  
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
     
      <Form.Item name={['message']} label="Напишите Уведомления">
        <Input.TextArea rows={6}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">Отправлять</Button>
      </Form.Item>
    </Form>

    </div>
    );
 };
 
 export default Notice;












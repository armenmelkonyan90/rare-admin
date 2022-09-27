import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginThunk } from '../../Thunks/LoginThunk'


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => { 
    return state.login.error;
  });
  const loading = useSelector((state) => {
    return state.login.loading;
  });
  const token = useSelector((state) => {
    return state.login.success;
  })

  // useEffect(() => {
  //   if (token) {
  //     navigate('/dashboard');
  //   }
  // }, [token])


  const onFinish = (values) => {   
    dispatch(LoginThunk(values.username, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  
  };

  return (
   <> <h1> RARE Admin Panel</h1>
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 5,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 5,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Login;
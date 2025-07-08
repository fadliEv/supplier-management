import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const SupplierForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    alert('New supplier added!');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="supplier"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Supplier Name"
        name="name"
        rules={[{ required: true, message: 'Please input the supplier name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Supplier Code"
        name="code"
        rules={[{ required: true, message: 'Please input the supplier code!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Location"
        name="location"
        rules={[{ required: true, message: 'Please input the location!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Person"
        name="contactPerson"
        rules={[{ required: true, message: 'Please input the contact person!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SupplierForm;
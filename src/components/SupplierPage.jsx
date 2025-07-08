import React from 'react';
import { Layout, Breadcrumb, Typography } from 'antd';
import SupplierForm from './SupplierForm';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const SupplierPage = () => {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Supplier</Breadcrumb.Item>
        <Breadcrumb.Item>Add New</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Title level={2}>Add New Supplier</Title>
        <Paragraph>Fill the form below to add a new supplier</Paragraph>
        <SupplierForm />
      </div>
    </Content>
  );
};

export default SupplierPage;
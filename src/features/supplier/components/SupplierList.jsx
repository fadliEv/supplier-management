import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SupplierStats from './SupplierStats';
import SupplierToolbar from './SupplierToolbar';
import SupplierTable from './SupplierTable';
import { suppliers } from '../data/supplier';
import '../styles/SupplierList.css';

const { Content } = Layout;
const { Title } = Typography;

const SupplierList = () => {
  return (
    <Content className="supplier-list-container">
      <div className="page-header">
        <Title level={4}>Supplier List</Title>
        <Link to="/add-supplier">
          <Button type="primary" icon={<PlusOutlined />}>New Supplier</Button>
        </Link>
      </div>

      <SupplierStats />
      <SupplierToolbar />
      <SupplierTable data={suppliers} />
    </Content>
  );
};

export default SupplierList;
import React, { useState } from 'react';
import { Layout, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import SupplierStats from './SupplierStats';
import SupplierToolbar from './SupplierToolbar';
import SupplierTable from './SupplierTable';
import { suppliers } from '../data/supplier';
import '../styles/SupplierList.css';
import AddNewSupplier from './AddNewSupplier';

const { Content } = Layout;
const { Title } = Typography;

const SupplierList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Content className="supplier-list-container">
      <div className="page-header">
        <Title level={4}>Supplier List</Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          New Supplier
        </Button>
      </div>

      <SupplierStats />
      <SupplierToolbar />
      <SupplierTable data={suppliers} />

      {/* Modal for adding new supplier */}
      <AddNewSupplier visible={isModalVisible} onClose={handleCancel} />
    </Content>
  );
};

export default SupplierList;

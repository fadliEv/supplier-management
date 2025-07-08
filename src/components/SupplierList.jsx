import React from 'react';
import { Layout, Typography, Button, Row, Col, Input, Select, Space } from 'antd';
import { PlusOutlined, UsergroupAddOutlined, RiseOutlined, FieldTimeOutlined, ExportOutlined, AppstoreOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import StatCard from './StatCard';
import SupplierTable from './SupplierTable';
import { suppliers } from '../dummies/supplier';
import './SupplierList.css';

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const SupplierList = () => {
  return (
    <Content className="supplier-list-container">
      <div className="page-header">
        <Title level={4}>Supplier List</Title>
        <Link to="/add-supplier">
          <Button type="primary" icon={<PlusOutlined />}>New Supplier</Button>
        </Link>
      </div>

      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Total Supplier"
            value="1,869"
            icon={<UsergroupAddOutlined />}
            trend="up"
            trendValue="+8%"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="New Supplier"
            value="27"
            icon={<UsergroupAddOutlined style={{ transform: 'scaleX(-1)' }} />}
            trend="up"
            trendValue="+1%"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Avg Cost per Supplier"
            value="Rp 320,3 Mn"
            icon={<RiseOutlined />}
            trend="down"
            trendValue="-1%"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <StatCard
            title="Blocked Supplier"
            value="31"
            icon={<FieldTimeOutlined />}
            trend="down"
            trendValue="-4%"
          />
        </Col>
      </Row>

      <div className="toolbar">
        <Row justify="space-between">
          <Col>
            <Space>
              <Search placeholder="Search Customer" style={{ width: 200 }} />
              <Select defaultValue="Active" style={{ width: 120 }}>
                <Option value="Active">Active</Option>
                <Option value="InProgress">In Progress</Option>
                <Option value="Blocked">Blocked</Option>
              </Select>
            </Space>
          </Col>
          <Col>
            <Space>
              <Button icon={<ExportOutlined />}>Export</Button>
              <Button icon={<AppstoreOutlined />} />
              <Button icon={<MenuOutlined />} />
            </Space>
          </Col>
        </Row>
      </div>

      <SupplierTable data={suppliers} />
    </Content>
  );
};

export default SupplierList;

import React from 'react';
import { Row, Col, Input, Select, Space, Button } from 'antd';
import { ExportOutlined, AppstoreOutlined, MenuOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const SupplierToolbar = () => {
  return (
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
  );
};

export default SupplierToolbar;
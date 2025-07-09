import React, { useState } from 'react';
import { Table, Typography, Space } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import '../styles/SupplierList.css';

const { Text } = Typography;

const SupplierTable = ({ data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <div className="supplier-name-cell">
          <PictureOutlined />
          <div className="supplier-name-details">
            <Text className="name">{name}</Text>
            <div>
              <Text type="secondary">{record.code}</Text>
              <Text type="secondary" style={{ marginLeft: 8 }}>{`410000${record.id+11}`}</Text>
              <Text type="secondary" style={{ marginLeft: 8 }}>[{record.name.split(' ')[1]}]</Text>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Address',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Contact',
      dataIndex: 'contactPerson',
      key: 'contactPerson',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className="supplier-table">
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default SupplierTable;
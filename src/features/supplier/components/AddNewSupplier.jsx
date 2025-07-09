import React, { useState } from 'react';
import { Modal, Form, Input, Button, Row, Col, Radio, Table, Checkbox, Tabs, Space, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';

const { TabPane } = Tabs;

const AddNewSupplier = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('address');
  const [logoFile, setLogoFile] = useState(null);

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        // Logic to save supplier data
        onClose();
      })
      .catch((errorInfo) => {
        console.log('Failed:', errorInfo);
      });
  };

  const handleLogoChange = (info) => {
    if (info.file.status === 'done') {
      setLogoFile(info.file.originFileObj);
    }
  };

  const addressData = [
    {
      key: '1',
      name: 'Head Office',
      address: 'Fatmawati Raya St, 123',
      isMain: true,
    },
    {
      key: '2',
      name: 'Branch Office',
      address: 'Ciawi, 99',
      isMain: false,
    },
  ];

  const contactsData = [
    {
      key: '1',
      name: 'Albert',
      jobPosition: 'CEO',
      email: 'einstein@gmail.com',
      phone: '021.123456',
      mobile: '0811234567',
      isMain: true,
    },
    {
      key: '2',
      name: 'Isaac',
      jobPosition: 'Mgr Proc',
      email: 'newton@gmail.com',
      phone: '021.654321',
      mobile: '0811765432',
      isMain: false,
    },
  ];

  const groupsData = [
    {
      key: '1',
      groupName: 'Industry',
      value: 'Manufacture',
      isActive: true,
    },
    {
      key: '2',
      groupName: 'Telkom Group',
      value: 'Non Telkom Group',
      isActive: true,
    },
  ];

  return (
    <Modal
      title="New Supplier"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save
        </Button>,
      ]}
      width={800}
      centered
    >
      <Row gutter={16} justify="center" align="middle">
        {/* Left Column for Logo */}
        <Col span={6} style={{ textAlign: 'center' }}>
          <Upload
            listType="picture-card"
            showUploadList={false}
            onChange={handleLogoChange}
            style={{ marginBottom: 16 }}
          >
            {logoFile ? (
              <img src={URL.createObjectURL(logoFile)} alt="logo" style={{ width: '100%' }} />
            ) : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Upload Logo</div>
              </div>
            )}
          </Upload>
        </Col>
        {/* Right Column for Supplier Name and Nickname */}
        <Col span={18}>
          <Form form={form} layout="vertical" initialValues={{ remember: true }} style={{ marginBottom: 24 }}>
            <Form.Item label="Supplier Name" name="supplierName" rules={[{ required: true, message: 'Please input the supplier name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Nick Name" name="nickName" rules={[{ required: true, message: 'Please input the nick name!' }]}>
              <Input />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      {/* Tabs section below the form fields */}
      <Tabs activeKey={activeTab} onChange={setActiveTab} style={{ marginTop: 16, paddingLeft: 20 }}>
        <TabPane tab="Address" key="address">
          <Table dataSource={addressData} pagination={false}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column title="Main" dataIndex="isMain" key="isMain" render={(isMain) => <Radio checked={isMain} />} />
          </Table>
        </TabPane>

        <TabPane tab="Contacts" key="contacts">
          <Table dataSource={contactsData} pagination={false}>
            <Column title="Name" dataIndex="name" key="name" />
            <Column title="Job Position" dataIndex="jobPosition" key="jobPosition" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="Mobile" dataIndex="mobile" key="mobile" />
            <Column title="Main" dataIndex="isMain" key="isMain" render={(isMain) => <Radio checked={isMain} />} />
          </Table>
        </TabPane>

        <TabPane tab="Groups" key="groups">
          <Table dataSource={groupsData} pagination={false}>
            <Column title="Group Name" dataIndex="groupName" key="groupName" />
            <Column title="Value" dataIndex="value" key="value" />
            <Column
              title="Active"
              dataIndex="isActive"
              key="isActive"
              render={(isActive) => <Checkbox checked={isActive} />}
            />
          </Table>
        </TabPane>

        <TabPane tab="Others" key="others">
          <Form layout="vertical">
            <Form.Item label="Additional Notes" name="notes">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default AddNewSupplier;

import React from 'react';
import { Row, Col } from 'antd';
import StatCard from './StatCard';
import { UsergroupAddOutlined, RiseOutlined, FieldTimeOutlined } from '@ant-design/icons';

const SupplierStats = () => {
  return (
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
  );
};

export default SupplierStats;
import React from 'react';
import { Card, Space, Typography } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const StatCard = ({ title, value, icon, trend, trendValue }) => {
  const TrendIcon = trend === 'up' ? ArrowUpOutlined : ArrowDownOutlined;
  const trendColor = trend === 'up' ? '#52c41a' : '#f5222d';

  return (
    <Card className="stat-card">
      <div className="stat-card-content">
        <div className="stat-card-main">
          <div className="stat-card-title">{title}</div>
          <div className="stat-card-value">{value}</div>
          <Space className="stat-card-footer">
            <TrendIcon style={{ color: trendColor }} />
            <Text style={{ color: trendColor }}>{trendValue}</Text>
            <Text>vs Last Year</Text>
          </Space>
        </div>
        <div className="stat-card-icon">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
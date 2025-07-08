import { Layout, Menu, Avatar, Dropdown, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { CompassOutlined, UserOutlined, UsergroupAddOutlined, AppstoreOutlined, QuestionCircleOutlined, ExportOutlined } from '@ant-design/icons';
import './Sidebar.css';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  const location = useLocation();

  const userMenuItems = [
    { key: 'profile', label: 'Profile' },
    { key: 'settings', label: 'Settings' },
    { key: 'logout', label: 'Logout' },
  ];

  return (
    <Sider width={250} theme="light" className="sidebar-container">
      <div className="sidebar-header">
        <CompassOutlined className="logo-icon" />
        <h2 className="logo-text">ALISA</h2>
      </div>

      <div className="sidebar-content">
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultOpenKeys={['supplier-management']}
          style={{ borderRight: 0 }}
        >
          <Menu.Item key="/dashboard" icon={<AppstoreOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>

          <SubMenu
            key="supplier-management"          
            title="Supplier Management"
            className="supplier-submenu"
          >
            <Menu.Item key="/supplier-dashboard">Dashboard</Menu.Item>
            <Menu.Item key="/">
              <Link to="/">Supplier List</Link>
            </Menu.Item>
            <Menu.Item key="/review-approvals">Review & Approvals</Menu.Item>
            <Menu.Item key="/configurations">Configurations</Menu.Item>
          </SubMenu>

          <SubMenu
            key="funnel-management"
            icon={<ExportOutlined />}
            title="Funnel Management"
          >
            {/* Add funnel management sub-items here if any */}
          </SubMenu>
        </Menu>
      </div>

      <div className="sidebar-footer">
        <Menu mode="inline" style={{ borderRight: 0 }}>
          <Menu.Item key="/help-support" icon={<QuestionCircleOutlined />}>
            Help & Support
          </Menu.Item>
          <SubMenu
            key="user-profile"
            title={
              <Space>
                <Avatar className="user-avatar" icon={<UserOutlined />} />
                <span className="user-name">John Doe</span>
              </Space>
            }
          >
            <Menu.Item key="/profile">Profile</Menu.Item>
            <Menu.Item key="/settings">Settings</Menu.Item>
            <Menu.Item key="/logout">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Sider>
  );
};

export default Sidebar;

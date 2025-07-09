import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SupplierList from './features/supplier/components/SupplierList';
import SupplierPage from './features/supplier/components/SupplierPage';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Routes>
            <Route path="/" element={<SupplierList />} />
            <Route path="/add-supplier" element={<SupplierPage />} />
            <Route path="/supplier-dashboard" element={<SupplierList />} />
            <Route path="/review-approvals" element={<SupplierList />} />
            <Route path="/configurations" element={<SupplierList />} />
            <Route path="/funnel-management" element={<SupplierList />} />
            <Route path="/help-support" element={<SupplierList />} />
          </Routes>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

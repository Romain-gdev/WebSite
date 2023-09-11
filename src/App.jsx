import { BrowserRouter as Router,Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import './style/App.css';

const { Header,  Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/current-year">Current Year</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/experience">Experience</Link></Menu.Item>
          </Menu>
        </Header>
      
        <Footer style={{ textAlign: 'center' }}>Your Name &copy; 2023</Footer>
      </Layout>
    </Router>
  );
};

export default App;

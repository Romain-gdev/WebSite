import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {Home} from './components/Home';
import {CurrentYear} from './components/CurrentYear';
import {Experience} from './components/Experience';
import './style/App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/current-year">Current Year</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/experience">Experience</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/current-year" component={CurrentYear} />
            <Route path="/experience" component={Experience} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your Name &copy; 2023</Footer>
      </Layout>
    </Router>
  );
};

export default App;
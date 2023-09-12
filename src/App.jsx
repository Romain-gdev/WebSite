import { Link, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Identity } from './components/Identity'
import { MainMenu } from './components/MainMenu'
import './style/App.css';

const { Header, Footer } = Layout;

export function App() {
  return (
    <div className='bg-violet-900 min-h-screen min-w-screen no-scrollbar'>
      <Identity />
      <div className='pt-8'>
        <MainMenu />
      </div>
      <Outlet />
    </div>
  );
};

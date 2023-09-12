import { Link, Outlet, useOutlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Identity } from './components/Identity'
import { WhoAmI } from './components/whoami/WhoAmI'
import { MainMenu } from './components/MainMenu'
import './style/App.css';

const { Header, Footer } = Layout;

export function App() {

  const outlet = useOutlet();

  return (
    <div className='bg-[#ADD8E6] min-h-screen min-w-screen no-scrollbar'>
      <Identity />
      <div className='pt-8'>
        <MainMenu />
      </div>
      
      <div className='bg-[#87CEEB] rounded-2xl'>
      {outlet || <WhoAmI />}
      </div>
    </div>
  );
};

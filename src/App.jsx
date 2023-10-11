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
    <div className='bg-gradient-to-br from-fuchsia-900 to-[#261447] min-h-screen min-w-screen no-scrollbar text-white' >
      <Identity />
      <div className='pt-8'>
        <MainMenu />
      </div>
      
      <div >
      {outlet || <WhoAmI />}
      </div>
    </div>
  );
}

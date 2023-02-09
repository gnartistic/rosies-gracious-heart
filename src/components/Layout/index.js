import { Outlet } from 'react-router-dom';
import './index.scss';
import Navbar from '../Navbar';

const Layout = () =>
{
    return <div className='App page' id='pageWrap'>
        <Outlet />
        <Navbar/>
    </div>
}

export default Layout;
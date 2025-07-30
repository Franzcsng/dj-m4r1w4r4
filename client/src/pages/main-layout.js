
import { Outlet } from 'react-router-dom';
import Header from '../components/navigation/header.js';
import Footer from '../components/footer.js';

const MainLayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default  MainLayout;
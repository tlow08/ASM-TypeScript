import { Outlet } from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';
import FooterPage from '../components/FooterPage';

const ClientLayout = () => {
  return (
    <>
    <HeaderPage />
      <main>
        <Outlet />
      </main>
    <FooterPage />
    </>
  );
};

export default ClientLayout;

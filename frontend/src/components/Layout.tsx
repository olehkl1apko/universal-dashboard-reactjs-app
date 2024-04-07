import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      Navbar
      <div className="container">
        <div className="menuContainer">Menu</div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      Footer
    </div>
  );
};

export default Layout;
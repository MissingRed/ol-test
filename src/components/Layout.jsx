import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <div className="navbar bg-base-100 flex justify-between items-center p-2 shadow-sm">
        <div>
          <a className="btn btn-ghost text-xl">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQFrN9bKpKYAGg/company-logo_200_200/company-logo_200_200/0/1630449044271/olsoftware_logo?e=2147483647&v=beta&t=hZfpFkQ5kJxOAYUoSzCa-VRazlIVIg3y6RMdBGBikMk"
              alt="Logo"
              className="w-10"
            />
          </a>
        </div>
        <Link to="/home" className="p-2 flex justify-center items-center">
          <h1
            className={`text-sm rounded-full w-5 h-5 text-white text-center ${
              location.pathname === "/home" ? "bg-blue-900" : "bg-black"
            }`}
          >
            1
          </h1>
          <div className="ml-1 font-bold text-sm">Lista formulario</div>
        </Link>
        <Link to="/crear" className="p-2 flex justify-center items-center">
          <h1
            className={`text-sm rounded-full w-5 h-5 text-white text-center ${
              location.pathname === "/crear" ? "bg-blue-900" : "bg-black"
            }`}
          >
            2
          </h1>
          <div className="ml-1 font-bold text-sm">Crear formulario</div>
        </Link>
        <div className="p-2 flex justify-center items-center">
          <div className="w-10 mr-2">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg"
            />
          </div>
          <h1 className="ml-1 font-bold text-sm">Beneficios por renovar</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to="/">
                <a>Cerrar sesión</a>
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="ml-1 font-bold text-blue-800 text-sm">
              Bienvenido!
            </h1>
            <p className="text-xs">Jon Doe</p>
            <p className="text-xs">Administrador</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;

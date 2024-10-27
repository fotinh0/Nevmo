import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      {/* Mobile Menu Icon */}
      {!isSidebarOpen && (
        <button
          className="lg:hidden p-4 fixed top-4 left-4 z-20 bg-white rounded-full shadow-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <CiMenuBurger className="h-6 w-6 text-gray-800" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static lg:flex w-64 h-screen bg-white flex-col border-r-2
                    ${
                      isSidebarOpen
                        ? 'translate-x-0'
                        : '-translate-x-full lg:translate-x-0'
                    }`}
      >
        <div className="bg-sky-blue px-10 py-5 flex items-end justify-between">
          <h1
            className="text-3xl text-white font-bold italic cursor-pointer"
            onClick={() => (window.location = '/dashboard')}
          >
            nevmo
          </h1>
          <IoMdClose
            className="lg:hidden h-6 w-6 text-white"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <nav className="flex flex-col px-10 py-5 space-y-4">
          <Link to="/dashboard" className="hover:text-sky-blue">
            Dashboard
          </Link>
          <Link to="/dashboard/accounts" className="hover:text-sky-blue">
            Manage Accounts
          </Link>
          <Link to="/dashboard/transactions" className="hover:text-sky-blue">
            Transactions
          </Link>
          <a
            className="hover:text-sky-blue"
            onClick={() => {
              localStorage.removeItem('token');
              window.location = '/';
            }}
          >
            Log out
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

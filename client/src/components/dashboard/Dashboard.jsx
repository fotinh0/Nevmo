import { useState, useEffect } from 'react';
import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 px-10 py-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

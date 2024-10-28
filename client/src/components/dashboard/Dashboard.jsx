import Sidebar from './sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const userData = {
  name: 'Foti',
  balance: 100.15,
  accounts: [
    { id: 1, bank: 'Chase', name: 'Chase Balance', balance: 100.12 },
    { id: 2, bank: 'Chase', name: 'Chase Saving', balance: 25.22 },
    { id: 3, bank: 'TD Bank', name: 'TD Checking', balance: 100.12 },
  ],
  transactions: [
    {
      id: 1,
      type: 'Transfer',
      amount: 35.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
    {
      id: 2,
      type: 'Transfer',
      amount: 29.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
    {
      id: 3,
      type: 'Transfer',
      amount: 125.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
    {
      id: 3,
      type: 'Transfer',
      amount: 125.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
    {
      id: 3,
      type: 'Transfer',
      amount: 125.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
    {
      id: 3,
      type: 'Transfer',
      amount: 125.25,
      from: 'Chase Checking',
      to: 'Chase Saving',
      date: '10/20/2024',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex-1 px-10 my-20">
        <Outlet context={{ userData }} />
      </main>
    </div>
  );
};

export default Dashboard;

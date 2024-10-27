import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/landingPage/LandingPage';
import DashboardHome from './components/dashboard/home/DashboardHome';
import Transactions from './components/dashboard/transactions/Transactions';
import ManageAccounts from './components/dashboard/accounts/ManageAccounts';
import ProtectedRoute from './components/dashboard/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<ManageAccounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

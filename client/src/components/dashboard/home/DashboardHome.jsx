import { Link, useOutletContext } from 'react-router-dom';
import Transaction from '../shared/Transaction';
import ActionButton from '../shared/ActionButton';

const DashboardHome = () => {
  const { userData } = useOutletContext();

  return (
    <div className="h-full">
      {/* Welcome and Balance Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {userData.name}!</h1>
          <p className="text-xl text-gray-600 mt-2">Current Balance</p>
          <p className="text-3xl font-semibold text-blue-500">
            ${userData.balance.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <ActionButton label="Pay" url="/dashboard/pay" />
        <ActionButton label="Request" url="/dashboard/pay" />
        <ActionButton
          label="Transfer"
          url="/dashboard/transfer"
          bgColor="bg-green-500"
          hoverBgColor="bg-green-600"
        />
        <ActionButton
          label="Deposit"
          url="/dashboard/deposit"
          bgColor="bg-yellow-500"
          hoverBgColor="bg-yellow-600"
        />
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4 mb-8">
          {userData.transactions.length ? (
            userData.transactions
              .slice(0, 4)
              .map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
              ))
          ) : (
            <p>No recent transactions.</p>
          )}
        </div>

        {userData.transactions.length && (
          <div className="text-center">
            <ActionButton
              label="View more"
              url="/dashboard/transactions"
              bgColor="bg-gray-400"
              hoverBgColor="bg-gray-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;

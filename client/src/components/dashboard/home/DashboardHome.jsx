import { Link, useOutletContext } from 'react-router-dom';

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
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Pay Others
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Transfer Money
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Deposit Money
        </button>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4 mb-8">
          {userData.transactions.slice(0, 4).map((transaction, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-gray-500">
                  {transaction.from} → {transaction.to}
                </p>
                <p className="text-sm text-gray-500">
                  Date: {transaction.date}
                </p>
              </div>
              <p className="text-lg font-semibold text-blue-500">
                ${transaction.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center hover:text-sky-blue">
          <Link to="/dashboard/transactions">View more</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

import { useOutletContext } from 'react-router-dom';

const ManageAccounts = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Manage Accounts</h2>
      {/* Accounts Section */}
      <div className="space-y-4">
        {userData.accounts.map((account) => (
          <div
            key={account.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <h3 className="font-semibold">{account.name}</h3>
              <p className="text-gray-600">
                Balance: ${account.balance.toFixed(2)}
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-200">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Account Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Add New Account</h3>
        <form className="flex space-x-2">
          <input
            type="text"
            placeholder="Account Name"
            className="flex-1 p-2 border rounded-lg"
          />
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200">
            Add Account
          </button>
        </form>
      </div>
    </>
  );
};

export default ManageAccounts;

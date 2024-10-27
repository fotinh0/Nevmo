import { useOutletContext } from 'react-router-dom';
import Account from './Account';

const ManageAccounts = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Manage Accounts</h2>
      {/* Accounts Section */}
      <div className="space-y-4">
        {userData.accounts.map((account, index) => (
          <Account key={index} account={account} />
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

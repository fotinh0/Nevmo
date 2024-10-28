import { useState } from 'react';
import RemoveAccountModal from './RemoveAccountModal';

const Account = ({ account }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-y-4 gap-x-16 justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <div>
        <h3 className="font-semibold">{account.name}</h3>
        <p className="text-gray-600">Balance: ${account.balance.toFixed(2)}</p>
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-colors duration-200"
          onClick={() => setIsModalOpen(true)}
        >
          Remove
        </button>
      </div>

      <RemoveAccountModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        account={account}
      />
    </div>
  );
};

export default Account;

import { useOutletContext } from 'react-router-dom';

const Transactions = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      {/* Transactions Section */}
      <div className="space-y-4">
        {userData.transactions.map((transaction, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{transaction.type}</p>
              <p className="text-sm text-gray-500">
                {transaction.from} → {transaction.to}
              </p>
              <p className="text-sm text-gray-500">Date: {transaction.date}</p>
            </div>
            <p className="text-lg font-semibold text-blue-500">
              ${transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Transactions;

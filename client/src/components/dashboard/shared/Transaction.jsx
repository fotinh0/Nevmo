const Transaction = ({ transaction }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
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
  );
};

export default Transaction;

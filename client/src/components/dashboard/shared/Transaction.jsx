const Transaction = ({ transaction }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 justify-between items-center">
      <div>
        <p className="font-medium">{transaction.type}</p>
        <p className="text-sm text-gray-500 my-1">
          {transaction.from} → {transaction.to}
        </p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>
      <p className="text-lg font-semibold text-blue-500">
        ${transaction.amount}
      </p>
    </div>
  );
};

export default Transaction;

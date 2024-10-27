import { useOutletContext } from 'react-router-dom';
import Transaction from '../shared/Transaction';

const Transactions = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      {/* Transactions Section */}
      <div className="space-y-4">
        {userData.transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </div>
    </>
  );
};

export default Transactions;

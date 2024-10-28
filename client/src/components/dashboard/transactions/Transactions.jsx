import { useOutletContext } from 'react-router-dom';
import Transaction from '../shared/Transaction';
import ActionButton from '../shared/ActionButton';

const Transactions = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <div className="flex gap-4 mb-8">
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
      {/* Transactions Section */}
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <div className="space-y-4">
        {userData.transactions.length ? (
          userData.transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))
        ) : (
          <p>No transactions history.</p>
        )}
      </div>
    </>
  );
};

export default Transactions;

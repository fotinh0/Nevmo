import { useOutletContext } from 'react-router-dom';
import Transaction from '../shared/Transaction';
import ActionButton from '../shared/ActionButton';

const Transactions = () => {
  const { userData } = useOutletContext();
  return (
    <>
      <div className="flex flex-wrap gap-8 mb-8 justify-center sm:justify-start sm:gap-4">
        <ActionButton label="Pay & Request" url="/dashboard/pay" />
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
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        Transaction History
      </h2>
      <div className="space-y-4">
        {userData.transactions.length ? (
          userData.transactions.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))
        ) : (
          <p className="text-center sm:text-left">No transactions history.</p>
        )}
      </div>
    </>
  );
};

export default Transactions;

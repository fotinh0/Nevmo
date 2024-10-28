import AccountsList from './AccountsList';
import CreateAccount from './CreateAccount';

const ManageAccounts = () => {
  return (
    <>
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">Manage Accounts</h2>
        <CreateAccount />
      </div>
      {/* Accounts Section */}
      <AccountsList />
    </>
  );
};

export default ManageAccounts;

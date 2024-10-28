import { useOutletContext } from 'react-router-dom';
import Account from './Account';

const AccountsList = () => {
  const { userData } = useOutletContext();

  return (
    <div className="space-y-4">
      {userData.accounts.length ? (
        userData.accounts.map((account, index) => (
          <Account key={index} account={account} />
        ))
      ) : (
        <p>No linked accounts. </p>
      )}
    </div>
  );
};

export default AccountsList;

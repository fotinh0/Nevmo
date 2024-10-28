import { useState } from 'react';
import CreateAccountModal from './CreateAccountModal';

const CreateAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-200"
        onClick={openModal}
      >
        Add New Account
      </button>

      <CreateAccountModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default CreateAccount;

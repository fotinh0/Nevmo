import Modal from '../shared/Modal';
import { useState } from 'react';

const CreateAccountModal = ({ isModalOpen, setIsModalOpen }) => {
  const [newAccountData, setNewAccountData] = useState({
    accountName: '',
    accountNumber: '',
    routing: '',
  });

  const resetAccountData = () => {
    setNewAccountData({
      accountName: '',
      accountNumber: '',
      routing: '',
    });
  };

  const closeModal = () => {
    resetAccountData();
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNewAccountData({ ...newAccountData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    console.log('Adding new account');
    resetAccountData();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      title="Add new account"
      label="Add account"
      onClose={closeModal}
      handleSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="accountName"
        placeholder="Account name"
        value={newAccountData.accountName}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="text"
        name="accountNumber"
        placeholder="Account number"
        value={newAccountData.accountNumber}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
      <input
        type="text"
        name="routing"
        placeholder="Routing number"
        value={newAccountData.routing}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        required
      />
    </Modal>
  );
};

export default CreateAccountModal;

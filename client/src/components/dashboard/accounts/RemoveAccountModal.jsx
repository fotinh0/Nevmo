import React from 'react';
import Modal from '../shared/Modal';

const RemoveAccountModal = ({ isModalOpen, setIsModalOpen, account }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
    console.log('Removing account ' + account.id);
  };
  return (
    <Modal
      isOpen={isModalOpen}
      title="Are you sure?"
      label="Remove account"
      onClose={closeModal}
      handleSubmit={handleSubmit}
    >
      <p>You are removing the following account: </p>
      <p>{account.name}</p>
    </Modal>
  );
};

export default RemoveAccountModal;

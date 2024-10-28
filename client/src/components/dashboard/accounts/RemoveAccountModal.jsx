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
      buttonLabel="Remove account"
      buttonClassName="bg-red-500 hover:bg-red-600"
      onClose={closeModal}
      handleSubmit={handleSubmit}
    >
      <p>You are removing the following account: </p>
      <p className="font-bold">{account.name}</p>
    </Modal>
  );
};

export default RemoveAccountModal;

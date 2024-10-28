const Modal = ({
  isOpen,
  title,
  children,
  buttonLabel,
  onClose,
  handleSubmit,
  contentClassName,
  buttonClassName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} method="post">
          <div className={`modal-content ${contentClassName || ''}`}>
            {children}
          </div>
          <div className="mt-8 text-center">
            <button
              className={`py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 ${buttonClassName}`}
              type="submit"
            >
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

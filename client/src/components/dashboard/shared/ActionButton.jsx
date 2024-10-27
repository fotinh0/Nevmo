import { useNavigate } from 'react-router-dom';

const ActionButton = ({ label, url, bgColor, hoverBgColor, textColor }) => {
  const navigate = useNavigate();
  return (
    <button
      className={`px-4 py-2 rounded-full min-w-32 
      ${bgColor || 'bg-sky-blue'} 
      hover:${hoverBgColor || 'bg-blue-600'} 
      ${textColor || 'text-white'}`}
      onClick={() => navigate(url)}
    >
      {label}
    </button>
  );
};

export default ActionButton;

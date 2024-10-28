const InputField = ({ name, type, placeholder, className, onChange }) => {
  return (
    <input
      className={className}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default InputField;

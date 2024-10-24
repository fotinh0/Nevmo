const InputField = ({ name, type, placeholder, className, onChange }) => {
  return (
    <input
      className={`h-14 py-1.5 px-2.5 border border-solid rounded border-[#888C94] focus-visible:outline-sky-blue focus-visible:placeholder:text-sky-blue ${
        className || ''
      }`}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};

export default InputField;

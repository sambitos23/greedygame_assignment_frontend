function FormInput(props) {
  const {
    placeholder,
    label,
    name,
    type,
    value,
    handleChange,
    errorMesage,
    error,
  } = props;
  return (
    <div className={`relative w-full ${error ? "mb-2" : "mb-4"}`}>
      <label
        htmlFor={name}
        className="leading-7 text-sm font-bold text-[#1D1A1A]"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className={`w-full placeholder:text-xs lg:placeholder:text-sm placeholder:font-normal bg-[#F9FAFE] rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 font-medium ${
          error ? "border-red-500 mb-2" : "border-[#0F1B4D0F]"
        }`}
      />
      <div className={`text-xs text-red-500 ${error ? "-mt-1" : "hidden"} `}>
        {errorMesage}
      </div>
    </div>
  );
}

export default FormInput;

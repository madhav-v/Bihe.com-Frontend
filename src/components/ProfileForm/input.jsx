const Input = (props) => {
  const handleChange = (e) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return (
    <>
      <div className={`my-2 ${props.classes3 && props.classes3}`}>
        <label
          className={`text-md lg:text-lg xl:text-xl font-normal my-1 ${
            props.classes2 && props.classes2
          }`}
          htmlFor=""
        >
          {props.label && props.label}
        </label>
        <input
          name={props.name && props.name}
          className={`w-full ouline-none border-[1px] border-black/10 rounded py-2 text-sm placeholder:text-sm md:placeholder:text-lg ${
            props.classes && props.classes
          }`}
          type={props.type && props.type}
          placeholder={props.placeholder && props.placeholder}
          onChange={handleChange}
          value={props.value || ""}
        />
        {props.error && <p className="text-red-500 text-sm">{props.error}</p>}
      </div>
    </>
  );
};

export default Input;

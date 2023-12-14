import React from "react";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";

const InputSelect = ({
  label,
  name,
  options,
  setValue,
  value,
  error,
  classes1,
  classes2,
  isMulti,
}) => {
  const animatedComponents = makeAnimated();

  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : "";
    setValue(name, selectedValue);
  };

  return (
    <>
      <div className={`my-1 ${classes2 && classes2}`}>
        {label && (
          <label
            className={`text-md lg:text-xl xl:text-2xl ${classes1 && classes1}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <CreatableSelect
          closeMenuOnSelect={true}
          components={animatedComponents}
          options={options}
          onChange={handleChange}
          value={options.find((option) => option.value === value)}
          isMulti={isMulti}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              padding: "2px 5px",
            }),
          }}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </>
  );
};

export default InputSelect;

import React, { useState } from "react";
import Button from "../../components/ProfileForm/profilebutton";

function FifthForm({
  fifthFormValues,
  setFifthFormValues,
  setCurrentFormCount,
}) {
  const [bio, setBio] = useState(fifthFormValues.bio || "");
  const maxCharacters = 500; // You can adjust the maximum number of characters

  const handlePrevClick = () => {
    setCurrentFormCount((prev) => prev - 1);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFifthFormValues({ bio })
  // };

  const handleBioChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setBio(value);
      setFifthFormValues({ bio });
      console.log(fifthFormValues);
    }
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <form className="mx-auto">
        <h1 className="text-2xl w-[90%] mx-auto mb-1 font-bold">
          Write Something about you
        </h1>

        <div className="mb-4">
          <textarea
            className="w-full h-40 p-2 border border-gray-300 rounded-md"
            placeholder="Write your bio here..."
            value={bio}
            onChange={handleBioChange}
          />
          <div className="text-gray-500 text-right">
            Characters left: {maxCharacters - bio.length}
          </div>
        </div>

        <div className="w-full flex justify-around">
          <Button
            label="Go Back"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full ml-[10rem] justify-center py-4"
            onClick={handlePrevClick}
          />
          {/* <Button
            type="submit"
            label="Submit"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
          /> */}
        </div>
      </form>
    </div>
  );
}

export default FifthForm;

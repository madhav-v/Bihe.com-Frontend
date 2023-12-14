import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileSvc from "../../../../services/profile.service";
import { toast } from "react-toastify";

const PartnerMessage = () => {
  const [partnerMessage, setPartnerMessage] = useState("");
  const [edit, setEdit] = useState(false);
  const maxCharacters = 500;
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);

  const handleBioChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxCharacters) {
      setPartnerMessage(value);
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSave = async () => {
    const bioData = { partnerMessage };
    const response = await profileSvc.partnerMessage(bioData);
    if (response.status) {
      toast.success("Partner Message updated Successfully");
      setEdit(false);
      console.log(response);
      dispatch(loggedInUser(response.user));
    } else {
      toast.error("Error in updating Bio");
    }
  };

  useEffect(() => {
    setPartnerMessage(loggedInUser?.profile?.partnerMessage || "");
  }, [loggedInUser]);
  return (
    <>
      {loggedInUser?.profile?.bio ? (
        <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto flex justify-between rounded-md shadow-md">
          <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
            <div className="w-full">
              {edit ? (
                <>
                  <textarea
                    className="w-full h-40 p-2 border border-gray-300 rounded-md"
                    placeholder="Write your bio here..."
                    value={partnerMessage}
                    onChange={handleBioChange}
                  />
                  <div className="text-gray-500 text-right mt-2">
                    Characters left: {maxCharacters - partnerMessage.length}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <h3 className="text-lg font-bold mb-3">
                      Message to your partner
                    </h3>
                  </div>
                  <div className="border border-black-300 p-2 rounded-md break-all whitespace-normal">
                    {partnerMessage ? <>{partnerMessage}</> : <>N/A</>}
                  </div>
                </>
              )}
            </div>
            <div className="flex flex-col items-start ml-4">
              {edit ? (
                <div className="flex">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mb-2 mt-2"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>No Bio</>
      )}
    </>
  );
};

export default PartnerMessage;

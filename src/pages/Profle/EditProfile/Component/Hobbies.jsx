import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/ProfileForm/input";
import { useForm, Controller } from "react-hook-form";
import profileSvc from "../../../../services/profile.service";
import { setLoggedInUser } from "../../../../reducers/user.reducer";
import InputSelect from "../../../../components/ProfileForm/select";

const Hobbies = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);
  const [editMode, setEditMode] = useState(false);
  const [detail, setDetail] = useState();

  const getProfile = async () => {
    try {
      if (loggedInUser) {
        const response = await profileSvc.getProfileById(
          loggedInUser?.profile?._id
        );
        setDetail(response.result);
      }
    } catch (exception) {
      throw exception;
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: detail,
  });

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = async (data) => {
    try {
      let submit = await profileSvc.addHobbies(data);
      if (submit) {
        dispatch(setLoggedInUser(submit.result));
        toast.success("Hobbies Updated Successfully");
        setDetail(submit.result);
        setEditMode(false);
      } else {
        toast.error("Something went wrong");
        setEditMode(false);
      }
    } catch (exception) {
      throw exception;
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      getProfile();
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (detail) {
      setValue("hobbies", detail.hobbies);
    }
  }, [detail]);

  return (
    <>
      <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto flex justify-between rounded-md shadow-md">
        {!editMode ? (
          <>
            <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">Hobbies</h3>
              {loggedInUser ? (
                <>
                  <p>
                    Hobbies:{" "}
                    {loggedInUser.profile?.hobbies ? (
                      <span className="capitalize">
                        {loggedInUser.profile.hobbies}
                      </span>
                    ) : (
                      <p>N/A</p>
                    )}
                  </p>
                </>
              ) : (
                <>Loading</>
              )}
            </div>
          </>
        ) : (
          <>
            {detail ? (
              <>
                <div className="mt-5 min-h-full mb-8 px-2 py-4 border w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
                  <form onSubmit={handleSubmit(handleSave)}>
                    <div className="w-full flex justify-around items-center">
                      <Controller
                        name="hobbies"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Hobbies"
                            classes3="w-[40%]"
                            classes="px-2"
                            classes2="block lg:text-lg xl:text-xl"
                            type="text"
                            placeholder="Enter your hobbies, separated by commas"
                            error={errors.hobbies?.message}
                          />
                        )}
                      />
                    </div>

                    <div className="">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 mr-2"
                        type="submit"
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
                  </form>
                </div>
              </>
            ) : (
              <>Loading</>
            )}
          </>
        )}

        <div className="flex flex-col items-start">
          {editMode ? (
            <></>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Hobbies;

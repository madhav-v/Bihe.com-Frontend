import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/ProfileForm/input";
import InputSelect from "../../../../components/ProfileForm/select";
import { useForm, Controller } from "react-hook-form";
import profileSvc from "../../../../services/profile.service";
import { setLoggedInUser } from "../../../../reducers/user.reducer";

const BasicInfo = () => {
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
  const religionOptions = [
    { value: "hindu", label: "Hinduism" },
    { value: "buddhist", label: "Buddhism" },
    { value: "islam", label: "Islam" },
    { value: "christianity", label: "Christianity" },
    { value: "sikh", label: "Sikhism" },
    { value: "Jain", label: "Jainism" },
    { value: "kirat", label: "Kirat" },
    { value: "no", label: "Non-Religious" },
    { value: "other", label: "Other" },
  ];

  const genderOptions = [
    { value: "Man", label: "Man" },
    { value: "woman", label: "Woman" },
    { value: "other", label: "Other" },
  ];

  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "awatingdivorce", label: "Awating Divorce" },
    { value: "divorced", label: "Divorced" },
  ];

  const heightOptions = [
    { value: "4ft 5in - 134cm", label: "4ft 5in - 134cm" },
    { value: "4ft 6in - 137cm", label: "4ft 6in - 137cm" },
    { value: "4ft 7in - 139cm", label: "4ft 7in - 139cm" },
    { value: "4ft 8in - 142cm", label: "4ft 8in - 142cm" },
    { value: "4ft 9in - 144cm", label: "4ft 9in - 144cm" },
    { value: "4ft 10in - 147cm", label: "4ft 10in - 147cm" },
    { value: "4ft 11in - 149cm", label: "4ft 11in - 149cm" },
    { value: "5ft 0in - 152cm", label: "5ft 0in - 152cm" },
    { value: "5ft 1in - 154cm", label: "5ft 1in - 154cm" },
    { value: "5ft 2in - 157cm", label: "5ft 2in - 157cm" },
    { value: "5ft 3in - 159cm", label: "5ft 3in - 159cm" },
    { value: "5ft 4in - 162cm", label: "5ft 4in - 162cm" },
    { value: "5ft 5in - 164cm", label: "5ft 5in - 164cm" },
    { value: "5ft 6in - 167cm", label: "5ft 6in - 167cm" },
    { value: "5ft 7in - 169cm", label: "5ft 7in - 169cm" },
    { value: "5ft 8in - 172cm", label: "5ft 8in - 172cm" },
    { value: "5ft 9in - 174cm", label: "5ft 9in - 174cm" },
    { value: "5ft 10in - 177cm", label: "5ft 10in - 177cm" },
    { value: "5ft 11in - 179cm", label: "5ft 11in - 179cm" },
    { value: "6ft 0in - 182cm", label: "6ft 0in - 182cm" },
    { value: "6ft 1in - 184cm", label: "6ft 1in - 184cm" },
    { value: "6ft 2in - 187cm", label: "6ft 2in - 187cm" },
    { value: "6ft 3in - 189cm", label: "6ft 3in - 189cm" },
    { value: "6ft 4in - 192cm", label: "6ft 4in - 192cm" },
  ];

  const casteOptions = [
    { value: "brahmin", label: "Brahmin" },
    { value: "chhetri", label: "chhetri" },
    { value: "thakuri", label: "Thakuri" },
    { value: "magar", label: "Magar" },
    { value: "tamang", label: "Tamang" },
    { value: "sherpa", label: "Sherpa" },
    { value: "newar", label: "Newar" },
  ];

  const smokeorDrinkOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

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

  const handleSav = async (data) => {
    try {
      let submit = await profileSvc.firstEdit(data);
      if (submit) {
        console.log("submit us ", submit);
        dispatch(setLoggedInUser(submit.result));
        toast.success("Profile Updated Successfully");
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
      setValue("fullname", detail.fullname);
      setValue("sex", detail.sex);
      setValue("dateOfBirth", detail.dateOfBirth);
      setValue("height", detail.height);
      setValue("marital_status", detail.marital_status);
      setValue("motherTongue", detail.motherTongue);
      setValue("smokeOrDrink", detail.smokeOrDrink);
      setValue("caste", detail.caste);
      setValue("religion", detail.religion);
      setValue("address", detail.address);
    }
  }, [detail]);

  return (
    <>
      <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto flex justify-between rounded-md shadow-md">
        {!editMode ? (
          <>
            <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">Basic Details</h3>
              {loggedInUser ? (
                <>
                  {" "}
                  <p>Name: {loggedInUser?.profile?.fullname}</p>
                  <p>Sex: {loggedInUser?.profile?.sex}</p>
                  {/* <p>Age: {calculateAge(loggedInUser.profile.dateOfBirth)}</p> */}
                  {/* <p>Height: {loggedInUser.profile.height}</p>   */}
                  <p>Marital Status: {loggedInUser?.profile?.marital_status}</p>
                  <p>Mother Tongue: {loggedInUser?.profile?.motherTongue}</p>
                  <p>Religion: {loggedInUser?.profile?.religion}</p>
                  <p>Caste: {loggedInUser?.profile?.caste}</p>
                  <p>Address: {loggedInUser?.profile?.address}</p>
                  <p>
                    Smoking or Drinking Habits:{" "}
                    {loggedInUser?.profile?.smokeOrDrink}
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
                {" "}
                <div className="mt-5 min-h-full mb-8 px-2 py-4 border w-[910%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
                  <form onSubmit={handleSubmit(handleSav)}>
                    <div className="w-full flex  justify-around items-center">
                      <Controller
                        name="fullname"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Full Name"
                            classes3="w-[40%]"
                            classes="px-2"
                            classes2="block lg:text-lg xl:text-xl"
                            type="text"
                            placeholder="Enter full Name"
                            error={errors.fullname?.message}
                          />
                        )}
                      />
                      <Controller
                        name="sex"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Gender "
                            classes1="block text-xl my-2"
                            classes2="xl:w-[40%] basis-[40%]"
                            options={genderOptions}
                            error={errors.sex?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                    </div>
                    <div className="w-full flex  justify-around items-center">
                      <Controller
                        name="religion"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Religion "
                            classes1="block text-md lg:text-lg xl:text-xl my-2"
                            classes2="xl:w-[70%] basis-[40%]"
                            options={religionOptions}
                            error={errors.religion?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                      <Controller
                        name="caste"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Caste "
                            classes1="block text-md lg:text-lg xl:text-xl my-2"
                            classes2="xl:w-[70%] basis-[40%]"
                            options={casteOptions}
                            error={errors.caste?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                    </div>

                    <div className="w-full flex justify-around  items-center">
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Date of Birth"
                            classes3="w-[40%]"
                            classes="px-2"
                            classes2="block lg:text-lg xl:text-xl"
                            type="date"
                            placeholder="Select Date of Birth"
                            error={errors.dateOfBirth?.message}
                          />
                        )}
                      />
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Where do you live ?"
                            classes3="w-[40%]"
                            classes="px-2"
                            classes2="block xl:text-xl xl:text-xl lg:text-lg"
                            type="text"
                            placeholder="Enter your current city"
                            error={errors.address?.message}
                          />
                        )}
                      />
                    </div>

                    <div className="w-full flex justify-around  items-center">
                      <Controller
                        name="marital_status"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Marital Status"
                            classes1="block text-md lg:text-lg xl:text-xl my-2"
                            classes2="xl:w-[40%] basis-[40%]"
                            options={maritalStatusOptions}
                            error={errors.marital_status?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                      <Controller
                        name="height"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Your Height "
                            classes1="block text-md lg:text-lg xl:text-xl my-2"
                            classes2="xl:w-[40%] basis-[40%]"
                            options={heightOptions}
                            error={errors.height?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                    </div>
                    <div className="w-full flex  justify-around items-center">
                      <Controller
                        name="smokeOrDrink"
                        control={control}
                        render={({ field }) => (
                          <InputSelect
                            {...field}
                            label="Smoke or Drink ? "
                            classes1="block text-md lg:text-lg xl:text-xl my-2"
                            classes2="xl:w-[70%] basis-[40%]"
                            options={smokeorDrinkOptions}
                            error={errors.smokeorDrink?.message}
                            setValue={setValue}
                          />
                        )}
                      />
                      <Controller
                        name="motherTongue"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            label="Mother Tongue"
                            classes3="w-[40%]"
                            classes="px-2"
                            classes2="block lg:text-lg xl:text-xl"
                            type="text"
                            placeholder="Enter your mother tongue"
                            error={errors.motherTongue?.message}
                          />
                        )}
                      />
                    </div>
                    <div className="">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 mr-2"
                        // onClick={handleSave}
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

export default BasicInfo;

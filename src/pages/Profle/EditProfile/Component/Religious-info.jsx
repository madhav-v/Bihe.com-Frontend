import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/ProfileForm/input";
import InputSelect from "../../../../components/ProfileForm/select";
import { useForm, Controller } from "react-hook-form";
import profileSvc from "../../../../services/profile.service";
import { setLoggedInUser } from "../../../../reducers/user.reducer";

const ReligiousInfo = () => {
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
  const highestEducationOptions = [
    { value: "school", label: "School" },
    { value: "college", label: "College" },
    { value: "bachelor", label: "Bachelor's Degree" },
    { value: "master", label: "Master's Degree" },
    { value: "doctorate", label: "Doctorate" },
  ];

  const employedInOptions = [
    { value: "private", label: "Private Sector" },
    { value: "public", label: "Public Sector" },
    { value: "business", label: "Business/Self Employed" },
    { value: "not-employed", label: "Not Employed" },
  ];

  const incomeOptions = [
    { value: "0-3", label: "Less than 3 Lakhs" },
    { value: "3-6", label: "3 - 6 Lakhs" },
    { value: "6-10", label: "6 - 10 Lakhs" },
    { value: "10+", label: "More than 10 Lakhs" },
  ];
  const occupationOptions = [
    { value: "engineer", label: "Engineer" },
    { value: "teacher", label: "Teacher" },
    { value: "doctor", label: "Doctor" },
    { value: "business-owner", label: "Business Owner" },
    { value: "student", label: "Student" },
  ];

  const liveWithFamilyOptions = [
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
      console.log("data is", data);
      let submit = await profileSvc.secondEdit(data);
      if (submit) {
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
      setValue("income", detail.income);
      setValue("highestEducation", detail.highestEducation);
      setValue("occupation", detail.occupation);
      setValue("physicalDisability", detail.physicalDisability);
      setValue("employedIn", detail.employedIn);
      setValue("gotra", detail.gotra);
      setValue("familyType", detail.familyType);
      setValue("familyValues", detail.familyValues);
      setValue("noOfFamilyMembers", detail.noOfFamilyMembers);
      setValue("noOfSiblings", detail.noOfSiblings);
      setValue("liveWithFamily", detail.liveWithFamily);
    }
  }, [detail]);

  return (
    <>
      <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto flex justify-between rounded-md shadow-md">
        {!editMode ? (
          <>
            <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">Personal Information</h3>
              {loggedInUser ? (
                <>
                  {" "}
                  <p>Family Type: {loggedInUser?.profile?.familyType}</p>
                  {/* <p>Age: {calculateAge(loggedInUser.profile.dateOfBirth)}</p> */}
                  <p>Family Values: {loggedInUser.profile.familyValues}</p>
                  <p>Gotra: {loggedInUser.profile.gotra}</p>
                  <p>
                    Physical Disability:{" "}
                    {loggedInUser.profile.physicalDisability}
                  </p>
                  <p>
                    Highest Education: {loggedInUser.profile.highestEducation}
                  </p>
                  <p>Employed In: {loggedInUser.profile.employedIn}</p>
                  <p>Occupation: {loggedInUser.profile.occupation}</p>
                  <p>Income: {loggedInUser.profile.income}</p>
                  <p>
                    Number of Family Members:{" "}
                    {loggedInUser.profile.noOfFamilyMembers}
                  </p>
                  <p>Number of Siblings: {loggedInUser.profile.noOfSiblings}</p>
                  <p>Live With Family: {loggedInUser.profile.liveWithFamily}</p>
                </>
              ) : (
                <>Loading</>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="mt-5 min-h-full mb-8 px-2 py-4 border w-[910%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
              <form onSubmit={handleSubmit(handleSav)}>
                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="familyType"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Family Type"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.familyType?.message}
                        options={[
                          { value: "nuclear", label: "Nuclear" },
                          { value: "joint", label: "Joint" },
                          { value: "nofamily", label: "No Family/Orphan" },
                        ]}
                      />
                    )}
                  />
                  <Controller
                    name="familyValues"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Family Values"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.familyValues?.message}
                        options={[
                          { value: "traditional", label: "Traditional" },
                          { value: "moderate", label: "Moderate" },
                          { value: "liberal", label: "Liberal" },
                        ]}
                      />
                    )}
                  />
                </div>

                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="gotra"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Enter your gotra"
                        classes3="w-[40%]"
                        classes="px-2"
                        classes2="block text-md lg:text-lg xl:text-xl"
                        type="text"
                        placeholder="Enter your gotra (if applied)"
                      />
                    )}
                  />
                  <Controller
                    name="physicalDisability"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Physical Disability"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.physicalDisability?.message}
                        options={[
                          { value: "Yes", label: "Yes" },
                          { value: "No", label: "No" },
                        ]}
                      />
                    )}
                  />
                </div>
                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="highestEducation"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Highest Education"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.highestEducation?.message}
                        options={highestEducationOptions}
                      />
                    )}
                  />
                  <Controller
                    name="employedIn"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Employed In"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.employedIn?.message}
                        options={employedInOptions}
                      />
                    )}
                  />
                </div>

                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="income"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Income"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.income?.message}
                        options={incomeOptions}
                      />
                    )}
                  />
                  <Controller
                    name="occupation"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Occupation"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.occupation?.message}
                        options={occupationOptions}
                      />
                    )}
                  />
                </div>
                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="noOfFamilyMembers"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Number of Family Members"
                        classes3="w-[40%]"
                        classes="px-2"
                        classes2="block text-md lg:text-lg xl:text-xl"
                        type="number"
                        placeholder="Enter number of your family members"
                      />
                    )}
                  />
                  <Controller
                    name="noOfSiblings"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Number of Siblings"
                        classes3="w-[40%]"
                        classes="px-2"
                        classes2="block text-md lg:text-lg xl:text-xl"
                        type="number"
                        placeholder="Enter number of siblings"
                      />
                    )}
                  />
                </div>
                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="liveWithFamily"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Do you live with family?"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.liveWithFamily?.message}
                        options={liveWithFamilyOptions}
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

export default ReligiousInfo;

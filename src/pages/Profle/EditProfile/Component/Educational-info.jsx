import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/ProfileForm/input";
import InputSelect from "../../../../components/ProfileForm/select";
import { useForm, Controller } from "react-hook-form";
import profileSvc from "../../../../services/profile.service";
import { setLoggedInUser } from "../../../../reducers/user.reducer";

const EducationalInfo = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);
  const [editMode, setEditMode] = useState(false);
  const [detail, setDetail] = useState();
  const casteOptions = [
    { value: "brahmin", label: "Brahmin" },
    { value: "chhetri", label: "chhetri" },
    { value: "thakuri", label: "Thakuri" },
    { value: "magar", label: "Magar" },
    { value: "tamang", label: "Tamang" },
    { value: "sherpa", label: "Sherpa" },
    { value: "newar", label: "Newar" },
  ];
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

  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "awatingdivorce", label: "Awating Divorce" },
    { value: "divorced", label: "Divorced" },
  ];

  const ageOptions = [
    { value: "18-25", label: "18 - 25 years" },
    { value: "26-30", label: "26 - 30 years" },
    { value: "31-35", label: "31 - 35 years" },
    { value: "36-40", label: "36 - 40 years" },
    { value: "41-50", label: "41 - 50 years" },
    { value: "51+", label: "51 years and above" },
  ];

  const incomeOptions = [
    { value: "lessThan1Lakh", label: "Less than ₹1 Lakh" },
    { value: "1Lakhto3Lakh", label: "₹1 Lakh - ₹3 Lakh" },
    { value: "3Lakhto5Lakh", label: "₹3 Lakh - ₹5 Lakh" },
    { value: "5Lakhto10Lakh", label: "₹5 Lakh - ₹10 Lakh" },
    { value: "moreThan10Lakh", label: "More than ₹10 Lakh" },
  ];

  const heightOptions = [
    { value: "short", label: "Short (Below 5ft)" },
    { value: "average", label: "Average (5ft - 6ft)" },
    { value: "tall", label: "Tall (Above 6ft)" },
  ];

  const familyValuesOptions = [
    { value: "traditional", label: "Traditional" },
    { value: "moderate", label: "Moderate" },
    { value: "liberal", label: "Liberal" },
  ];

  const educationOptions = [
    { value: "highSchool", label: "High School" },
    { value: "associateDegree", label: "Associate Degree" },
    { value: "bachelorsDegree", label: "Bachelor's Degree" },
    { value: "mastersDegree", label: "Master's Degree" },
    { value: "doctorate", label: "Doctorate" },
  ];

  const occupationOptions = [
    { value: "engineer", label: "Engineer" },
    { value: "doctor", label: "Doctor" },
    { value: "teacher", label: "Teacher" },
    { value: "softwareDeveloper", label: "Software Developer" },
    { value: "entrepreneur", label: "Entrepreneur" },
  ];
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

  const handleSav = async (data) => {
    try {
      let submit = await profileSvc.thirdEdit(data);
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
      setValue("preferredReligion", detail.preferredReligion);
      setValue("preferredMaritalStatus", detail.preferredMaritalStatus);
      setValue("preferredAge", detail.preferredAge);
      setValue("preferredHeight", detail.preferredHeight);
      setValue("preferredCaste", detail.preferredCaste);
      setValue("preferredMotherTongue", detail.preferredMotherTongue);
      setValue("preferredFamilyValues", detail.preferredFamilyValues);
      setValue("preferredEducation", detail.preferredEducation);
      setValue("preferredOccupation", detail.preferredOccupation);
      setValue("preferredIncome", detail.preferredIncome);
    }
  }, [detail]);

  return (
    <>
      <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto flex justify-between rounded-md shadow-md">
        {!editMode ? (
          <>
            <div className="capitalize bg-slate-300 p-5 mb-5 max-w-2xl mx-auto">
              <h3 className="text-lg font-bold mb-3">
                Preferrence Information
              </h3>
              {loggedInUser ? (
                <>
                  {" "}
                  <p>
                    Preferred Religion:{" "}
                    {loggedInUser?.profile?.preferredReligion}
                  </p>
                  {/* <p>Age: {calculateAge(loggedInUser.profile.dateOfBirth)}</p> */}
                  <p>
                    Preferred Marital Status:{" "}
                    {loggedInUser.profile.preferredMaritalStatus}
                  </p>
                  <p>Preferred Age: {loggedInUser.profile.preferredAge}</p>
                  <p>
                    Preferred Height: {loggedInUser.profile.preferredHeight}
                  </p>
                  <p>Preferred Caste: {loggedInUser.profile.preferredCaste}</p>
                  <p>
                    Preferred Mother Tongue:{" "}
                    {loggedInUser.profile.preferredMotherTongue}
                  </p>
                  <p>
                    Preferred Family Values:{" "}
                    {loggedInUser.profile.preferredFamilyValues}
                  </p>
                  <p>
                    Preferred Education:{" "}
                    {loggedInUser.profile.preferredEducation}
                  </p>
                  <p>
                    Preferred Occupation:{" "}
                    {loggedInUser.profile.preferredOccupation}
                  </p>
                  <p>
                    Preferred Income: {loggedInUser.profile.preferredIncome}
                  </p>
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
                    name="preferredReligion"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Religion"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredReligion?.message}
                        options={religionOptions}
                      />
                    )}
                  />
                  <Controller
                    name="preferredMaritalStatus"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Marital Status"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredMaritalStatus?.message}
                        options={maritalStatusOptions}
                      />
                    )}
                  />
                </div>

                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="preferredAge"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Age"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredAge?.message}
                        options={ageOptions}
                      />
                    )}
                  />
                  <Controller
                    name="preferredHeight"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Height"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredHeight?.message}
                        options={heightOptions}
                      />
                    )}
                  />
                </div>
                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="preferredCaste"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Caste"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredCaste?.message}
                        options={casteOptions}
                      />
                    )}
                  />
                  <Controller
                    name="preferredMotherTongue"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Preferred Mother Tongue"
                        classes3="w-[40%]"
                        classes="px-2"
                        classes2="block lg:text-lg xl:text-xl"
                        type="text"
                        placeholder="Enter your preferred mother tongue"
                        error={errors.preferredMotherTongue?.message}
                      />
                    )}
                  />
                </div>

                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="preferredFamilyValues"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Family Values"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredFamilyValues?.message}
                        options={familyValuesOptions}
                      />
                    )}
                  />
                  <Controller
                    name="preferredEducation"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Education"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredEducation?.message}
                        options={educationOptions}
                      />
                    )}
                  />
                </div>

                <div className="w-full flex justify-around items-center">
                  <Controller
                    name="preferredOccupation"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Occupation"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredOccupation?.message}
                        options={occupationOptions}
                      />
                    )}
                  />
                  <Controller
                    name="preferredIncome"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        {...field}
                        label="Preferred Income"
                        classes1="block text-md lg:text-lg xl:text-xl my-2"
                        classes2="xl:w-[40%] basis-[40%]"
                        setValue={setValue}
                        error={errors.preferredIncome?.message}
                        options={incomeOptions}
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

export default EducationalInfo;

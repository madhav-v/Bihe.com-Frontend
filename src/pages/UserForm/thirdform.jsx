import React from "react";
import { useForm, Controller } from "react-hook-form";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../components/ProfileForm/input";

const FORM_VALIDATION = Yup.object().shape({
  preferredReligion: Yup.string().required("Preferred Religion is required"),
  preferredMaritalStatus: Yup.string().required(
    "Preferred Marital Status is required"
  ),
  preferredAge: Yup.string().required("Preferred Age is required"),
  preferredHeight: Yup.string().required("Preferred Height is required"),
  preferredFamilyValues: Yup.string().required(
    "Preferred Family Values is required"
  ),
  preferredEducation: Yup.string().required("Preferred Education is required"),
  preferredOccupation: Yup.string().required(
    "Preferred Occupation is required"
  ),
  preferredIncome: Yup.string().required("Preferred Income is required"),
  preferredCaste: Yup.string().required("Preferred Caste is required"),
  preferredMotherTongue: Yup.string().required(
    "Preferred Mother Tongue is required"
  ),
});

function ThirdForm({
  thirdFormValues,
  setThirdFormValues,
  setCurrentFormCount,
}) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
    defaultValues: thirdFormValues,
  });

  const onSubmit = (data) => {
    setThirdFormValues(data);
    setCurrentFormCount((prev) => prev + 1);
  };
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

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-semibold w-[90%] mx-auto">
          User Preferences
        </h1>

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

        <div className="w-full flex justify-around">
          <Button
            label="Previous"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
            onClick={() => setCurrentFormCount((prev) => prev - 1)}
          />
          <Button
            type="submit"
            label="Next"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
          />
        </div>
      </form>
    </div>
  );
}

export default ThirdForm;

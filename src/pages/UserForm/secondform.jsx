import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const FORM_VALIDATION = Yup.object().shape({
  familyType: Yup.string().required("Family Type is required"),
  familyValues: Yup.string().required("Family Values is required"),
  gotra: Yup.string(),
  physicalDisability: Yup.string().required("Required"),
  highestEducation: Yup.string().required("Highest Education is required"),
  employedIn: Yup.string().required("Employed In is required"),
  income: Yup.string().required("Income is required"),
  occupation: Yup.string().required("Occupation is required"),
});

function SecondForm({
  secondFormValues,
  setSecondFormValues,
  setCurrentFormCount,
}) {
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
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
    defaultValues: secondFormValues,
  });

  const onSubmit = (data) => {
    setSecondFormValues(data);
    setCurrentFormCount((prev) => prev + 1);
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <form className=" mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-bold w-[90%] mx-auto">
          Personal Information
        </h1>

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

export default SecondForm;

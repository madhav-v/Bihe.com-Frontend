import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FORM_VALIDATION = Yup.object().shape({
  ageWeight: Yup.number(),
  heightWeight: Yup.number(),
  religionWeight: Yup.number(),
  casteWeight: Yup.number(),
  educational_degreeWeight: Yup.number(),
  annualIncomeWeight: Yup.number(),
  marital_statusWeight: Yup.number(),
  motherTongeWeight: Yup.number(),
});
function FourthForm({
  fourthFormValues,
  setFourthFormValues,
  setCurrentFormCount,
}) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
    defaultValues: fourthFormValues,
  });

  const onSubmit = (data) => {
    setFourthFormValues(data);
    setCurrentFormCount((prev) => prev + 1);
  };

  const weightOptions = [
    { value: "0.5", label: "Very Important" },
    { value: "0.2", label: "Least Important" },
    { value: "0", label: "Not Important" },
  ];

  const handlePrevClick = () => {
    setCurrentFormCount((prev) => prev - 1);
  };


  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl w-[90%] mx-auto mb-1 font-bold">
          How Important are they to you?
        </h1>

        <div className="w-full flex justify-around items-center">
          <Controller
            name="ageWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Age"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.ageWeight?.message}
                options={weightOptions}
                value={fourthFormValues.ageWeight}
              />
            )}
          />
          <Controller
            name="heightWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Height"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.heightWeight?.message}
                options={weightOptions}
                value={fourthFormValues.heightWeight}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-around items-center">
          <Controller
            name="religionWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Religion"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.religionWeight?.message}
                options={weightOptions}
                value={fourthFormValues.religionWeight}
              />
            )}
          />
          <Controller
            name="casteWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Caste"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.casteWeight?.message}
                options={weightOptions}
                value={fourthFormValues.casteWeight}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-around items-center">
          <Controller
            name="educational_degreeWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Educational Degree"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.educational_degreeWeight?.message}
                options={weightOptions}
                value={fourthFormValues.educational_degreeWeight}
              />
            )}
          />
          <Controller
            name="annualIncomeWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Annual Income"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.annualIncomeWeight?.message}
                options={weightOptions}
                value={fourthFormValues.annualIncomeWeight}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-around items-center">
          <Controller
            name="marital_statusWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Marital Status"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.marital_statusWeight?.message}
                options={weightOptions}
                value={fourthFormValues.marital_statusWeight}
              />
            )}
          />
          <Controller
            name="motherTongeWeight"
            control={control}
            render={({ field }) => (
              <InputSelect
                {...field}
                label="Mother Tongue"
                classes1="block text-md lg:text-lg xl:text-xl my-2"
                classes2="xl:w-[40%] basis-[40%]"
                setValue={setValue}
                error={errors.motherTongeWeight?.message}
                options={weightOptions}
                value={fourthFormValues.motherTongeWeight}
              />
            )}
          />
        </div>
        <div className="w-full flex justify-around">
          <Button
            label="Previous"
            classes="px-16 py-3 rounded-xl btnnext text-white"
            classes2="w-full flex justify-center py-4"
            onClick={() => handlePrevClick()}
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

export default FourthForm;

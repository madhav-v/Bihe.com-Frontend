import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import Button from "../../components/ProfileForm/profilebutton";
import "./css/PersonaldetailForm.css";
import { format } from "date-fns";

const FirstForm = ({
  firstFormValues,
  setFirstFormValues,
  currentFormCount,
  setCurrentFormCount,
}) => {
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

  const FORM_VALIDATION = Yup.object().shape({
    fullname: Yup.string().required("Full Name is required"),
    sex: Yup.string().required("Gender is required"),
    religion: Yup.string().required("Religion is required"),
    motherTongue: Yup.string().required("Mother Tongue is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    address: Yup.string().required("Address is required"),
    marital_status: Yup.string().required("Marital Status is required"),
    height: Yup.string().required("Height is required"),
    caste: Yup.string().required("Caste is required"),
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FORM_VALIDATION),
    defaultValues: firstFormValues,
  });

  const handleNextClick = async (data) => {
    const formattedData = {
      ...data,
      dateOfBirth: format(new Date(data.dateOfBirth), "yyyy-MM-dd"),
    };
    setFirstFormValues(formattedData);
    setCurrentFormCount((prev) => prev + 1);
  };

  return (
    <div className="mt-16 min-h-full mb-8 px-2 py-4 border w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-white rounded-lg mx-auto">
      <h1 className="text-2xl w-full text-center font-semibold xl:text-3xl my-4">
        Let's set up your account.
      </h1>

      <form className="mx-auto" onSubmit={handleSubmit(handleNextClick)}>
        <h1 className="text-2xl w-[90%] font-bold mx-auto">
          Basic Information
        </h1>

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
                value={firstFormValues.sex}
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
                value={firstFormValues.religion}
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
                value={firstFormValues.religion}
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
                value={firstFormValues.marital_status}
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
                value={firstFormValues.height}
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
                value={firstFormValues.religion}
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

        <div className="w-full flex justify-center">
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
};

export default FirstForm;

import { useState, useRef, useEffect } from "react";
import Input from "../../components/ProfileForm/input";
import InputSelect from "../../components/ProfileForm/select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import profileSvc from "../../services/profile.service";
import Loading from "../error/loading";
import { VscDeviceCamera } from "react-icons/vsc";
import { useNavigate, useParams } from "react-router-dom";

const FormEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [detail, setDetail] = useState();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const ext = file.name.split(".").pop().toLowerCase();
    const supportedFormats = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "svg",
    ];

    if (supportedFormats.includes(ext)) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      formik.setFieldValue("image", file);
    } else {
      formik.setErrors({ image: "File format not supported" });
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const ProfileSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    religion: Yup.string().required("Required"),
    caste: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    maritalStatus: Yup.string().required("Required"),
    height: Yup.string().required("Required"),
    physicalDisability: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    smokeOrDrink: Yup.string().required("Required"),
    familyType: Yup.string().required("Required"),
    familyValue: Yup.string().required("Required"),
    parentalStatus: Yup.string().required("Required"),
    numberOfSiblings: Yup.string().required("Required"),
    numberOfFamilyMembers: Yup.string().required("Required"),
    familyAddress: Yup.string().required("Required"),
    motherTongue: Yup.string().required("Required"),
    gotra: Yup.string().required("Required"),
    educationalDegree: Yup.string().required("Required"),
    college: Yup.string().required("Required"),
    occupation: Yup.string().required("Required"),
    sector: Yup.string().required("Required"),
    annualIncome: Yup.string().required("Required"),
    companyName: Yup.string().required("Required"),
    maxAge: Yup.string().required("Required"),
    minHeight: Yup.string().required("Required"),
    maxHeight: Yup.string().required("Required"),
    minAge: Yup.string().required("Required"),
    preferredReligion: Yup.string().required("Required"),
    preferredCaste: Yup.string().required("Required"),
    preferredEducation: Yup.string().required("Required"),
    preferredOccupation: Yup.string().required("Required"),
    preferredSector: Yup.string().required("Required"),
    preferredAnnualIncome: Yup.string().required("Required"),
    preferredMaritalStatus: Yup.string().required("Required"),
    preferredMotherTongue: Yup.string().required("Required"),
    image: Yup.mixed().required("Image is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      sex: "",
      religion: "",
      caste: "",
      dateOfBirth: "",
      maritalStatus: "",
      height: "",
      physicalDisability: "",
      address: "",
      smokeOrDrink: "",
      familyType: "",
      familyValue: "",
      parentalStatus: "",
      numberOfSiblings: "",
      numberOfFamilyMembers: "",
      familyAddress: "",
      motherTongue: "",
      gotra: "",
      educationalDegree: "",
      college: "",
      occupation: "",
      sector: "",
      annualIncome: "",
      companyName: "",
      minAge: "",
      maxAge: "",
      minHeight: "",
      maxHeight: "",
      preferredReligion: "",
      preferredCaste: "",
      preferredEducation: "",
      preferredOccupation: "",
      preferredSector: "",
      preferredAnnualIncome: "",
      preferredMotherTongue: "",
      preferredMaritalStatus: "",
      image: null,
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await profileSvc.updateProfile(values, params.id);
        if (response.status) {
          toast.success("Profile Updated");
          navigate("/user");
        } else {
          toast.error("Something went wrong");
        }
      } catch (exception) {
        setIsLoading(false);
        toast.error("Cannot Create Profile at this moment");
        console.log(exception);
      }
    },
  });
  const [defaultUrl, setDefaultUrl] = useState(null);

  const getProfileDetails = async () => {
    try {
      let response = await profileSvc.getProfileById(params.id);
      console.log(response.result);
      setDetail(response.result);
    } catch (exception) {
      toast.error("Something went wrong");
      navigate("/user");
    }
  };

  useEffect(() => {
    if (!defaultUrl) {
      setDefaultUrl(
        "https://www.caltrain.com/files/images/2021-09/default.jpg"
      );
    }
  }, []);

  useEffect(() => {
    if (detail) {
      formik.setValues({
        fullName: detail.fullName,
        sex: detail.sex,
        religion: detail.religion,
        caste: detail.caste,
        dateOfBirth: detail.dateOfBirth,
        maritalStatus: detail.maritalStatus,
        height: detail.height,
        physicalDisability: detail.physicalDisability,
        address: detail.address,
        smokeOrDrink: detail.smokeOrDrink,
        familyType: detail.familyType,
        familyValue: detail.familyValue,
        parentalStatus: detail.parentalStatus,
        numberOfSiblings: detail.numberOfSiblings,
        numberOfFamilyMembers: detail.numberOfFamilyMembers,
        familyAddress: detail.familyAddress,
        motherTongue: detail.motherTongue,
        gotra: detail.gotra,
        educationalDegree: detail.educationalDegree,
        college: detail.college,
        occupation: detail.occupation,
        sector: detail.sector,
        annualIncome: detail.annualIncome,
        companyName: detail.companyName,
        minAge: detail.minAge,
        maxAge: detail.maxAge,
        minHeight: detail.minHeight,
        maxHeight: detail.maxHeight,
        preferredReligion: detail.preferredReligion,
        preferredCaste: detail.preferredCaste,
        preferredEducation: detail.preferredEducation,
        preferredOccupation: detail.preferredOccupation,
        preferredSector: detail.preferredSector,
        preferredAnnualIncome: detail.preferredAnnualIncome,
        preferredMotherTongue: detail.preferredMotherTongue,
        preferredMaritalStatus: detail.preferredMaritalStatus,
        image: detail.image,
      });
    }
  }, [detail]);

  useEffect(() => {
    getProfileDetails();
  }, []);
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
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
  const casteOptions = [
    { value: "brahmin", label: "Brahmin" },
    { value: "chhetri", label: "chhetri" },
    { value: "thakuri", label: "Thakuri" },
    { value: "magar", label: "Magar" },
    { value: "tamang", label: "Tamang" },
    { value: "sherpa", label: "Sherpa" },
    { value: "newar", label: "Newar" },
  ];
  const maritalStatusOptions = [
    { value: "unmarried", label: "Unmarried" },
    { value: "awatingDivorcee", label: "Awating Divorce" },
    { value: "divorced", label: "Divorced" },
  ];
  const smokeOrDrinkOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
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
  const disabilityOptions = [
    { value: "no", label: "No" },
    { value: "physicalDisability", label: "Physical Disability" },
  ];
  const familytypeOptions = [
    { value: "nuclear", label: "Nuclear" },
    { value: "joint", label: "Joint" },
    { value: "nofamily", label: "No Family/Orphan" },
  ];
  const familyValueOptions = [
    { value: "traditional", label: "Traditional" },
    { value: "moderate", label: "Moderate" },
    { value: "liberal", label: "Liberal" },
  ];
  const parentStatusOptions = [
    { value: "bothAlive", label: "Both Alive" },
    { value: "fatherPassedAway", label: "Father Passed Away" },
    { value: "motherPassedAway", label: "Mother Passed Away" },
    { value: "bothPassedAway", label: "Both Passed Away" },
  ];
  const gotraOptions = [
    { value: "Bharadwaj", label: "Bharadwaj" },
    { value: "Vashishtha", label: "Vashishtha" },
    { value: "Kashyapa", label: "Kashyapa" },
    { value: "Garg", label: "Garg" },
    { value: "Vatsa", label: "Vatsa" },
    { value: "Shandilya", label: "Shandilya" },
    { value: "Atri", label: "Atri" },
    { value: "Dhanvantari", label: "Dhanvantari" },
    { value: "Gautam", label: "Gautam" },
    { value: "Kaushik", label: "Kaushik" },
    { value: "Jamadagni", label: "Jamadagni" },
    { value: "Parashara", label: "Parashara" },
    { value: "Vishwamitra", label: "Vishwamitra" },
    { value: "Bhrigu", label: "Bhrigu" },
    { value: "Shukla", label: "Shukla" },
    { value: "Sharma", label: "Sharma" },
    { value: "Chaturvedi", label: "Chaturvedi" },
    { value: "Pandey", label: "Pandey" },
    { value: "Upadhyay", label: "Upadhyay" },
    { value: "Joshi", label: "Joshi" },
    { value: "Goswami", label: "Goswami" },
    { value: "Saraswat", label: "Saraswat" },
  ];
  const educationQualificationOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
    { value: "doctarate", label: "P.h.d/Doctorate" },
    { value: "highSchool", label: "High School" },
    { value: "literate", label: "Literate" },
    { value: "illiterate", label: "Illiterate" },
  ];
  const sectorOptions = [
    { value: "private", label: "Private Company" },
    { value: "government", label: "Government" },
    { value: "ngo", label: "NGO's/INGO's" },
    { value: "selfEmployed", label: "Self Employed" },
    { value: "unEmployed", label: "Unemployed" },
  ];
  const annualIncomeOptions = [
    { value: "2L", label: "Upto 2L" },
    { value: "3L", label: "Upto 3L" },
    { value: "3L-4L", label: "3L-4L" },
    { value: "4L-5L", label: "4L-5L" },
    { value: "5L-6L", label: "5L-6L" },
    { value: "6L-7L", label: "6L-7L" },
    { value: "7L-8L", label: "7L-8L" },
    { value: "8L-9L", label: "8L-9L" },
    { value: "9L-10L", label: "9L-10L" },
    { value: "10L-15L", label: "10L-15L" },
    { value: "15L-20L", label: "15L-20L" },
    { value: "20L-30L", label: "20L-30L" },
    { value: "abover30L", label: "Above 30L" },
  ];
  const occupationOptions = [
    { value: "student", label: "Student" },
    { value: "employed", label: "Employed" },
    { value: "business", label: "Business Owner" },
    { value: "freelancer", label: "Freelancer" },
    { value: "homemaker", label: "Homemaker" },
    { value: "unemployed", label: "Unemployed" },
    { value: "retired", label: "Retired" },
    { value: "other", label: "Other" },
  ];
  return (
    <>
      <div className="mt-0 min-h-full mb-8 px-2 py-4  w-[90%] md:w-[80%] lg:w-[70%] xl:w-[65%] bg-red-50  rounded-lg mx-auto">
        {isLoading && <Loading />}
        <h1 className="text-2xl w-full text-center font-semibold xl:text-3xl my-4">
          Let's update your profile.
        </h1>

        <form className="mx-auto" onSubmit={formik.handleSubmit}>
          <h1 className="text-2xl w-[90%] font-bold mx-auto">
            Basic Information
          </h1>

          <div className="w-full flex justify-around items-center">
            <Input
              name="fullName"
              label="Full Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Full Name"
              value={formik.values?.fullName}
              onChange={formik.handleChange}
              error={formik.errors.fullName}
            />
            <InputSelect
              value={formik.values?.sex}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  sex: selcOpt,
                });
              }}
              name="sex"
              label="Sex"
              classes1="block text-xl my-1"
              classes2="xl:w-[40%] basis-[40%]"
              options={genderOptions}
              error={formik.errors.sex}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              name="religion"
              label="Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
              error={formik.errors.religion}
              value={formik.values?.religion}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  religion: selcOpt,
                });
              }}
            />

            <InputSelect
              value={formik.values?.caste}
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  caste: selcOpt,
                });
              }}
              name="caste"
              label="Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
              error={formik.errors.caste}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              value={formik.values?.dateOfBirth}
              name="dateOfBirth"
              label="Date of Birth"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="date"
              placeholder="Select Date of Birth"
              error={formik.errors.dateOfBirth}
            />

            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  maritalStatus: selcOpt,
                });
              }}
              name="maritalStatus"
              label="Marital Status"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={maritalStatusOptions}
              value={formik.values?.maritalStatus}
              error={formik.errors.maritalStatus}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  height: selcOpt,
                });
              }}
              name="height"
              label="Your Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              value={formik.values?.height}
              options={heightOptions}
              error={formik.errors.height}
            />

            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  physicalDisability: selcOpt,
                });
              }}
              name="physicalDisability"
              label="Any Disability"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={disabilityOptions}
              value={formik.values?.physicalDisability}
              error={formik.errors.physicalDisability}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              value={formik.values?.address}
              name="address"
              label="Where do you live ?"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block xl:text-xl xl:text-xl lg:text-lg"
              type="text"
              placeholder="Enter your current address"
              error={formik.errors.address}
            />

            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  smokeOrDrink: selcOpt,
                });
              }}
              name="smokeOrDrink"
              label="Smoke or Drink"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={smokeOrDrinkOptions}
              error={formik.errors.smokeOrDrink}
              value={formik.values?.smokeOrDrink}
            />
          </div>
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Family Information
          </h1>
          <div className=" w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  familyType: selcOpt,
                });
              }}
              name="familyType"
              label="Family Type"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familytypeOptions}
              value={formik.values?.familyType}
              error={formik.errors.familyType}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  familyValue: selcOpt,
                });
              }}
              name="familyValue"
              label="Family Values"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={familyValueOptions}
              value={formik.values?.familyValue}
              error={formik.errors.familyValue}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  parentalStatus: selcOpt,
                });
              }}
              name="parentalStatus"
              label="Parent Status"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={parentStatusOptions}
              value={formik.values?.parentalStatus}
              error={formik.errors.parentalStatus}
            />
            <Input
              onChange={formik.handleChange}
              name="numberOfSiblings"
              label="Number of Siblings"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Siblings"
              value={formik.values?.numberOfSiblings}
              error={formik.errors.numberOfSiblings}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              name="numberOfFamilyMembers"
              label="Number of Family Members"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Number of Family Member"
              value={formik.values?.numberOfFamilyMembers}
              error={formik.errors.numberOfFamilyMembers}
            />
            <Input
              onChange={formik.handleChange}
              name="familyAddress"
              label="Family Address"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Family Address"
              value={formik.values?.familyAddress}
              error={formik.errors.familyAddress}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              name="motherTongue"
              label="Mother Tongue"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="texr"
              placeholder="Enter Your Mother Tongue"
              value={formik.values?.motherTongue}
              error={formik.errors.motherTongue}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  gotra: selcOpt,
                });
              }}
              name="gotra"
              label="Gotra"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={gotraOptions}
              value={formik.values?.gotra}
              error={formik.errors.gotra}
            />
          </div>
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Education Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  educationalDegree: selcOpt,
                });
              }}
              name="educationalDegree"
              label="Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
              value={formik.values?.educationalDegree}
              error={formik.errors.educationalDegree}
            />
            <Input
              onChange={formik.handleChange}
              name="college"
              label="College Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl my-2"
              type="text"
              placeholder="Enter College Name"
              value={formik.values?.college}
              error={formik.errors.college}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  occupation: selcOpt,
                });
              }}
              name="occupation"
              label="Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
              value={formik.values?.occupation}
              error={formik.errors.occupation}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  sector: selcOpt,
                });
              }}
              name="sector"
              label="Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
              value={formik.values?.sector}
              error={formik.errors.sector}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  annualIncome: selcOpt,
                });
              }}
              name="annualIncome"
              label="Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
              value={formik.values?.annualIncome}
              error={formik.errors.annualIncome}
            />
            <Input
              onChange={formik.handleChange}
              name="companyName"
              label="Company Name"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Enter Company Name"
              value={formik.values?.companyName}
              error={formik.errors.companyName}
            />
          </div>
          <div className="w-[35%] mt-7 bg-white mx-auto flex justify-between shadow-md items-center rounded-3xl overflow-hidden">
            <div className="w-full min-h-[50vh] h-full flex flex-col justify-center items-center bg-white">
              <h3 className="text-center font-semibold text-2xl mb-3">
                Upload a profile photo.
              </h3>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="relative w-[200px] h-[200px] rounded-[50%]"
              >
                <img
                  className="rounded-full object-cover w-full h-full object-center"
                  src={
                    import.meta.env.VITE_IMAGE_URL + "/profile/" + detail?.image
                  }
                  alt=""
                />
                <span className="absolute right-0 bottom-0">
                  <VscDeviceCamera size={30} />
                </span>
              </label>
              <button
                className="px-4 py-2 bg-red-500 rounded-xl  text-white text-xl my-3"
                onClick={() => document.getElementById("imageInput").click()}
              >
                Add a Photo +
              </button>
              <span className="text-red-500">
                {formik.touched.image && formik.errors?.image}
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-2xl w-[90%] font-bold mx-auto">
            Preference Information
          </h1>
          <div className="w-full flex justify-around items-center">
            <Input
              onChange={formik.handleChange}
              name="minAge"
              label="Minimun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Minimun Age"
              value={formik.values?.minAge}
              error={formik.errors.minAge}
            />
            <Input
              onChange={formik.handleChange}
              name="maxAge"
              label="Maximun Age"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="number"
              placeholder="Enter Your Preferred Maximun Age"
              value={formik.values?.maxAge}
              error={formik.errors.maxAge}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  minHeight: selcOpt,
                });
              }}
              name="minHeight"
              label="Minimum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
              value={formik.values?.minHeight}
              error={formik.errors.minHeight}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  maxHeight: selcOpt,
                });
              }}
              name="maxHeight"
              label="Maximum Height "
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={heightOptions}
              value={formik.values?.maxHeight}
              error={formik.errors.maxHeight}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredReligion: selcOpt,
                });
              }}
              name="preferredReligion"
              label="Preferred Religion"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[70%] basis-[40%]"
              options={religionOptions}
              value={formik.values?.preferredReligion}
              error={formik.errors.preferredReligion}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredCaste: selcOpt,
                });
              }}
              name="preferredCaste"
              label="Preferred Caste"
              classes1="block text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={casteOptions}
              value={formik.values?.preferredCaste}
              error={formik.errors.preferredCaste}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredEducation: selcOpt,
                });
              }}
              name="preferredEducation"
              label="Preferred Education Qualification"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={educationQualificationOptions}
              value={formik.values?.preferredEducation}
              error={formik.errors.preferredEducation}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredOccupation: selcOpt,
                });
              }}
              name="preferredOccupation"
              label="Preferred Occupation"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={occupationOptions}
              value={formik.values?.preferredOccupation}
              error={formik.errors.preferredOccupation}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredSector: selcOpt,
                });
              }}
              name="preferredSector"
              label="Preffered Field/Subject/Program"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={sectorOptions}
              value={formik.values?.preferredSector}
              error={formik.errors.preferredSector}
            />
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredAnnualIncome: selcOpt,
                });
              }}
              name="preferredAnnualIncome"
              label="Preffered Annual Income"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={annualIncomeOptions}
              value={formik.values?.preferredAnnualIncome}
              error={formik.errors.preferredAnnualIncome}
            />
          </div>
          <div className="w-full flex justify-around items-center">
            <InputSelect
              onChange={(selcOpt) => {
                formik.setValues({
                  ...formik.values,
                  preferredMaritalStatus: selcOpt,
                });
              }}
              name="preferredMaritalStatus"
              label="Preffered Marital Status"
              classes1="block text-md lg:text-lg xl:text-xl my-2"
              classes2="xl:w-[40%] basis-[40%]"
              options={maritalStatusOptions}
              value={formik.values?.preferredMaritalStatus}
              error={formik.errors.preferredMaritalStatus}
            />
            <Input
              name="preferredMotherTongue"
              label="Preferred Mother Tongue"
              classes3="w-[40%]"
              classes="px-2"
              classes2="block lg:text-lg xl:text-xl"
              type="text"
              placeholder="Preferred Mother Tongue"
              value={formik.values?.preferredMotherTongue}
              onChange={formik.handleChange}
              error={formik.errors.preferredMotherTongue}
            />
          </div>
          <div className="w-full mt-5 flex justify-around items-center">
            <button
              type="submit"
              className="w-40 mb-4 mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormEdit;

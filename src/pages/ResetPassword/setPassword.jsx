import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import login from "/login.png";
import * as Yup from "yup";
import { useState } from "react";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import Loading from "../error/loading";

const SetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email"),
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(6).required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        console.log(values);
        const response = await authSvc.resetPassword(
          values.email,
          values.password
        );

        toast.success("Password reset successfull. Please Login");
        navigate("/login");
      } catch (exception) {
        setIsLoading(false);
        toast.error("Something Went Wrong");
        console.log("Error", exception);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen justify-center items-center mx-5">
      {isLoading && <Loading />}
      <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-semibold mb-6">Change your password</h1>
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <PasswordField
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            error={formik.errors.password}
          />
          <PasswordField
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
            error={formik.errors.confirmPassword}
          />
          <Button text="Set New Password" />
        </form>
      </div>
      <div className="hidden md:block ">
        <img src={login} alt="Login" className="w-[40rem]" />
      </div>
    </div>
  );
};

export default SetPassword;

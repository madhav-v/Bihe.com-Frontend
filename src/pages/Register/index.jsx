import { useForm, Controller } from "react-hook-form";
import login from "/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import TextField from "../../components/TextField";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import Loading from "../error/loading";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      if (!data.agreeToTerms) {
        toast.error("You must agree to terms");
      }
      const { agreeToTerms, ...requestData } = data;
      requestData.role = "user";
      let response = await authSvc.register(requestData);
      if (response.status) {
        toast.success("Registration Successful. Login to continue");
        navigate("/login");
      }
    } catch (exception) {
      setIsLoading(false);
      toast.error("Something Went Wrong");
      throw exception;
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center mx-5">
        {isLoading && <Loading />}
        <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
          <h1 className="text-4xl font-semibold mb-6">Create an Account</h1>
          <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("role")} />
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Full Name"
                  id="name"
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    setValue("name", e.target.value);
                    field.onChange(e);
                  }}
                  error={errors.name?.message}
                />
              )}
              rules={{ required: "Required" }}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Email Address"
                  id="email"
                  type="text"
                  value={field.value}
                  onChange={(e) => {
                    setValue("email", e.target.value);
                    field.onChange(e);
                  }}
                  error={errors.email?.message}
                />
              )}
              rules={{
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              }}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <PasswordField
                  id="password"
                  value={field.value}
                  onChange={(e) => {
                    setValue("password", e.target.value);
                    field.onChange(e);
                  }}
                  showPassword={showPassword}
                  onTogglePassword={togglePasswordVisibility}
                  error={errors.password?.message}
                />
              )}
              rules={{
                required: "Required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
            />
            <div className="mb-2">
              <label>
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={isTermsChecked}
                  onChange={(e) => {
                    setIsTermsChecked(!isTermsChecked);
                    setValue("agreeToTerms", e.target.checked);
                  }}
                />{" "}
                I agree to the{" "}
                <NavLink to="/terms" className="hover:underline">
                  Terms and Conditions
                </NavLink>
              </label>
            </div>
            <span className="text-red-500">{errors.agreeToTerms?.message}</span>
            <Button text="Register" />
          </form>
          <div>
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block ">
          <img src={login} alt="Login" className="w-[40rem]" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

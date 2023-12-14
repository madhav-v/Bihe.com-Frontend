import { useFormik } from "formik";
import login from "/login.png";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import authSvc from "../../services/auth.service";
import { toast } from "react-toastify";
import Loading from "../error/loading";
import { useState } from "react";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await authSvc.forgetPassword(values.email);
        localStorage.setItem("email", values.email);
        if (response.status) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      } catch (exception) {
        toast.error("Something Went Wrong");
        setIsLoading(false);
        toast.error(exception);
      }
    },
  });

  return (
    <div className="flex h-screen justify-center items-center mx-5">
      {isLoading && <Loading />}
      <div className="bg-white p-8 rounded-lg flex flex-col items-center w-full md:w-3/5 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-semibold mb-6">Enter your email</h1>
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <TextField
            label="Email Address"
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Button text="Send Email" />
        </form>
      </div>
      <div className="hidden md:block ">
        <img src={login} alt="Login" className="w-[40rem]" />
      </div>
    </div>
   
  );
};

export default ResetPassword;

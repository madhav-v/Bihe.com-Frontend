import { GoogleLogin } from "@react-oauth/google";

const SignInWithGoogle = () => {
  const SERVER_URL = import.meta.env.VITE_API_URL;
  const successResponse = () => {
    console.log("hi form google");
    window.location.href = SERVER_URL + "/oauth/google";
  };
  return (
    <GoogleLogin
      onSuccess={successResponse}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default SignInWithGoogle;

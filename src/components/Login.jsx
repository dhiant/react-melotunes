import { loginURL } from "../spotify";

const Login = () => {
  return (
    <div className="grid place-items-center h-screen bg-primaryDark">
      <img src="/assets/logo.jpg" alt="spotify_logo" className="h-40" />
      <a
        href={loginURL}
        className="uppercase p-5 font-medium text-white no-underline rounded-full bg-green"
      >
        login with spotify{" "}
      </a>
    </div>
  );
};

export default Login;

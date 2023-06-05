// Import du component et de la navbar
import LoginForm from '../../../components/auth/loginUser.component';
import Navbar from "../../../layouts/navbar/navbar";

const SignInUser = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
};
export default SignInUser;

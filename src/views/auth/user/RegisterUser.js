// Import du component et de la navbar
import RegisterForm from '../../../components/auth/registerUser.component';
import Navbar from '../../../layouts/navbar/navbar';

const SignUpUser = () => {
    return (
        <>
             <Navbar />
            <RegisterForm />
        </>
    )
}

export default SignUpUser;
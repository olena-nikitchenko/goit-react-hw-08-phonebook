import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegistaerForm/RegisterForm ';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}

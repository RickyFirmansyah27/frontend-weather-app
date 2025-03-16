
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import RegisterForm from '@/components/auth/RegisterForm';
import { authService } from '@/services/auth-service';

const Register = () => {
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details to create your account"
      backLink={{
        text: "Already have an account? Login",
        to: "/login",
      }}
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;

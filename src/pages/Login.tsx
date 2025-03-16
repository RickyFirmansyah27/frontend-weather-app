
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
// import { authService } from '@/services/authService';
import { authService } from '@/services/auth-service';

const Login = () => {
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (authService.isAuthenticated()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
      backLink={{
        text: "Don't have an account? Register",
        to: "/register",
      }}
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

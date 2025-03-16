
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import WeatherDashboard from '@/components/dashboard/WeatherDashboard';
import { authService } from '@/services/auth-service';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Check authentication
  useEffect(() => {
    if (!authService.isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);
  
  // Handle logout
  const handleLogout = () => {
    navigate('/login');
    authService.logout();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar onLogout={handleLogout} />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16">
        <WeatherDashboard />
      </main>
    </div>
  );
};

export default Dashboard;

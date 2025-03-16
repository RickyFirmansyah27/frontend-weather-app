
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  backLink?: {
    text: string;
    to: string;
  };
}

const AuthLayout = ({ children, title, subtitle, backLink }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md animate-scale-in">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-2xl font-bold tracking-tight text-primary">
                WeatherChecker
              </h1>
            </Link>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className="glass-card p-8">
            {children}
          </div>
          {backLink && (
            <div className="mt-6 text-center text-sm">
              <Link
                to={backLink.to}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {backLink.text}
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;

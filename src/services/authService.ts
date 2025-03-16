
import { toast } from "sonner";

// User type definition
export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
}

// For simplicity, we'll mock the authentication service
// In a real application, this would connect to a backend API

// Mock user database (in memory for demo purposes)
const mockUsers: User[] = [
  {
    id: "1",
    email: "demo@example.com",
    name: "Demo User",
    created_at: new Date().toISOString(),
  }
];

// Local storage keys
const USER_KEY = "weather_app_user";
const TOKEN_KEY = "weather_app_token";

export const authService = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return localStorage.getItem(TOKEN_KEY) !== null && localStorage.getItem(TOKEN_KEY) !== undefined;
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr) as User;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null;
    }
  },

  // Login
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For demo, just check if email exists and password is not empty
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      // Auto-register for demo purposes if user doesn't exist
      // In a real app, you'd throw an error here
      const newUser: User = {
        id: `user_${Date.now()}`,
        email,
        name: email.split('@')[0],
        created_at: new Date().toISOString(),
      };
      mockUsers.push(newUser);
      
      // Save user data
      localStorage.setItem(USER_KEY, JSON.stringify(newUser));
      localStorage.setItem(TOKEN_KEY, `mock_token_${Date.now()}`);
      return newUser;
    }
    
    // Save user data
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    localStorage.setItem(TOKEN_KEY, `mock_token_${Date.now()}`);
    
    return user;
  },

  // Register
  register: async (email: string, password: string, name: string): Promise<User> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Validate inputs
    if (!email || !password || !name) {
      throw new Error("All fields are required");
    }
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    
    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}`,
      email,
      name,
      created_at: new Date().toISOString(),
    };
    
    mockUsers.push(newUser);
    
    // Save user data (auto-login after registration)
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    localStorage.setItem(TOKEN_KEY, `mock_token_${Date.now()}`);
    
    return newUser;
  },

  // Logout
  logout: (): void => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    toast.success("Logged out successfully");
  },
};

// Authentication context types - will be implemented in a separate file
export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

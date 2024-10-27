import { createContext } from "react";
type Tauth = {
  email: string;
  password: string;
};
export interface AuthContextType {
  auth: Tauth | null; // Replace 'any' with the appropriate type for your auth data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAuth: React.Dispatch<React.SetStateAction<any>>; // Adjust accordingly
}

// Create the context with proper type
const AuthContext = createContext<AuthContextType | null>(null); // Default value is null

export { AuthContext };

/* eslint-disable no-unused-vars */
import { IUser } from "../User/types";

export interface IAuthContext {
  isConnected: boolean;
  setIsConnected: Function;
  checkLogin: Function;
  currentUser: IUser;
  handleSignIn: (email: string, password: string) => Promise<void>;
  error: string;
  isLoading: boolean;
  signOut: () => void;
}
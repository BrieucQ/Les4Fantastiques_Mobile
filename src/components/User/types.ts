/* eslint-disable no-unused-vars */
export interface IUsersContext {
    users: IUser[];
    getAllUsers: () => Promise<void>;
  }
  
  export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    role: string;
    email: string;
  }
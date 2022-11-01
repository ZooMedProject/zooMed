
export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  birthDate: string;
  isActive: true;
  animals: object;
}

export interface IAppointments {
  date: string;
  hour: string;
  animalsId: string;
  doctorId: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserPassword {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
}
export interface IUserReturn {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserDelete {
  isActive: boolean;
}

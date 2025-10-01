export type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  role: "user" | "admin";
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};

export type UserResponse = {
  message: string;
  user: User;
};

export type TokenResponse = {
  accessToken: string;
};

export type MessageResponse = {
  message: string;
};

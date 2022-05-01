interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

interface ILoginData {
  email: string;
  password: string;
}

export type { IFormData, IRegisterData, ILoginData };

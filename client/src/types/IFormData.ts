interface IAuthFormData {
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

interface ICreationFormData {
  title: string;
  category: string;
  price: string;
  image: Blob;
  description: string;
  location: string;
  email: string;
  phoneNumber: string;
}

export type { IAuthFormData, IRegisterData, ILoginData, ICreationFormData };

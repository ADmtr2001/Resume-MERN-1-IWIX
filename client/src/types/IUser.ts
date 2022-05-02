interface IUser {
  email: string;
  name: string;
  _id: string;
  isActivated: boolean;
  role: string;
  numOfComments: number;
  averageRating: number;
  createdAt: string;
}

export default IUser;

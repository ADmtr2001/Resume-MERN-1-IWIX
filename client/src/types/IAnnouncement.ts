export interface IAnnouncement {
  _id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  location: string;
  phoneNumber: string;
  creator: string;
  createdAt: string;
  isVip: boolean;
}

export interface GetAnnouncementsResponse {
  announcements: IAnnouncement[];
  currentPage: number;
  numberOfPages: number;
}

export interface IAnnouncement {
  id: string;
  announcement_type: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  is_published: boolean;
  vehicle_type: string;
  cover_img: string;
  photos: string[];
}

export interface IAnnouncementRequest {
  announcement_type: string;
  title: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  is_published: boolean;
  vehicle_type: string;
  cover_img: string;
  photos: string[];
}

export interface IAnnouncementUpdate {
  announcement_type?: string;
  title?: string;
  year?: number;
  mileage?: number;
  price?: number;
  description?: string;
  is_published?: boolean;
  vehicle_type?: string;
  cover_img?: string;
  photos?: string[];
}

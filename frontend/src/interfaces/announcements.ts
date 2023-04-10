import { Dispatch, ReactNode, SetStateAction } from "react";
import { IUser } from "./user";

export interface IAnnouncementContext {
  registerAnnouncement: (data: IAnnouncement) => Promise<void>;
  listAllAnnouncements: () => void;
  listAnnouncement: (announcement_id: string) => void;
  listUserAnnouncements: (user_id: string) => void;
  addAdModal: boolean;
  setAddAdModal: Dispatch<SetStateAction<boolean>>;
  successModal: boolean;
  setSuccessModal: Dispatch<SetStateAction<boolean>>;
  userAnnouncements: Array<IAnnouncement>;
  editModal: boolean;
  deleteModal: boolean;
  photoModal: boolean;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setDeleteModal: Dispatch<SetStateAction<boolean>>;
  setPhotoModal: Dispatch<SetStateAction<boolean>>;
  editAnnouncement: (data: IAnnouncement) => Promise<void>;
  deleteAnnouncement: () => Promise<void>;
  announcementId: string;
  setAnnouncementId: Dispatch<SetStateAction<string>>;
  allAnnouncements: IAnnouncement[];
  selectedAnnouncement: IAnnouncement | null;
  setSelectedAnnouncement: Dispatch<SetStateAction<IAnnouncement | null>>;
  selectedPhoto: IPhoto | null;
  setSelectedPhoto: Dispatch<SetStateAction<IPhoto | null>>;
  gallery: string[];
  setGallery: Dispatch<SetStateAction<string[]>>;
}

export interface AnnouncementProps {
  children: ReactNode;
}

export interface IAnnouncement {
  id: string;
  announcement_type: string;
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  is_published: boolean;
  vehicle_type: string;
  cover_img: string;
  photos?: IPhoto[];
  user: IUser;
}

export interface IPhoto {
  id: string;
  url: string;
}

export interface IAnnouncementAdmin {
  title: string;
  year: string;
  mileage: number;
  price: number;
  description: string;
  cover_img: string;
}

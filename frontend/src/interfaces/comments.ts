import { ReactNode } from "react";
import { IAnnouncement } from "./announcements";
import { IUser } from "./user";

export interface ICommentsContext {
  registerComment: (announcement_id: string, data: IComment) => void;
  announcementComments: Array<IComment>;
  listComments: (announcement_id: string) => void;
  updateComment: (comment_id: string, data: ICommentUpdate) => void;
  deleteComment: (comment_id: string) => void;
}

export interface CommentsProps {
  children: ReactNode;
}

export interface IComment {
  id: string;
  message: string;
  created_at: string;
  user: IUser;
  announcement: IAnnouncement;
}

export interface ICommentUpdate {
  message?: string;
}

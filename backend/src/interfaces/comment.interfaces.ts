export interface ICommentRequest {
  message: string;
  announcementId: string;
  user: string;
}

export interface IComment {
  id: string;
  message: string;
  user: string;
  announcement: string;
  created_at: Date;
}

export interface ICommentUpdate {
  message?: string;
}

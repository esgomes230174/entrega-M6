import React, { createContext, useState } from "react";
import {
  CommentsProps,
  IComment,
  ICommentsContext,
  ICommentUpdate,
} from "../../interfaces/comments";
import api from "../../services/api";

export const CommentsContext = createContext<ICommentsContext>(
  {} as ICommentsContext
);

export const CommentsProvider = ({ children }: CommentsProps) => {
  const [announcementComments, setAnnouncementComments] = useState<
    Array<IComment>
  >([]);

  const registerComment = async (announcement_id: string, data: IComment) => {
    await api
      .post<IComment>(`/comments/${announcement_id}`, data)
      .then((res) => {
        listComments(announcement_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listComments = async (announcement_id: string) => {
    await api
      .get<IComment[]>(`/comments/${announcement_id}`)
      .then((res) => {
        setAnnouncementComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateComment = async (comment_id: string, data: ICommentUpdate) => {
    await api
      .patch<IComment>(`/comments/${comment_id}`, data)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteComment = async (comment_id: string) => {
    await api
      .delete<IComment>(`/comments/${comment_id}`)
      .then((res) => {
        const findComment = announcementComments.filter(
          (comment) => comment.id !== comment_id
        );
        setAnnouncementComments(findComment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommentsContext.Provider
      value={{
        registerComment,
        announcementComments,
        listComments,
        updateComment,
        deleteComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

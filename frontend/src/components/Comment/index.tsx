import React, { useContext, useState } from "react";
import { CommentsContext } from "../../contexts/CommentsContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import { CommentDiv, CommentSettings } from "./styles";
import moment from "moment";
import { IComment } from "../../interfaces/comments";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Comment = () => {
  const { announcementComments, updateComment, deleteComment } =
    useContext(CommentsContext);
  const { user } = useContext(UserContext);

  const [editedComment, setEditedComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState("");

  const handleEditButtonClick = (comment: IComment) => {
    setEditedComment(comment.message);
    setIsEditing(true);
    setEditingCommentId(comment.id);
  };

  const handleSaveButtonClick = (comment: IComment) => {
    comment.message = editedComment;
    updateComment(comment.id, comment);
    setIsEditing(false);
    setEditingCommentId("");
  };

  const handleCommentChange = (event: any) => {
    setEditedComment(event.target.value);
  };

  return (
    <>
      {announcementComments.map((comment) => {
        const minutes = moment().diff(comment.created_at, "minutes");
        const hours = moment().diff(comment.created_at, "hours");
        const days = moment().diff(comment.created_at, "days");
        const months = moment().diff(comment.created_at, "months");
        const years = moment().diff(comment.created_at, "years");

        let time = "";
        if (years > 0) {
          time = `há ${years} ano${years > 1 ? "s" : ""}`;
        } else if (months > 0) {
          time = `há ${months} mês${months > 1 ? "es" : ""}`;
        } else if (days > 0) {
          time = `há ${days} dia${days > 1 ? "s" : ""}`;
        } else if (hours > 0) {
          time = `há ${hours} hora${hours > 1 ? "s" : ""}`;
        } else if (minutes > 0) {
          time = `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
        } else {
          time = "agora mesmo";
        }

        return (
          <CommentDiv key={comment.id}>
            <div className="comment">
              <div className="comment-info">
                <p
                  className="name_abbreviate"
                  style={{
                    backgroundColor: stringToColor(comment.user.name),
                  }}
                >
                  {nameAbbreviate(comment.user.name)}
                </p>
                <span className="name">{comment.user.name}</span>
                <div className="dot" />
                <p className="date">{time}</p>
              </div>
              {comment.user.id === user?.id && (
                <CommentSettings>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditButtonClick(comment)}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={() => deleteComment(comment.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </CommentSettings>
              )}
            </div>
            {isEditing && comment.id === editingCommentId ? (
              <div className="edit-comment">
                <textarea
                  value={editedComment}
                  onChange={handleCommentChange}
                />
                <Button
                  onClick={() => handleSaveButtonClick(comment)}
                  className="save-btn"
                  children="Salvar"
                  backgroundColor="transparent"
                  fontColor="black"
                  backgroundColorHover={""}
                />
                <Button
                  onClick={() => {
                    setIsEditing(false);
                    setEditingCommentId("");
                  }}
                  className="cancel-btn"
                  children="Cancelar"
                  backgroundColor="transparent"
                  fontColor="red"
                  backgroundColorHover={""}
                />
              </div>
            ) : (
              <p className="comment-description">{comment.message}</p>
            )}
          </CommentDiv>
        );
      })}
    </>
  );
};

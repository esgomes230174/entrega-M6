import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContext";
import { createCommentSchema } from "../../schemas/createComment";
import { ThemeTitle } from "../../styles/typography";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import Button from "../Button";
import { Comment } from "../Comment";
import { CommentsListBox, RegisterCommentBox } from "./styles";

export const CommentsList = ({ announcement }: any) => {
  const { registerComment, listComments } = useContext(CommentsContext);
  const { user } = useContext(UserContext);

  const [commentText, setCommentText] = useState("");

  const handleSuggestionClick = (text: string) => {
    setCommentText(text);
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  const { id } = useParams();

  const onSubmitFunction = (data: any) => {
    registerComment(id!, data);
  };

  useEffect(() => {
    listComments(id!);
  }, []);

  return (
    <>
      <CommentsListBox>
        <div className="comments">
          <ThemeTitle
            tag="h2"
            className="comment-title"
            titleSize="Heading-6-600"
          >
            Comentários
          </ThemeTitle>
          <div className="comments-div">
            <Comment />
          </div>
        </div>

        {user && (
          <RegisterCommentBox>
            <div className="userInfo-div">
              <p
                className="name_abbreviate"
                style={{ backgroundColor: stringToColor(user!.name) }}
              >
                {nameAbbreviate(user!.name)}
              </p>
              <p className="username">{user!.name}</p>
            </div>
            <form
              className="comment-form"
              onSubmit={handleSubmit(onSubmitFunction)}
            >
              <textarea
                className="comment"
                cols={30}
                rows={10}
                placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
                {...register("message")}
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
              />
              <Button
                className="comment-button"
                children="Comentar"
                backgroundColor="#4529E6"
                backgroundColorHover={""}
                type="submit"
              />
            </form>

            <div className="comment-sugestions">
              <button
                className="sugestion-btn"
                onClick={() => handleSuggestionClick("Gostei muito!")}
              >
                Gostei muito!
              </button>
              <button
                className="sugestion-btn"
                onClick={() => handleSuggestionClick("Incrível")}
              >
                Incrível
              </button>
              <button
                className="sugestion-btn"
                onClick={() =>
                  handleSuggestionClick("Recomendarei para meus amigos!")
                }
              >
                Recomendarei para meus amigos!
              </button>
            </div>
          </RegisterCommentBox>
        )}
      </CommentsListBox>
    </>
  );
};

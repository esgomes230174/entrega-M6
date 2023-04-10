import React from "react";
import { UserProvider } from "./UserContext";
import { ProvidersProps } from "../interfaces/providers";
import { AnnoucementProvider } from "./AnnouncementContext";
import { CommentsContext, CommentsProvider } from "./CommentsContext";

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <AnnoucementProvider>
        <CommentsProvider>{children}</CommentsProvider>
      </AnnoucementProvider>
    </UserProvider>
  );
};

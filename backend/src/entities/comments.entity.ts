import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Announcement } from "./announcement.entity";

import { User } from "./user.entity";

@Entity("comment")
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Announcement, { onDelete: "CASCADE" })
  announcement: Announcement;
}

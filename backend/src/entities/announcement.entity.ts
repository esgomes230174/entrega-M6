import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Comment } from "./comments.entity";
import { Photo } from "./photo.entity";
import { User } from "./user.entity";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  announcement_type: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column()
  mileage: number;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({ default: true })
  is_published: boolean;

  @Column()
  vehicle_type: string;

  @Column()
  cover_img: string;

  @OneToMany(() => Photo, (photo) => photo.announcement, {
    eager: true,
  })
  photos: Photo[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Comment, (Comment) => Comment.announcement, {
    onDelete: "SET NULL",
  })
  comments: Comment[];
}

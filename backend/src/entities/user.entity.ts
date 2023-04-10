import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Announcement } from "./announcement.entity";
import { Address } from "./address.entity";
import { Comment } from "./comments.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 14 })
  phone: string;

  @Column()
  birth_date: string;

  @Column()
  description: string;

  @Column()
  account: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  @Exclude()
  passwordResetToken: string;

  @Column({ nullable: true })
  @Exclude()
  passwordResetExpires: Date;

  @OneToMany(() => Announcement, (announcement) => announcement.user, {
    cascade: true,
  })
  announcements: Announcement[];

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Comment, (comment) => comment.user, {
    cascade: true,
  })
  comments: Comment[];
}

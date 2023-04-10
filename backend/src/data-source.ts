import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Announcement } from "./entities/announcement.entity";
import { Photo } from "./entities/photo.entity";
import { Address } from "./entities/address.entity";
import { Comment } from "./entities/comments.entity";
import { createEntities1677766971545 } from "./migrations/1677766971545-createEntities";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [User, Announcement, Photo, Address, Comment],
  migrations: [createEntities1677766971545],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;

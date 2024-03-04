import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const useDatabase = () => {
  const pool = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();

  return pool;
};

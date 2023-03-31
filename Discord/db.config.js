export const HOST = process.env.MYSQL_HOST;
export const USER = process.env.MYSQL_USER;
export const PASSWORD = process.env.MYSQL_PASSWORD;
export const DB = process.env.MYSQL_DATABASE;
export const port = process.env.MYSQL_PORT;
export const dialect = "mysql";
export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};
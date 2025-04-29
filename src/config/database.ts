import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'echo',
  port: 3400, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
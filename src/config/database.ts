import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost", // 로컬 MySQL
  user: "root", // MySQL 유저명
  password: "root", // MySQL 비밀번호
  database: "echo", // 사용할 데이터베이스명
  port: 3400, // 기본 MySQL 포트
  waitForConnections: true,
  connectionLimit: 10, // 커넥션 풀 최대 연결 수
  queueLimit: 0,
});

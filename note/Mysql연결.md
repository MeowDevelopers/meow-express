# Mysql 라이브러리 추가 및 연동하는 법

1. **npm install mysql2** <- 를 실행하세요
2. **src/config/database.ts** 파일 생성 및 아래 코드 삽입

```
// src/config/database.ts
import mysql from 'mysql2/promise';

// MySQL 커넥션 풀 생성
export const db = mysql.createPool({
  host: 'localhost',     // 로컬 MySQL
  user: 'root',          // MySQL 유저명
  password: '비밀번호입력', // MySQL 비밀번호
  database: 'test',      // 사용할 데이터베이스명
  port: 3306,            // 기본 MySQL 포트
  waitForConnections: true,
  connectionLimit: 10,   // 커넥션 풀 최대 연결 수
  queueLimit: 0
});

```

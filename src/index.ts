// Express 모듈을 불러옵니다.
// Express는 Node.js에서 가장 많이 사용되는 웹 프레임워크입니다.
// 마치 Spring Boot에서 @RestController로 HTTP 요청을 처리하듯, Express는 경로 기반으로 핸들러를 만듭니다.
import express from "express";
import users from "./router/user/route"

// Express 애플리케이션 객체를 생성합니다.
const app = express();

// 사용할 포트를 정의합니다.
// 보통 개발 환경에서는 3000 포트를 많이 사용합니다.
const PORT = 3000;


app.use('/users', users)
// 서버를 지정한 포트에서 실행합니다.
// app.listen은 Spring Boot의 `@SpringBootApplication`의 실행 부분(main 메서드)과 유사합니다.
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

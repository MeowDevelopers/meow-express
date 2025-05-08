# meow-express

express server

2025년 5월 8일 기준으로 Express Example 종료
추후 니즈가 있을 시 다시 재개

## CLI 모음

npm install

> 라이브러리 추가된 부분 설치하는 CLI

## prisma DB랑 상태 일치화 하기

```
npx prisma db pull
```

- DB의 내용을 불러와 schema.prisma에 적용합니다.

## 패키지 규칙

```
src/
├── modules/
│ └── user/
│ ├── user.controller.ts
│ ├── user.service.ts
│ ├── user.repository.ts
│ ├── user.model.ts
│ └── user.route.ts
├── utils/
├── config/
└── index.ts
```

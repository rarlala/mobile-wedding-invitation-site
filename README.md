# 모바일 청첩장 페이지

실제 사용 가능한 나만을 위한 모바일 청첩장 페이지를 만들어 보았습니다.
<br/>

## 사용 기술

- React + TypeScript + SCSS + react-query
- Package Manager : yarn berry
- Library : Swiper, date-fns, react-day-picker, react-copy-to-clipboard, webpack-font-preload-plugin
- 외부 API : Kakao Map

<br/>

## Project 실행 방법

1. JsonServer 실행 : `yarn dev:db`
2. 프로젝트 실행 : `yarn start`
3. `http://localhost:3000/` 에서 확인 가능

<br/>

## 구현 화면

### 전체 화면

<img src="https://private-user-images.githubusercontent.com/48057629/325876079-288759d5-df4a-432b-85dd-f81bf9790b49.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYxNjAwNjgsIm5iZiI6MTcyNjE1OTc2OCwicGF0aCI6Ii80ODA1NzYyOS8zMjU4NzYwNzktMjg4NzU5ZDUtZGY0YS00MzJiLTg1ZGQtZjgxYmY5NzkwYjQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTEyVDE2NDkyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiYzgyODk3NjRhMThhOWZlOTE4NmY4YWRmMGMyZjM4ZDZlNzU2ODM5ZWFlMGMwYWYzYjQ0NjIyYTczYWZmMTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Ie5XJHeGQoTdurBYK4isIVQ8jnrd5yQFmdb2rCXI4tI" width="380px"/>

### 에러 화면

<img src="https://private-user-images.githubusercontent.com/48057629/325876106-1c9c5a67-7ab0-47bb-a943-e141d4cfc6dd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYxNjAwNjgsIm5iZiI6MTcyNjE1OTc2OCwicGF0aCI6Ii80ODA1NzYyOS8zMjU4NzYxMDYtMWM5YzVhNjctN2FiMC00N2JiLWE5NDMtZTE0MWQ0Y2ZjNmRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTEyVDE2NDkyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzY2QzYTIwYmU4YzAyZmFiNzJlMTVjMzQxYTM1NzlhZTBiMzA4MzZiZTRmN2RjYzhlMTNmZDU0YmE3NGFiZDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.A4LpZKqPi58-pgvNLlAJanDvhFk2PWUvQX4EpkZ3miQ" width="380px">

### 해당 프로젝트를 진행하며 추가적으로 알게된 내용

1. npm, yarn berry, pnp의 차이
2. JSON Server 사용법
3. 이미지, 동영상, 폰트 등의 정적 리소스를 최적화 하는 방법
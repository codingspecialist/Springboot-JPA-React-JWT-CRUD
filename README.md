# 스프링부트JPA(JWT인증)+React CRUD

![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/home.png)

### MySQL

```sql
create user 'cos'@'%' identified by 'bitc5600';
GRANT ALL PRIVILEGES ON *.* TO 'cos'@'%';
create database cos;
```

### React 설치

- src/main/webapp/ 에 설치
- yarn create react-app blog-app
- yarn add jwt-decode

### STS에서 확장 프로그램 설치

- 마켓플레이스 react Codemix

### 라이브러리

- yarn add react-router-dom
- yarn add redux react-redux
- yarn add react-bootstrap bootstrap
- index.html 에 추가

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>
```

### Preview

- 회원가입

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/join.png)

- 로그인

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/login.png)

- 글쓰기

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-save.png)
  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-save-header.png)

- 글상세보기

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-detail.png)
  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-detail-header.png)

- 글삭제하기

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-delete.png)

- 글수정하기

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-update.png)
  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-update-header.png)

- 글목록보기

  ![img](https://github.com/codingspecialist/Springboot-JPA-React-JWT-CRUD/blob/master/preview/post-list.png)

<div align="middle"> <h1>Eladin 도서 판매 서비스</h1> </div>
<div align="middle"> <img alt="엘라딘 로고" src="https://user-images.githubusercontent.com/47781507/210138012-8aaadec0-77b7-4e9d-9b22-c119396d3345.png" width=300> </div>

<br />

## 1. 서비스 개요

### 1-1. Topic

도서 구매 웹사이트

### 1-2. Service Name

Eladin(엘라딘)

### 1-3. Goal

기존 알라딘 사이트의 UX/UI 개선

### 1-4. Objective

기존 알라딘 사이트의 양탄자 배송에서 착안하여 사용자의 빠른 주문 및 배송이 가능하도록 단순화된 UI와 최소한의 기능 제공

### 1-5. Target User

복잡한 절차 없이 도서를 빨리 구매하고 싶은 사람

## 2. 팀원 소개

| 이름   | 담당 업무       |
| ------ | --------------- |
| 윤동주 | 팀장/프론트엔드 |
| 김유정 | 팀원/프론트엔드 |
| 김혜민 | 팀원/백엔드     |
| 서윤지 | 팀원/백엔드     |
| 이수빈 | 팀원/프론트엔드 |

## 3. 서비스 설명

### 3-1. 서비스 도메인

🔗 https://eladin-lgurfdxfjq-du.a.run.app/ 

> ⚠ 현재 서버가 내려간 상태입니다. (22.11.27 ~)

### 3-2. 테스트 계정

| Role  | ID                | PW       |
| ----- | ----------------- | -------- |
| Admin | cozyma@elice.com  | 12345678 |
| User  | python3@naver.com | python3! |

### 3-3. API 문서

🔗 https://documenter.getpostman.com/view/18622149/2s8YRqjqCg

### 3-4. 서비스 주요 기능

#### 제품 등록, 장바구니 추가, 주문하기 등 쇼핑몰의 핵심 서비스 구현

1. 회원가입, 로그인, 회원정보 수정, 회원탈퇴 등 유저 정보 관련 **CRUD** 가능
2. JWT 토큰: 서버 DB가 아닌 프론트 단 **sessionStorage**에서 저장 및 관리
3. 카테고리에 따른 도서 목록, 도서 상세 정보 **조회** 가능
4. 장바구니 도서 조회, 도서 추가, 일부/전체 선택, 일부/전체 삭제 등 장바구니에서 **CRUD** 가능
5. 장바구니: 서버 DB가 아닌 프론트 단 **localStorage**에서 저장 및 관리
6. 장바구니에서 주문 목록 조회, 주문 완료 후 주문 정보 **조회 및 삭제** 가능
7. 관리자: 주문, 카테고리, 도서 **CRUD** 가능

### 3-5. 페이지별 화면

|                                              |                                              |
| -------------------------------------------- | -------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/47781507/211983363-e1deb470-5c33-42e8-85b3-156103bc5af4.png) | ![image](https://user-images.githubusercontent.com/47781507/211983489-13285d66-fff3-4d48-9858-7f917352ea42.png) |
| 메인 페이지                                  | 회원가입 페이지                                |
| ![image](https://user-images.githubusercontent.com/47781507/211983632-3709db4e-cfd4-4559-840e-9c9849ab573c.png) | ![image](https://user-images.githubusercontent.com/47781507/211983658-12967aed-495f-4824-8193-93068b78d00d.png)                                             |
| 로그인 페이지                                | 카테고리별 도서 리스트 페이지                         |
| ![image](https://user-images.githubusercontent.com/47781507/211983711-6d57a592-5c1a-475c-bdd4-eb718105f472.png) | ![image](https://user-images.githubusercontent.com/47781507/211983762-a7cd25fe-590a-4350-af4a-9d824874f1dd.png)                                             |
| 도서 상세 정보 페이지                                | 장바구니 페이지                         |
| ![image](https://user-images.githubusercontent.com/47781507/211983793-06a8e365-d6bc-4a70-946a-059b65925772.png) | ![image](https://user-images.githubusercontent.com/47781507/211983923-1b87ad24-b868-492d-b27f-0e175c3d00fc.png)                                             |
| 주문 페이지(장바구니 페이지 하단)                                | 주문 완료 모달                         |
| ![image](https://user-images.githubusercontent.com/47781507/211983984-3ae86a6d-e7fe-49c7-bdf4-a06b182b9d02.png) | ![image](https://user-images.githubusercontent.com/47781507/211984013-c5f64771-5148-4c54-91e2-33656c9737bc.png)                                             |
| 마이페이지                                | 관리자페이지                         |

## 4. 기술 스택

### 4-1. Language

|                                                                                                                   Javascript                                                                                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/47781507/211984357-d21bfff6-ab8a-47c1-a6df-3edb95af6d47.png" width="100px"/> |

### 4-2. FE

|                               Bulma                               |                                     LocalStorage                                     |                                                                                                                 SessionStorage                                                                                                                  |
| :---------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://bulma.io/images/bulma-logo.png" width="100px"/> | <img src="https://gyumin-kim.github.io/assets/img/local-storage.jpg" width="100px"/> | <img src="https://w.namu.la/s/6f8695350c52d8a6f07a30787fdd07ed65e77e010c16732832924d0effa75207dccdd972b8c7f5b9e7077c006e48cadde42f66172c11432a3c92e4407b4fcfdcc040e36fb74b8ec45f9aa61f910ba06893a395fc4ff48acf6711ccfdae2761c3" width="100px"/> |

### 4-3. BE

|                                                                                        Nodejs                                                                                        |                                                           Express                                                            |                                                 GCP                                                 |                                                                       MongoDB Atlas                                                                       |                                       Mongoose                                        |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Fd9ZeBr%2FbtrH5eJpnMq%2FPK52szk1xNqGtGHp7RJoi1%2Fimg.png" width="100px"/> | <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234-p-500.png" width="100px"/> | <img src="https://www.logo.wine/a/logo/Google_Storage/Google_Storage-Logo.wine.svg" width="100px"/> | <img src="https://www.strongdm.com/hubfs/21126185/Technology%20Images/603c5eb831820c3ce6a8f057_603a1586fa052d17fc2a6929_MongoDBAtlas.png" width="100px"/> | <img src="https://avatars.githubusercontent.com/u/7552965?s=200&v=4g" width="100px"/> |

## 5. 구조

### 5-1. 인프라 구조

<img src="https://user-images.githubusercontent.com/47781507/211985546-cd5ddc4b-afd1-4bcf-bf86-640bc9363099.png" width="600px"/>

### 5-2. 폴더 구조

- Front-End: `src/views` 폴더
- Back-End: `src/views` 이외 폴더 전체
- Running: 프론트, 백 동시에 express로 실행
- Directory tree
```bash
┌─db
│  ├─models
│  └─schemas
├─middlewares
├─routers
├─services
└─views
    ├─admin-page
    │  ├─component
    │  │  └─eventFn
    │  │      ├─categoryFn
    │  │      ├─ItemFn
    │  │      └─orderFn
    │  ├─image
    │  └─pages
    │      ├─add_item
    │      │  └─component
    │      │      └─eventFn
    │      └─modify_item
    │          └─component
    │              └─eventFn
    ├─cart
    │  ├─component
    │  │  └─eventFn
    │  ├─image
    │  └─util
    ├─category-booklist
    │  ├─components
    │  │  └─eventFn
    │  └─image
    ├─home
    │  └─image
    ├─login
    │  ├─component
    │  └─image
    ├─my-page
    │  ├─component
    │  │  └─eventFn
    │  ├─image
    │  └─page
    │      └─component
    │          └─eventFn
    ├─nav
    │  └─component
    ├─product-detail
    │  ├─component
    │  │  └─eventFn
    │  ├─data
    │  ├─image
    │  └─util
    └─register
        ├─component
        │  └─eventFn
        └─image
```

## 6. 실행 방법

### 6-1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어 수행

```bash
git clone https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team4/eladin.git
```

### 6-2. 클론한 디렉토리에서 backend 디렉토리로 들어가 아래 명령어를 통해 Backend에서 필요한 module 설치

```bash
npm install
```

### 6-3. 최상위 폴더에 `.env` 생성 및 아래 내용 기입

```bash
MONGODB_URL=mongodb+srv://ming:dpffltm123@cluster0.soadvsp.mongodb.net/?retryWrites=true&w=majority
PORT=8000
```

### 6-4. Express 앱 실행

```bash
npm start
```

## 7. 버전

### 0.0.1

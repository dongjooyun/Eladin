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

## 2. 서비스 설명

### 2-1. 서비스 도메인

🔗 https://eladin-lgurfdxfjq-du.a.run.app/ 

> ⚠ 현재 서버가 내려간 상태입니다. (22.11.27 ~)

### 2-2. 테스트 계정

| Role  | ID                | PW       |
| ----- | ----------------- | -------- |
| Admin | cozyma@elice.com  | 12345678 |
| User  | python3@naver.com | python3! |

### 2-3. API 문서
![image](https://img.shields.io/badge/Postman-black?style=for-the-badge&logo=postman&logoColor=) <br />
🔗 https://documenter.getpostman.com/view/18622149/2s8YRqjqCg

### 2-4. 서비스 주요 기능

#### 제품 등록, 장바구니 추가, 주문하기 등 쇼핑몰의 핵심 서비스 구현

1. 회원가입, 로그인, 회원정보 수정, 회원탈퇴 등 유저 정보 관련 **CRUD** 
2. JWT 토큰: 서버 DB가 아닌 프론트단(**sessionStorage**)에서 저장 및 관리
3. 카테고리에 따른 도서 목록, 도서 상세 정보 **조회** 
4. 장바구니 도서 조회, 도서 추가, 일부/전체 선택, 일부/전체 삭제 등 장바구니 관련 **CRUD** 
5. 장바구니: 서버 DB가 아닌 프론트단(**localStorage**)에서 저장 및 관리
6. 장바구니에서 주문 목록 조회, 주문 완료 후 주문 정보 **조회 및 삭제** 
7. 관리자: 주문, 카테고리, 도서 **CRUD** 

### 2-5. 페이지별 화면

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

## 3. 기술 스택

### 3-1. Language
![image](https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=JavaScript&logoColor=)

### 3-2. Front-End
- CSS Framework <br />
![image](https://img.shields.io/badge/Bulma-black?style=for-the-badge&logo=Bulma&logoColor=)
- Data storage <br />
![image](https://img.shields.io/badge/Local%20Storage-black?style=for-the-badge) ![image](https://img.shields.io/badge/Session%20Storage-black?style=for-the-badge)

### 3-3. Back-End
![image](https://img.shields.io/badge/Node.JS-black?style=for-the-badge&logo=Node.js&logoColor=) ![image](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=) <br />
![image](https://img.shields.io/badge/Google%20Cloud%20Platform-black?style=for-the-badge&logo=google%20cloud&logoColor=) <br />
![image](https://img.shields.io/badge/MongoDB%20Atlas-black?style=for-the-badge&logo=mongoDB&logoColor=) ![image](https://img.shields.io/badge/Mongoose-black?style=for-the-badge)

## 4. 프로젝트 구조

### 4-1. 인프라 구조

<img src="https://user-images.githubusercontent.com/47781507/211985546-cd5ddc4b-afd1-4bcf-bf86-640bc9363099.png" width="600px"/>

### 4-2. 폴더 구조

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

## 5. 팀원 소개

| 이름   | 담당       |
| ------ | --------------- |
| 윤동주 | `팀장` `프론트엔드` |
| 김유정 | `프론트엔드` |
| 김혜민 | `백엔드`     |
| 서윤지 | `백엔드`     |
| 이수빈 | `프론트엔드` |

## 6. 실행 방법

### 6-1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어 수행

```bash
git clone https://github.com/dongjooyun/Eladin.git
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

## 7. Version

### 0.0.1

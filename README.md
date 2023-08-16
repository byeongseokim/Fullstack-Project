# **📢일정 관리 프로그램 <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React + SpringBoot 프로젝트**

### **&nbsp;&nbsp;<p>▶ AWS 주소</p>**
- [![Amazon AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](http://pord-todo-ui-service.ap-northeast-2.elasticbeanstalk.com/)

## 📆 목차 및 기간

- 목차

1. <a href="#a1">메인 페이지</a> <br>
   > ➡️ 로그인 / GitHub 로그인 / 회원가입
2. <a href="#a2">할 일을 추가</a>
3. <a href="#a3">테마 변경</a>
   > ➡️ 테마 : 다크 / 라이트 모드
4. <a href="#a4">로그아웃</a>
5. <a href="#a5">반응형</a>

- 기간 : 2023 / 07 / 31 ~ 2023 / 08 / 11

### 기능별 요구사항

- `LocalStorage`에 고유 `ID`를 저장 ➡️ 로그아웃을 하기 전까지는 자동로그인
- 할 일을 추가 ➡️ 글을 클릭해서 수정하면 저장 가능
- 테마 변경 ➡️ 다크 모드와 라이트모드 변경 가능
- OAuth 로그인 API 사용
- 로그아웃
  > 로그아웃 버튼을 클릭하면 `localStorage`의 `token` 삭제

### 접근 방법

1. **_메인 페이지_** ➡️ **_회원가입 하기_** | **_로그인 하기_**
2. **_로그인 하기_** ➡️ **_할 일을 추가_** ➡️ **_+ 버튼을 눌러 추가하기_**
3. **_회원가입 하기_** ➡️ **_로그인 하기_**
4. **_헤더_** ➡️ **_로그아웃_** ➡️ **_테마 변경_**
   > **_로그아웃하지 않을 경우, 다음 실행시 할일 추가탭에서 시작_**
5. **_하단 네비게이션_** ➡️ **_나의 GitHub Project Repository 바로가기_**

# 🛠 기술 스택

## 환경

![Eclipse IDE](https://img.shields.io/badge/Eclipse_IDE-2C2255?style=for-the-badge&logo=eclipse-ide&logoColor=white)
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
[![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon%20aws&logoColor=white)](https://aws.amazon.com/)
![Amazon RDS](https://img.shields.io/badge/Amazon_RDS-232F3E?style=for-the-badge&logo=amazon-rds&logoColor=white)
![AWSElasticBeanstalk](https://img.shields.io/badge/AWSElasticBeanstalk-232F3E?style=for-the-badge&logo=amazon-elastic-beanstalk&logoColor=white)

## 사용 기술
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## 결과물

<div align="center">

## <h2 id="a1">메인 페이지 / 로그인 하기 / GitHub 로그인 하기 /회원가입 하기</h2>

</div>

<div align="center">

![회원가입](https://user-images.githubusercontent.com/130538673/260356764-d9b3b4ed-c8e0-421c-9655-18ed20aa60bc.gif)

</div>

 - 회원가입
  <br>➡️ 로그인 창에 회원가입 누르면 회원가입 화면 이동
  <br>➡️ 아이디, 비밀번호가 조건에 맞는 경우에만 제출 버튼 활성화
  <br>➡️ 회원가입 완료 시, 해당 아이디의 고유한 `token` 생성됨
  <br>➡️ 모두 완료 시, 로그인 페이지로 이동

<br>

<div align="center">



</div>

![로그인](https://user-images.githubusercontent.com/130538673/260356969-b43f573e-5097-48ea-bd36-afd62bc3a8dd.gif)
![깃허브 로그인](https://github.com/byeongseokim/Fullstack-Project/assets/130538673/c876804d-498c-4b08-99ca-cdc8c91799b8)

- 로그인
  <br>➡️ 아이디 및 비밀번호 입력칸이 공란이 아닐 경우, 로그인 버튼 활성화
  <br>➡️ 로그인 성공한 경우, 해당 계정의 고유 `token을` `localStorage에` 저장
  <br>➡️ `localStorage`에 고유 `token`이 있는 경우, 로그인 화면을 생략하고 자동로그인
  
---

## <h2 id="a2">할 일을 추가하기</h2>

</div>

<div align="center">



</div>

![할 일 추가](https://user-images.githubusercontent.com/130538673/260361935-8d1c2b47-20bb-4b7c-9854-77cb8453b65c.gif)

- 추가
  <br>➡️ 글 작성후 엔터키를 누르면 글이 저장 가능
     > 저장기능은 AWS RDS (DB)로 저장 됨.
- 수정
  <br> ➡️ 글을 수정한 후 엔터키를 눌러야 저장 가능
- 삭제
  <br>➡️ 삭제는 휴지통 아이콘을 누르면 바로 삭제
---

<div align="center">
  
## <h2 id="a3">테마 변경</h2>


</div>

![테마 변경](https://github.com/byeongseokim/Fullstack-Project/assets/130538673/ee4f9371-6e10-4664-b289-9bc851938fc9)

<div align="center">


</div>

- 테마 변경
  <br>➡️ 다크모드와 라이트모드로 설정 가능
  <br>➡️ 아쉽게도 전체 페이지에 테마 변경기능은 구현 하지 못함
  
---

## <h2 id="a4">로그아웃</h2>


</div>

![로그아웃](https://github.com/byeongseokim/Fullstack-Project/assets/130538673/b0ba05c6-7b98-4f5c-8e5b-1bda4f865e22)

<div align="center">


</div>

- 로그아웃
  <br>➡️ 로그아웃 버튼을 클릭하면 `localStorage`의 `token` 삭제
  <br>➡️ 로그아웃하여 `localStorage`에 고유 `token`이 없는 경우, 주소창에 강제 입력하여 경로 이동하더라도 로그인 화면으로 리디렉션
  
---

## <h2 id="a5">반응형</h2> 
- grid 사용

</div>

![반응형](https://github.com/byeongseokim/Fullstack-Project/assets/130538673/4abc344d-ce07-49e0-a535-c8f4188a22db)

---

### ⭐프로젝트 소감 & 아쉬웠던 점

소형프로젝트 이기에 혼자서도 할 수 있었고, 간단했지만 AWS에서 배포하는 과정이 복잡하고 어려워서<br> 관련 정보들을 찾아보면서 하느라 오래 걸렸으며, Elastic Beanstalk에 설정과 배포 과정이 어려웠던거 같다.<br>
&nbsp;또한 UI 배포중 502에러가 일어났는데 POWESHELL로 eb ssh 환경으로 들어가서 npm start를 하면 되는것을<br> 알았지만 계속 컴퓨터를 계속 켜놓을수도 없어서 찾아본 결과 eb ssh안에서 npm start를 eb ssh를 꺼도 무한으로<br> 지속 되게 하는법을 알아냈고, tmux를 설치해서 npm start를 해보니 컴퓨터를 꺼놔도 실행되고 502에러도 사라지는것을 볼 수 있었다.<br>
이러한 해결 과정이 조금 길었지만 덕분에 Elastic Beanstalk 환경에서 배포하는 법을 익히게 되서 뜻깊은 시간이였던거 같다.<br>
<br>
&nbsp;다만 아쉬웠던 점은 OAuth를 사용해 로그인 API를 받아서 해보고 싶었지만 대부분 도메인이 있어야 가능해서 무료 도메인으로도 시도를 해봤지만 방법이 없었고,
유료로 구매해서 하기엔 너무 가격이 나가기 때문에 시도를 못해봐서 아쉽긴 하다.

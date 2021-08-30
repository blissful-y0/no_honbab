# 혼밥시러 : 내 근처의 식사 모임들

![logo](https://user-images.githubusercontent.com/71304578/131406481-fadacb47-cb94-4879-a163-b2d7648eb34d.png)

## 기획 의도

- 맛있는 음식이 먹고 싶지만, 식당이 2인분부터 받는 곳일 때?
- 다양한 음식을 먹고 싶지만, 나는 먹방 유튜버가 아니라 같이 먹을 사람이 필요할 때
- 바쁜 직장인 점심 시간, 점심은 먹어야 하지만 혼자 밥 먹기 민망할 때?
- 그냥, 혼자 밥 먹기 싫을 때!

살면서 계속 마주치는 이 순간들, 만약 이 순간, 같이 밥 먹을 사람을 찾아 주는 어플이 있다면? 혼밥시러는 그러한 상황을 해소하기 위해 만들어진 Android와 iPhone 용 어플입니다.

## 프로젝트 정보

### 프로젝트 멤버

본 프로젝트는 본래 3인이 진행하는 팀 프로젝트로 기획되었으나, 프로젝트 멤버 중 2명이 개인 사정상 불참하게 되어 솔로 프로젝트로 진행하였습니다.

- 기간: 2021/07/05 ~ 2021/07/30
- 프론트 및 실시간 채팅 구현: [윤승희](velog.io/@blissful-y0)
- 채팅 이외의 백엔드: 코드캠프 제공

### 추가 링크

[![코드캠프 1기: 윤승희 발표 영상](http://img.youtube.com/vi/XCfwBy6kJdY/0.jpg)](https://www.youtube.com/watch?v=XCfwBy6kJdY)

- [프로젝트 시연 및 발표 영상](https://www.youtube.com/watch?v=XCfwBy6kJdY)
- [기획서 및 진척도 관리 문서](https://wistful-search-692.notion.site/a1f8752720ac42d48cab79aceca3f2e3)
- [피그마](https://www.figma.com/file/Ex93aivqLomyn2zm2lEcRd/%ED%98%BC%EB%B0%A5%EC%8B%9C%EB%9F%AC?node-id=0%3A1)
- [발표 PPT](https://docs.google.com/presentation/d/10284bbABhoPP5Sae3asHdg9Vgl_LszyTTVACM5NRiOY/edit?usp=sharing)

## 기술 스택

![스크린샷 2021-08-31 오전 6 14 55](https://user-images.githubusercontent.com/71304578/131406665-9a546144-7856-4134-b7f4-35344f8f0888.png)

## 플로우 차트

### 다이어그램

![Untitled_Diagram](https://user-images.githubusercontent.com/71304578/131408882-f993cacb-4474-43a3-b488-aef983a10491.png)

### 파이어베이스의 Firestore를 사용한 Realtime DB 구조

![스크린샷 2021-08-31 오전 6 15 17](https://user-images.githubusercontent.com/71304578/131406650-6384550e-8b87-4f49-b319-4b0430bfda02.png)

### Container-Presenter 패턴을 사용한 실 프로젝트 폴더 구조

![스크린샷 2021-08-31 오전 6 15 12](https://user-images.githubusercontent.com/71304578/131406661-d0fdfb38-14f2-476c-acdd-1b91c4f9c59b.png)

## 기능 시연

### 구글 소셜 로그인 API를 활용한 로그인

![social](https://user-images.githubusercontent.com/71304578/131409929-848c1a06-a643-401d-a69e-5469330b03a2.gif)

### 게시물 보기 (참여한 미팅 참여 버튼 비활성화)

![Aug-31-2021 06-53-52](https://user-images.githubusercontent.com/71304578/131410962-b1cc0d24-4bbe-4644-9c84-9d8c58c4575e.gif)

### 게시물 작성

![cmeeting](https://user-images.githubusercontent.com/71304578/131410527-c0b07695-ea3a-4e0f-b253-80e579ac296d.gif)

### 지도 기능 및 가까이 있는 미팅 불러오기

![map3](https://user-images.githubusercontent.com/71304578/131410769-beea02c0-8338-4d77-accd-4afbea629286.gif)

### 실시간 채팅 기능

![chat 1](https://user-images.githubusercontent.com/71304578/131406691-39ed9548-d5f9-409f-998a-613784e69143.gif)
![chat 2](https://user-images.githubusercontent.com/71304578/131406758-771861d9-a74c-49e4-99ed-8887e56b3a72.gif)

## 그 외 링크

- 윤승희: [말도 많고 탈도 많았지만 팀 프로젝트였던 솔로 프로젝트를 회고하며](https://velog.io/@blissful-y0/%ED%9A%8C%EA%B3%A0-%EB%A7%81%ED%81%AC)

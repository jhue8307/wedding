# 정제우 ♥ 류다현 청첩장

모바일 청첩장 웹페이지입니다. GitHub Pages에 `jhue8307.github.io/wedding` 형태로 올려서 사용하는 걸 기준으로 만들었습니다.

## 폴더 구조

```
wedding-site/
├── index.html                 ← 메인 페이지 (구조/내용)
└── assets/
    ├── css/style.css          ← 디자인(색상, 크기, 간격 등)
    ├── js/script.js           ← 갤러리 렌더링 + 확대(라이트박스) 기능
    └── img/
        ├── hero/               첫 화면 사진 + 타이틀 스티커
        ├── verse/               성경 구절 손글씨 이미지
        ├── couple/              혼주 정보 배경/사진
        └── gallery/
            ├── gallery-list.js  ⭐ 갤러리 사진 목록 (여기만 수정하면 됨)
            └── photos/          ⭐ 갤러리 사진 파일들
```

## 갤러리 사진 추가/삭제하는 법 (가장 자주 할 일)

1. `assets/img/gallery/photos/` 폴더에 사진 파일을 넣는다.
2. `assets/img/gallery/gallery-list.js` 파일을 열어서 목록에 파일명을 한 줄 추가한다.
3. 끝! `index.html`은 전혀 건드릴 필요 없습니다. 사진 순서를 바꾸고 싶으면 이 목록의 줄 순서만 바꾸면 됩니다.

```js
var GALLERY_PHOTOS = [
  "gallery-01.jpg",
  "gallery-02.jpg",
  "my-new-photo.jpg",   // ← 이런 식으로 한 줄만 추가
];
```

**사진 용량 팁**: 카메라 원본(20~30MB)을 그대로 넣으면 페이지 로딩이 느려집니다. 긴 변 기준 1600px 정도, 파일 용량 200~400KB 정도로 줄여서 넣는 걸 추천해요. 리사이즈가 번거로우면 사진을 Claude한테 보내서 부탁하셔도 됩니다.

## 그 외 자주 수정할 만한 내용

- **결혼식 날짜/시간**: `index.html`에서 `calendar-date-title`, `calendar-time` 텍스트와 `cal-day` 달력 숫자들을 찾아 수정 (달력 하이라이트 위치도 같이 확인)
- **예식장 주소**: `index.html`의 `hero-address` 부분
- **인사말 문구**: `index.html`의 `greeting` 부분
- **혼주 성함**: `index.html`의 `parents-names-list` 안 `role-line`, `name-line` 텍스트

## GitHub Pages에 올리는 법

1. 이 폴더 전체(`wedding-site/`)를 저장소에 업로드 (또는 저장소 루트에 이 폴더 안의 내용물을 그대로 복사)
2. 저장소 Settings → Pages → Source에서 브랜치를 지정하면 자동 배포됩니다.
3. `index.html`이 루트에 있어야 `https://jhue8307.github.io/wedding/`처럼 바로 열립니다.

## 참고

- 폰트는 구글 폰트(나눔명조, Noto Sans KR)를 온라인에서 불러오는 방식이라 별도 폰트 파일은 필요 없습니다. (인터넷 연결 필요)
- 라이트박스(사진 클릭 시 확대)는 좌우 화살표 버튼, 키보드 방향키(←/→), 배경 클릭, Esc 키로 모두 조작 가능합니다.

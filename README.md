# 원티드 프리온보딩 코스
원티드 프리온보딩 프론트엔드 코스 사전 과제

### `Netlify`
https://serene-easley-c48d83.netlify.app/  
<br />

### `tree`
```
wanted_pre_onboarding/src
│
├── components
│   ├── Carousel.js
│   ├── Margin.js
│   ├── Nav.js
│   ├── Responsive.js
│   ├── Search.js 
│   └── SlideList.js
├── hooks
│   └── useWindowSize.js
├── images
│   └── slide
├── index.css
├── index.js
└── pages
    └── App.js
```  
<br/>

### `run`
``` npm install && npm run start```  
<br /><br />

### `function`
#### [ carousel ]
1. autoplay
2. 슬라이드 transition animation
3. description box opacity animation (~1200px)
4. 메인 슬라이드 외에 description box opacity = 1 처리 (~1200px)
5. 메인 슬라이드 외에 img fliter 처리
6. slide left / right button
7. reponsive
    * ~ 1199px `mobile - tablet`
        - slide width : window.width - 100px 
        - description : slide 아래에 중앙 정렬
    * 1200px ~ `laptop`
        - slide width : 1060px
        - description : slide 내에 box 생성

#### [ navigation ]
1. reponsive
    * ~ 767px `mobile`
        - 메뉴 : 홈,채용,이벤트
        - height : 110px
    * 768 ~ 991px `tablet`
        - 메뉴 : all
        - height :110px
    * 992 ~ 1100px `laptop(S)`
        - 메뉴 정렬이 space-between 로 변경
        - 오른쪽 상단 아이콘 부분 변경
        - height: 50px
    * 1101px ~ `laptop(L)`
        - 메뉴 정렬이 다시 flex-start 정렬
        - 오른쪽 상단 구분선 margin 변경
        - height : 50px  
<br />

### `screen`

https://user-images.githubusercontent.com/32586712/149650050-3f7b38a2-cba0-4c22-8391-f82f4d4b4897.mov


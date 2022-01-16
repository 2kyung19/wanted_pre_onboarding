# 원티드 프리온보딩 코스
원티드 프리온보딩 프론트엔드 코스 선발 과제

## `Netlify`
https://serene-easley-c48d83.netlify.app/  
<br />

## `tree`
```
wanted_pre_onboarding/src
│
├── components
│   ├── Carousel.js         # carousel component
│   ├── Margin.js           
│   ├── Nav.js              # navigation component
│   ├── Responsive.js       # responsive component
│   ├── Search.js           # navigation icons
│   └── SlideList.js        # carousel image list
├── hooks
│   └── useWindowSize.js    # window width resize hook
├── images
│   └── slide
├── index.css
├── index.js
└── pages
    └── App.js
```  
<br/>

## `run`
``` npm install && npm run start```  
<br />

## `function`
### [ carousel ]

#### slide animation

translateX 를 사용하여 이미지를 담고 있는 div를 이동시키며 이미지를 보여주었고, transition 을 이용하여 이동을 부드럽게 처리했습니다.  

슬라이드 크기가 화면 너비 1200px 이상인 경우 1060px에 margin 12px로 고정이고, 1200px 미만인 경우 화면너비 - 100px에 margin 10px입니다. 이미지를 담는 상위 div 크기를 `(슬라이드 width+양옆 margin) * image.length` 로 처리하고, 슬라이드를 넘길 때, `상위 div width / image length` 만큼 움직이도록 설계했습니다.  
<br />
#### swipe

react 합성 이벤트 onTouchStart, onTouchMove, onTouchEnd 와 touches를 이용하여 swipe 를 처리했습니다. `swipe 시작 x 값 - swipe 종료 x 값`을 계산하여 + 값 이면 오른쪽으로 이동, - 값이면 왼쪽으로 이동으로 구현했습니다.  

마우스로 swipe는 이벤트가 작동을 안해서, onMouseDown과 onMouseUp을 이용하여 처리했습니다.  
<br />
#### autoplay

setInterval을 이용해서 slide를 오른쪽으로 이동시키는 함수를 4초마다 호출했습니다.  
<br />
#### infinite slide

슬라이드 이미지는 총 6장을 준비했습니다.  
화면에 3장의 이미지가 보이기 때문에, 우선 div에 슬라이드 이미지를 5 6 1 2 3 4 5 6 1 2 순으로 배치했습니다.  

index 2(1 이미지)에서 왼쪽으로 이동하여 index 1(6 이미지)를 보여 주는 경우, 먼저 왼쪽으로 transform 과 transition을 이용하여 이동 animation을 보여준 뒤, 화면의 위치를 index 1(6 이미지)에서 index 7(6 이미지)로 animation 없이 강제 이동시킵니다. index 7(6 이미지)에서 index 8(1 이미지)를 보여주는 경우에도 마찬가지로 적용했습니다.  
<br />

#### slide image filter & description box opacity

화면 정중앙에 위치한 슬라이드가 아니라면 이미지를 어둡게 처리하고, 슬라이드 내부에 있는 설명 박스(화면 너비 1200px 이상) 를 보이지 않게 처리합니다.
메인 슬라이드가 아니면 이미지에 filter brightness 를 이용하여 어둡게 처리했습니다. 설명박스 또한 opacity 를 0으로 처리하여 보이지 않게 구현했습니다.  
설명 박스의 경우, animation이 첨가되어있어서 transition opacity 를 이용하여 animation 처리를 했습니다.  
<br />

### [ navigation ]
#### reponsive

nav bar의 style은 화면 너비에 따라 4가지로 구현되어 있었습니다.  
`macOS, chrome 환경 기준`  
<br />

1. mobile 인 경우 (~ 767px)  
        상단 줄엔 로고, 하단 줄엔 메뉴와 아이콘들로 구현되어있습니다. 메뉴는 홈, 채용, 이벤트 3개만 배치되어있습니다.
2. tablet 인 경우 (768 ~ 991px)  
        mobile과 구성은 같으나, 모든 메뉴가 배치되어있습니다.
3. laptop 인 경우 (992 ~ 1100px)  
        nav bar 줄이 한 줄로 변경되며, 로고, 메뉴, 아이콘, 기업이벤트 버튼으로 구성되어 있습니다. 아이콘의 경우 말줄임표가 사라지고 프로필 사진으로 변경되었으며 사이에 구분선이 생깁니다. 메뉴 정렬이 space-between으로 변경되었습니다.
4. laptop 인 경우2 (1101px ~ )  
        3번 laptop과 구성은 같으나, 메뉴 정렬이 다시 flex-start로 정렬되었으며 오른쪽 상단 구분선의 margin이 넓어졌습니다.  
<br />

## `screen`

https://user-images.githubusercontent.com/32586712/149666564-67aec75d-30f7-4a3c-a598-bd514268f494.mov



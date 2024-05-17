import{m as x,n as O,r as v,o as ee,j as n,S as H,k as J,L as W,p as ae,P as te,q as ne,A as se,M as ie}from"./index-Dxn5e6RA.js";import{c as re,P as oe}from"./pagination-ChB5yokq.js";import{T as le}from"./Title-BXi7CIG5.js";function z(u){let{swiper:e,extendParams:d,on:o,emit:l}=u;d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function m(a){let t;return a&&typeof a=="string"&&e.isElement&&(t=e.el.querySelector(a),t)?t:(a&&(typeof a=="string"&&(t=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&t&&t.length>1&&e.el.querySelectorAll(a).length===1?t=e.el.querySelector(a):t&&t.length===1&&(t=t[0])),a&&!t?a:t)}function f(a,t){const r=e.params.navigation;a=x(a),a.forEach(s=>{s&&(s.classList[t?"add":"remove"](...r.disabledClass.split(" ")),s.tagName==="BUTTON"&&(s.disabled=t),e.params.watchOverflow&&e.enabled&&s.classList[e.isLocked?"add":"remove"](r.lockClass))})}function y(){const{nextEl:a,prevEl:t}=e.navigation;if(e.params.loop){f(t,!1),f(a,!1);return}f(t,e.isBeginning&&!e.params.rewind),f(a,e.isEnd&&!e.params.rewind)}function E(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),l("navigationPrev"))}function g(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),l("navigationNext"))}function p(){const a=e.params.navigation;if(e.params.navigation=re(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let t=m(a.nextEl),r=m(a.prevEl);Object.assign(e.navigation,{nextEl:t,prevEl:r}),t=x(t),r=x(r);const s=(c,w)=>{c&&c.addEventListener("click",w==="next"?g:E),!e.enabled&&c&&c.classList.add(...a.lockClass.split(" "))};t.forEach(c=>s(c,"next")),r.forEach(c=>s(c,"prev"))}function h(){let{nextEl:a,prevEl:t}=e.navigation;a=x(a),t=x(t);const r=(s,c)=>{s.removeEventListener("click",c==="next"?g:E),s.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(s=>r(s,"next")),t.forEach(s=>r(s,"prev"))}o("init",()=>{e.params.navigation.enabled===!1?k():(p(),y())}),o("toEdge fromEdge lock unlock",()=>{y()}),o("destroy",()=>{h()}),o("enable disable",()=>{let{nextEl:a,prevEl:t}=e.navigation;if(a=x(a),t=x(t),e.enabled){y();return}[...a,...t].filter(r=>!!r).forEach(r=>r.classList.add(e.params.navigation.lockClass))}),o("click",(a,t)=>{let{nextEl:r,prevEl:s}=e.navigation;r=x(r),s=x(s);const c=t.target;if(e.params.navigation.hideOnClick&&!s.includes(c)&&!r.includes(c)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===c||e.pagination.el.contains(c)))return;let w;r.length?w=r[0].classList.contains(e.params.navigation.hiddenClass):s.length&&(w=s[0].classList.contains(e.params.navigation.hiddenClass)),l(w===!0?"navigationShow":"navigationHide"),[...r,...s].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const T=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),p(),y()},k=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:T,disable:k,update:y,init:p,destroy:h})}function ce(u){let{swiper:e,extendParams:d,on:o,emit:l,params:m}=u;e.autoplay={running:!1,paused:!1,timeLeft:0},d({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let f,y,E=m&&m.autoplay?m.autoplay.delay:3e3,g=m&&m.autoplay?m.autoplay.delay:3e3,p,h=new Date().getTime(),T,k,a,t,r,s,c;function w(i){!e||e.destroyed||!e.wrapperEl||i.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",w),!c&&L())}const S=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(g=p,T=!1);const i=e.autoplay.paused?p:h+g-new Date().getTime();e.autoplay.timeLeft=i,l("autoplayTimeLeft",i,i/E),y=requestAnimationFrame(()=>{S()})},K=()=>{let i;return e.virtual&&e.params.virtual.enabled?i=e.slides.filter(_=>_.classList.contains("swiper-slide-active"))[0]:i=e.slides[e.activeIndex],i?parseInt(i.getAttribute("data-swiper-autoplay"),10):void 0},B=i=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(y),S();let b=typeof i>"u"?e.params.autoplay.delay:i;E=e.params.autoplay.delay,g=e.params.autoplay.delay;const _=K();!Number.isNaN(_)&&_>0&&typeof i>"u"&&(b=_,E=_,g=_),p=b;const C=e.params.speed,V=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(C,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,C,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(C,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,C,!0,!0),l("autoplay")),e.params.cssMode&&(h=new Date().getTime(),requestAnimationFrame(()=>{B()})))};return b>0?(clearTimeout(f),f=setTimeout(()=>{V()},b)):requestAnimationFrame(()=>{V()}),b},A=()=>{h=new Date().getTime(),e.autoplay.running=!0,B(),l("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(f),cancelAnimationFrame(y),l("autoplayStop")},P=(i,b)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(f),i||(s=!0);const _=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",w):L()};if(e.autoplay.paused=!0,b){r&&(p=e.params.autoplay.delay),r=!1,_();return}p=(p||e.params.autoplay.delay)-(new Date().getTime()-h),!(e.isEnd&&p<0&&!e.params.loop)&&(p<0&&(p=0),_())},L=()=>{e.isEnd&&p<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(h=new Date().getTime(),s?(s=!1,B(p)):B(),e.autoplay.paused=!1,l("autoplayResume"))},R=()=>{if(e.destroyed||!e.autoplay.running)return;const i=O();i.visibilityState==="hidden"&&(s=!0,P(!0)),i.visibilityState==="visible"&&L()},q=i=>{i.pointerType==="mouse"&&(s=!0,c=!0,!(e.animating||e.autoplay.paused)&&P(!0))},F=i=>{i.pointerType==="mouse"&&(c=!1,e.autoplay.paused&&L())},Q=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",q),e.el.addEventListener("pointerleave",F))},X=()=>{e.el.removeEventListener("pointerenter",q),e.el.removeEventListener("pointerleave",F)},Y=()=>{O().addEventListener("visibilitychange",R)},Z=()=>{O().removeEventListener("visibilitychange",R)};o("init",()=>{e.params.autoplay.enabled&&(Q(),Y(),A())}),o("destroy",()=>{X(),Z(),e.autoplay.running&&N()}),o("_freeModeStaticRelease",()=>{(a||s)&&L()}),o("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?N():P(!0,!0)}),o("beforeTransitionStart",(i,b,_)=>{e.destroyed||!e.autoplay.running||(_||!e.params.autoplay.disableOnInteraction?P(!0,!0):N())}),o("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}k=!0,a=!1,s=!1,t=setTimeout(()=>{s=!0,a=!0,P(!0)},200)}}),o("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!k)){if(clearTimeout(t),clearTimeout(f),e.params.autoplay.disableOnInteraction){a=!1,k=!1;return}a&&e.params.cssMode&&L(),a=!1,k=!1}}),o("slideChange",()=>{e.destroyed||!e.autoplay.running||(r=!0)}),Object.assign(e.autoplay,{start:A,stop:N,pause:P,resume:L})}const U=u=>v.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...u},v.createElement("path",{d:"M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008",strokeWidth:1.5,strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})),de="_controller_90hyj_1",ue="_controller_prev_90hyj_6",pe="_controller_next_90hyj_10",me="_controller__arrow_90hyj_13",fe="_controller__arrow_alternative_90hyj_18",j={controller:de,controller_prev:ue,controller_next:pe,controller__arrow:me,controller__arrow_alternative:fe},G=({theme:u="main",indentation:e=0})=>{const d=ee(),o=u==="alternative"?`${j.controller__arrow} ${j.controller__arrow_alternative}`:j.controller__arrow,l=v.useCallback(()=>{d.slidePrev()},[d]),m=v.useCallback(()=>{d.slideNext()},[d]);return n.jsxs(n.Fragment,{children:[n.jsx("button",{style:{left:`${e}px`},onClick:l,"aria-label":"to previous slide",className:`${j.controller} ${j.controller_prev}`,children:n.jsx(U,{className:o})}),n.jsx("button",{style:{right:`${e}px`},onClick:m,"aria-label":"to next slide",className:`${j.controller} ${j.controller_next}`,children:n.jsx(U,{className:o})})]})},ge=[{imgURL:"https://umttikhinadasha.github.io/IT-Bookstore/assets/slide1-71ef0fb3.png",title:"Learn Enough JavaScript to Be Dangerous",ISBN13:"9780137843749"},{imgURL:"https://umttikhinadasha.github.io/IT-Bookstore/assets/slide2-d234aeab.png",title:"Learn Enough Developer Tools to Be Dangerous",ISBN13:"9780137843459"},{imgURL:"https://umttikhinadasha.github.io/IT-Bookstore/assets/slide3-3f302354.png",title:"Rails Crash Course",ISBN13:"9781593275723"}],_e="_banner_xgkn4_1",ye="_banner__item_xgkn4_4",ve="_banner__img_xgkn4_4",he="_banner__link_xgkn4_13",D={banner:_e,banner__item:ye,banner__img:ve,banner__link:he},be=()=>{const u=v.useMemo(()=>({modules:[z,oe,ce],autoplay:{delay:4e3},navigation:!1,pagination:{clickable:!0}}),[]),e=n.jsx(n.Fragment,{children:ge.map(({imgURL:d,ISBN13:o,title:l},m)=>{const f=`/books/${o}`;return n.jsx(J,{className:D.banner__item,children:n.jsx(W,{to:f,state:l,"aria-label":`Read more about ${l}`,className:D.banner__link,children:n.jsx("img",{src:d,rel:"preload",fetchPriority:"high",alt:`Banner for ${l}`,className:D.banner__img})})},m)})});return n.jsx("div",{className:D.banner,children:n.jsxs(H,{...u,children:[e,n.jsx(G,{})]})})},xe=async u=>await ae.get(`search/${u}`).then(e=>e.data.books.map(d=>{const o=d.price.replace(/\$/g,"");return{title:d.title,image:d.image,subtitle:d.subtitle,ISBN13:d.isbn13,price:o}})),Ee="_sliderInfo_1kix3_1",we="_slider__wrapper_1kix3_6",ke="_preloader_1kix3_10",I={sliderInfo:Ee,slider__wrapper:we,preloader:ke},$=({title:u})=>{const[e,d]=v.useState([]),[o,l]=v.useState(!1),[m,f]=v.useState(!1);v.useEffect(()=>{(async()=>{try{l(!0),d([...await xe(u)])}catch{f(!0)}finally{l(!1)}})()},[u]);const y=v.useMemo(()=>({slidesPerView:5,spaceBetween:20,navigation:!1,modules:[z],breakpoints:{320:{slidesPerView:1},560:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4},1440:{slidesPerView:5}}}),[]);if(o)return n.jsx("section",{className:I.preloader,children:n.jsx(te,{})});if(m)return n.jsx("section",{children:"Failed to get list of books"});const E=n.jsxs(H,{...y,className:I.slider__wrapper,children:[e.map(g=>n.jsx(J,{children:n.jsx(ne,{...g,addToCartButton:n.jsx(se,{ISBN13:g.ISBN13,data:{count:1,...g}})})},g.ISBN13)),n.jsx(G,{theme:"alternative",indentation:-10})]});return n.jsxs("section",{className:I.slider,children:[n.jsxs("div",{className:I.sliderInfo,children:[n.jsx(le,{children:u}),n.jsx(W,{to:`/search/${u}`,children:n.jsx(ie,{children:"SEE MORE"})})]}),E]})},Le="_mainPage_19ivt_1",je="_mainPage__banner_19ivt_5",Se="_mainPage__sliders_19ivt_8",M={mainPage:Le,mainPage__banner:je,mainPage__sliders:Se},Ce=()=>n.jsxs("div",{className:M.mainPage,children:[n.jsx("div",{className:M.mainPage__banner,children:n.jsx(be,{})}),n.jsx("div",{className:`${M.mainPage__container} container`,children:n.jsxs("div",{className:M.mainPage__sliders,children:[n.jsx($,{title:"Python"}),n.jsx($,{title:"JavaScript"}),n.jsx($,{title:"Android"})]})})]});export{Ce as MainPage};

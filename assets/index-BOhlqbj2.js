import{r as n,j as t,L as v,u as l,c as I,a as h,b as x,B as b,d as C,e as N}from"./index-dHBPQZQg.js";const g="_cartItem_znrui_1",k="_cartItem__body_znrui_1",y="_cartItem__preview_znrui_1",P="_cartItem__controls_znrui_1",$="_cartItem__title_znrui_21",f="_cartItem__image_znrui_26",z="_cartItem__price_znrui_29",_={cartItem:g,cartItem__body:k,cartItem__preview:y,cartItem__controls:P,cartItem__title:$,cartItem__image:f,cartItem__price:z},L=n.memo(({ISBN13:e,title:c,image:s,price:r,counter:a,deleteButton:i})=>t.jsxs("article",{className:_.cartItem,children:[t.jsxs(v,{to:`/books/${e}`,state:c,className:_.cartItem__preview,children:[t.jsx("img",{src:s,alt:`book cover for ${c}`,className:_.cartItem__image}),t.jsx("h3",{className:_.cartItem__title,children:c})]}),t.jsxs("div",{className:_.cartItem__body,children:[t.jsxs("div",{className:_.cartItem__price,children:["$",r]}),t.jsxs("div",{className:_.cartItem__controls,children:[t.jsx("div",{className:_.cartItem__counter,children:a}),t.jsx("div",{className:_.cartItem__delete,children:i})]})]})]})),w="_counter_mcn05_1",A="_counter__button_mcn05_7",B="_counter__output_mcn05_29",m={counter:w,counter__button:A,counter__output:B},F=n.memo(({ISBN13:e})=>{const c=l(p=>I(p,e)),{incrementCount:s,decrementCount:r}=x,a=h(),i=n.useCallback(()=>a(s(e)),[e,a,s]),j=n.useCallback(()=>a(r(e)),[e,r,a]);return t.jsxs("div",{className:m.counter,children:[t.jsx("button",{className:m.counter__button,onClick:j,disabled:c<=1,children:"-"}),t.jsx("span",{className:m.counter__output,children:c}),t.jsx("button",{className:m.counter__button,onClick:i,children:"+"})]})}),D="_removeButton_3m7sm_1",E="_removeButton__span_3m7sm_19",u={removeButton:D,removeButton__span:E},R=n.memo(({ISBN13:e})=>{const{removeFromCart:c}=x,s=h(),r=n.useCallback(()=>{s(c(e)),b.error("Book removed from cart!")},[e,s,c]);return t.jsx("button",{className:u.removeButton,onClick:r,children:t.jsx("span",{className:u.removeButton__span,children:"+"})})}),T="_cart_37ixh_1",q="_cart__list_37ixh_9",G="_cart__item_37ixh_14",H="_cart__title_37ixh_18",J="_cart__footer_37ixh_18",K="_cart__total_37ixh_24",o={cart:T,cart__list:q,cart__item:G,cart__title:H,cart__footer:J,cart__total:K},M=()=>{const e=l(C),c=l(N),s=t.jsx("ul",{className:o.cart__list,children:e.map(([r,a])=>t.jsx("li",{className:o.cart__item,children:t.jsx(L,{ISBN13:r,...a,counter:t.jsx(F,{ISBN13:r}),deleteButton:t.jsx(R,{ISBN13:r})})},r))});return t.jsx("section",{className:o.cart,children:e.length?t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:o.cart__title,children:"Products"}),s,t.jsxs("div",{className:o.cart__footer,children:["Total: ",t.jsxs("span",{className:o.cart__total,children:["$",c]})]})]}):t.jsx("div",{children:"Cart is empty"})})},O="_cartPage_32j1y_1",d={cartPage:O},U=()=>t.jsx("div",{className:d.cartPage,children:t.jsx("div",{className:`${d.cartPage__container} container`,children:t.jsx(M,{})})});export{U as CartPage};

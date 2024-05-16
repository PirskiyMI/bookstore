import{r as n,j as t,L as v,u as i,c as I,a as h,b as j,B as b,d as C,e as N}from"./index-B-ZMzEIs.js";const g="_cartItem_6aj9n_1",k="_cartItem__body_6aj9n_1",y="_cartItem__preview_6aj9n_1",P="_cartItem__controls_6aj9n_1",$="_cartItem__title_6aj9n_21",f="_cartItem__image_6aj9n_26",L="_cartItem__price_6aj9n_29",r={cartItem:g,cartItem__body:k,cartItem__preview:y,cartItem__controls:P,cartItem__title:$,cartItem__image:f,cartItem__price:L},w=n.memo(({ISBN13:e,title:c,image:a,price:s,counter:_,deleteButton:l})=>t.jsxs("article",{className:r.cartItem,children:[t.jsxs(v,{to:`/books/${e}`,state:c,className:r.cartItem__preview,children:[t.jsx("img",{src:a,alt:`book cover for ${c}`,className:r.cartItem__image}),t.jsx("h3",{className:r.cartItem__title,children:c})]}),t.jsxs("div",{className:r.cartItem__body,children:[t.jsxs("div",{className:r.cartItem__price,children:["$",s]}),t.jsxs("div",{className:r.cartItem__controls,children:[t.jsx("div",{className:r.cartItem__counter,children:_}),t.jsx("div",{className:r.cartItem__delete,children:l})]})]})]})),A="_counter_mcn05_1",B="_counter__button_mcn05_7",F="_counter__output_mcn05_29",m={counter:A,counter__button:B,counter__output:F},D=n.memo(({ISBN13:e})=>{const c=i(p=>I(p,e)),{incrementCount:a,decrementCount:s}=j,_=h(),l=n.useCallback(()=>_(a(e)),[e,_,a]),x=n.useCallback(()=>_(s(e)),[e,s,_]);return t.jsxs("div",{className:m.counter,children:[t.jsx("button",{className:m.counter__button,onClick:x,disabled:c<=1,children:"-"}),t.jsx("span",{className:m.counter__output,children:c}),t.jsx("button",{className:m.counter__button,onClick:l,children:"+"})]})}),E="_removeButton_3m7sm_1",R="_removeButton__span_3m7sm_19",u={removeButton:E,removeButton__span:R},T=n.memo(({ISBN13:e})=>{const{removeFromCart:c}=j,a=h(),s=n.useCallback(()=>{a(c(e)),b.error("Book removed from cart!")},[e,a,c]);return t.jsx("button",{className:u.removeButton,onClick:s,children:t.jsx("span",{className:u.removeButton__span,children:"+"})})}),q="_cart_37ixh_1",z="_cart__list_37ixh_9",G="_cart__item_37ixh_14",H="_cart__title_37ixh_18",J="_cart__footer_37ixh_18",K="_cart__total_37ixh_24",o={cart:q,cart__list:z,cart__item:G,cart__title:H,cart__footer:J,cart__total:K},M=()=>{const e=i(C),c=i(N),a=t.jsx("ul",{className:o.cart__list,children:e.map(([s,_])=>t.jsx("li",{className:o.cart__item,children:t.jsx(w,{ISBN13:s,..._,counter:t.jsx(D,{ISBN13:s}),deleteButton:t.jsx(T,{ISBN13:s})})},s))});return t.jsx("section",{className:o.cart,children:e.length?t.jsxs(t.Fragment,{children:[t.jsx("h2",{className:o.cart__title,children:"Products"}),a,t.jsxs("div",{className:o.cart__footer,children:["Total: ",t.jsxs("span",{className:o.cart__total,children:["$",c]})]})]}):t.jsx("div",{children:"Cart is empty"})})},O="_cartPage_32j1y_1",d={cartPage:O},U=()=>t.jsx("div",{className:d.cartPage,children:t.jsx("div",{className:`${d.cartPage__container} container`,children:t.jsx(M,{})})});export{U as CartPage};

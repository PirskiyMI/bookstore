import{j as o,R as x,N as j,r as k,L as f,u as m,f as N,g,h as v,a as y,i as w,P as L,A,S as D,k as I,l as P}from"./index-B-ZMzEIs.js";import{P as S}from"./pagination-otDbm2PO.js";import{F as $}from"./Fallback-B2veO3Fx.js";import{T as B}from"./Title-Cw9gDPpL.js";const T="_book_1o7bb_1",E="_book__image_1o7bb_6",R="_book__body_1o7bb_9",C="_book__block_1o7bb_14",M="_book__title_1o7bb_19",F="_book__subtitle_1o7bb_22",O="_book__authors_1o7bb_25",H="_book__info_1o7bb_31",V="_book__price_1o7bb_34",W="_book__value_1o7bb_41",t={book:T,book__image:E,book__body:R,book__block:C,book__title:M,book__subtitle:F,book__authors:O,book__info:H,book__price:V,book__value:W},Y=({title:s,subtitle:i,rating:r,authors:d,image:n,price:e,publication:h,addToCartButton:b})=>{const c=d.split(", "),p=Object.entries(h);return o.jsxs("article",{className:t.book,children:[o.jsx("img",{src:n,alt:`book cover for ${s}`,className:t.book__image}),o.jsxs("div",{className:t.book__body,children:[o.jsxs("div",{className:t.book__block,children:[o.jsxs("div",{children:[o.jsx("div",{className:t.book__rating,children:o.jsx(x,{rating:r})}),o.jsx("h2",{className:t.book__title,children:s}),o.jsx("h3",{className:t.book__subtitle,children:i})]}),o.jsx("ul",{className:t.book__authors,children:c.map(_=>o.jsx("li",{children:o.jsx(j,{to:`/search/${_}`,children:_})},_))})]}),o.jsx("ul",{children:p.map(_=>o.jsxs("li",{className:t.book__info,children:[_[0],": ",_[1]]},_[1]))}),o.jsxs("div",{className:t.book__price,children:["Price: ",o.jsxs("span",{className:t.book__value,children:["$",e]})," "]}),o.jsx("div",{className:t.book__button,children:b})]})]})},q=s=>k.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},k.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),z="/bookstore/assets/author-image-BA0CuYLO.png",G="_author_1peet_1",J="_author__body_1peet_7",K="_author__avatar_1peet_7",Q="_author__link_1peet_7",U="_author__title_1peet_11",X="_author__image_1peet_26",Z="_author__arrow_1peet_35",a={author:G,author__body:J,author__avatar:K,author__link:Q,author__title:U,author__image:X,author__arrow:Z},oo=({author:s})=>o.jsxs("article",{className:a.author,children:[o.jsx("h2",{className:a.author__title,children:"Author"}),o.jsxs("div",{className:a.author__body,children:[o.jsx("div",{className:a.author__avatar,children:o.jsx("img",{src:z,alt:"Author's default",className:a.author__image})}),o.jsx("h3",{className:a.author__name,children:s})]}),o.jsxs(f,{to:`/search/${s}`,className:a.author__link,children:["Read more",o.jsx(q,{className:a.author__arrow})]})]}),so="_description_iwkci_1",to="_description__body_iwkci_6",ao="_description__link_iwkci_11",l={description:so,description__body:to,description__link:ao},eo=({description:s,url:i})=>o.jsxs("div",{className:l.description,children:[o.jsx(B,{children:"Description"}),o.jsxs("div",{className:l.description__body,children:[o.jsx("p",{className:l.description,children:s}),o.jsx("a",{href:i,target:"_blank",className:l.description__link,children:"Read more"})]})]}),_o="_information_6l385_1",io="_information__header_6l385_4",ro="_information__authors_6l385_11",u={information:_o,information__header:io,information__authors:ro},no=({ISBN13:s})=>{const i=m(N),r=m(g),d=m(v),n=y();if(k.useEffect(()=>{n(w(s))},[s,n]),d)return o.jsx("section",{className:"preloader",children:o.jsx(L,{})});if(!r)return o.jsx("section",{children:o.jsx($,{})});const{bookDetails:e,bookDescription:h,publicationInformation:b}=r;return o.jsxs("section",{className:u.information,children:[o.jsxs("div",{className:u.information__header,children:[o.jsx(Y,{...e,publication:b,addToCartButton:o.jsx(A,{data:{title:e.title,image:e.image,price:e.price,count:1},ISBN13:s})}),i==="desktop"&&o.jsx(D,{modules:[S],slidesPerView:1,spaceBetween:20,grabCursor:!0,pagination:{clickable:!0},className:u.information__authors,children:e.authors.split(", ").map(c=>o.jsx(I,{children:o.jsx(oo,{author:c})},c))})]}),o.jsx(eo,{...h})]})},co="_details_1o3ru_1",lo={details:co},ko=()=>{const{id:s}=P();return o.jsx("div",{className:"container",children:o.jsx("div",{className:lo.details,children:o.jsx(no,{ISBN13:s})})})};export{ko as DetailsPage};

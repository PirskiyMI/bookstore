import{j as o,R as x,N as j,r as k,L as f,u,f as N,g,h as v,a as y,i as w,P as z,A as L,S as A,k as D,l as I}from"./index-Cl7emUK1.js";import{P}from"./pagination-C2dHllcU.js";import{F as S}from"./Fallback-Bkm54rNo.js";import{T as $}from"./Title-9eLDggFo.js";const B="_book_zn2lh_1",T="_book__image_zn2lh_6",E="_book__body_zn2lh_9",R="_book__block_zn2lh_14",C="_book__title_zn2lh_19",M="_book__subtitle_zn2lh_22",F="_book__authors_zn2lh_25",O="_book__info_zn2lh_31",H="_book__price_zn2lh_34",V="_book__value_zn2lh_41",t={book:B,book__image:T,book__body:E,book__block:R,book__title:C,book__subtitle:M,book__authors:F,book__info:O,book__price:H,book__value:V},W=({title:s,subtitle:i,rating:r,authors:h,image:n,price:e,publication:d,addToCartButton:m})=>{const c=h.split(", "),p=Object.entries(d);return o.jsxs("article",{className:t.book,children:[o.jsx("img",{src:n,alt:`book cover for ${s}`,className:t.book__image}),o.jsxs("div",{className:t.book__body,children:[o.jsxs("div",{className:t.book__block,children:[o.jsxs("div",{children:[o.jsx("div",{className:t.book__rating,children:o.jsx(x,{rating:r})}),o.jsx("h2",{className:t.book__title,children:s}),o.jsx("h3",{className:t.book__subtitle,children:i})]}),o.jsx("ul",{className:t.book__authors,children:c.map(_=>o.jsx("li",{children:o.jsx(j,{to:`/search/${_}`,children:_})},_))})]}),o.jsx("ul",{children:p.map(_=>o.jsxs("li",{className:t.book__info,children:[_[0],": ",_[1]]},_[1]))}),o.jsxs("div",{className:t.book__price,children:["Price: ",o.jsxs("span",{className:t.book__value,children:["$",e]})," "]}),o.jsx("div",{className:t.book__button,children:m})]})]})},Y=s=>k.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},k.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),q="/bookstore/assets/author-image-BA0CuYLO.png",G="_author_1peet_1",J="_author__body_1peet_7",K="_author__avatar_1peet_7",Q="_author__link_1peet_7",U="_author__title_1peet_11",X="_author__image_1peet_26",Z="_author__arrow_1peet_35",a={author:G,author__body:J,author__avatar:K,author__link:Q,author__title:U,author__image:X,author__arrow:Z},oo=({author:s})=>o.jsxs("article",{className:a.author,children:[o.jsx("h2",{className:a.author__title,children:"Author"}),o.jsxs("div",{className:a.author__body,children:[o.jsx("div",{className:a.author__avatar,children:o.jsx("img",{src:q,alt:"Author's default",className:a.author__image})}),o.jsx("h3",{className:a.author__name,children:s})]}),o.jsxs(f,{to:`/search/${s}`,className:a.author__link,children:["Read more",o.jsx(Y,{className:a.author__arrow})]})]}),so="_description_iwkci_1",to="_description__body_iwkci_6",ao="_description__link_iwkci_11",l={description:so,description__body:to,description__link:ao},eo=({description:s,url:i})=>o.jsxs("div",{className:l.description,children:[o.jsx($,{children:"Description"}),o.jsxs("div",{className:l.description__body,children:[o.jsx("p",{className:l.description,children:s}),o.jsx("a",{href:i,target:"_blank",className:l.description__link,children:"Read more"})]})]}),_o="_information_6l385_1",io="_information__header_6l385_4",ro="_information__authors_6l385_11",b={information:_o,information__header:io,information__authors:ro},no=({ISBN13:s})=>{const i=u(N),r=u(g),h=u(v),n=y();if(k.useEffect(()=>{n(w(s))},[s,n]),h)return o.jsx("section",{className:"preloader",children:o.jsx(z,{})});if(!r)return o.jsx("section",{children:o.jsx(S,{})});const{bookDetails:e,bookDescription:d,publicationInformation:m}=r;return o.jsxs("section",{className:b.information,children:[o.jsxs("div",{className:b.information__header,children:[o.jsx(W,{...e,publication:m,addToCartButton:o.jsx(L,{data:{title:e.title,image:e.image,price:e.price,count:1},ISBN13:s})}),i==="desktop"&&o.jsx(A,{modules:[P],slidesPerView:1,spaceBetween:20,grabCursor:!0,pagination:{clickable:!0},className:b.information__authors,children:e.authors.split(", ").map(c=>o.jsx(D,{children:o.jsx(oo,{author:c})},c))})]}),o.jsx(eo,{...d})]})},co="_details_1o3ru_1",lo={details:co},ko=()=>{const{id:s}=I();return o.jsx("div",{className:"container",children:o.jsx("div",{className:lo.details,children:o.jsx(no,{ISBN13:s})})})};export{ko as DetailsPage};
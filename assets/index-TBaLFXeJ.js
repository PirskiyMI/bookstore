import{j as o,R as x,N as j,r as p,L as f,u,f as g,g as N,h as v,a as y,i as w,P as L,S as A,k as D,A as I,l as P}from"./index-BkUUkiZ6.js";import{P as S}from"./pagination-DkGX27np.js";import{F as $}from"./Fallback-BFI1XC-g.js";import{T as B}from"./Title-B9aye2aB.js";const E="_book_1o7bb_1",T="_book__image_1o7bb_6",R="_book__body_1o7bb_9",C="_book__block_1o7bb_14",F="_book__title_1o7bb_19",M="_book__subtitle_1o7bb_22",O="_book__authors_1o7bb_25",H="_book__info_1o7bb_31",V="_book__price_1o7bb_34",W="_book__value_1o7bb_41",t={book:E,book__image:T,book__body:R,book__block:C,book__title:F,book__subtitle:M,book__authors:O,book__info:H,book__price:V,book__value:W},Y=({title:s,subtitle:i,rating:r,authors:l,image:n,price:_,publication:d,addToCartButton:h})=>{const b=l.split(", "),m=Object.entries(d);return o.jsxs("article",{className:t.book,children:[o.jsx("img",{src:n,alt:`book cover for ${s}`,className:t.book__image}),o.jsxs("div",{className:t.book__body,children:[o.jsxs("div",{className:t.book__block,children:[o.jsxs("div",{children:[o.jsx("div",{className:t.book__rating,children:o.jsx(x,{rating:r})}),o.jsx("h2",{className:t.book__title,children:s}),o.jsx("h3",{className:t.book__subtitle,children:i})]}),o.jsx("ul",{className:t.book__authors,children:b.map(e=>o.jsx("li",{children:o.jsx(j,{to:`/search/${e}`,children:e})},e))})]}),o.jsx("ul",{children:m.map(e=>o.jsxs("li",{className:t.book__info,children:[e[0],": ",e[1]]},e[1]))}),o.jsxs("div",{className:t.book__price,children:["Price: ",o.jsxs("span",{className:t.book__value,children:["$",_]})," "]}),o.jsx("div",{className:t.book__button,children:h})]})]})},q=s=>p.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},p.createElement("path",{d:"M6 12H18M18 12L13 7M18 12L13 17",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),z="/bookstore/assets/author-image-BA0CuYLO.png",G="_author_1peet_1",J="_author__body_1peet_7",K="_author__avatar_1peet_7",Q="_author__link_1peet_7",U="_author__title_1peet_11",X="_author__image_1peet_26",Z="_author__arrow_1peet_35",a={author:G,author__body:J,author__avatar:K,author__link:Q,author__title:U,author__image:X,author__arrow:Z},oo=({author:s})=>o.jsxs("article",{className:a.author,children:[o.jsx("h2",{className:a.author__title,children:"Author"}),o.jsxs("div",{className:a.author__body,children:[o.jsx("div",{className:a.author__avatar,children:o.jsx("img",{src:z,alt:"Author's default",className:a.author__image})}),o.jsx("h3",{className:a.author__name,children:s})]}),o.jsxs(f,{to:`/search/${s}`,className:a.author__link,children:["Read more",o.jsx(q,{className:a.author__arrow})]})]}),so="_description_iwkci_1",to="_description__body_iwkci_6",eo="_description__link_iwkci_11",c={description:so,description__body:to,description__link:eo},ao=({description:s,url:i})=>o.jsxs("div",{className:c.description,children:[o.jsx(B,{children:"Description"}),o.jsxs("div",{className:c.description__body,children:[o.jsx("p",{className:c.description,children:s}),o.jsx("a",{href:i,target:"_blank",className:c.description__link,children:"Read more"})]})]}),_o="_information_6l385_1",io="_information__header_6l385_4",ro="_information__authors_6l385_11",k={information:_o,information__header:io,information__authors:ro},no=({ISBN13:s})=>{const i=u(g),r=u(N),l=u(v),n=y();if(p.useEffect(()=>{n(w(s))},[s,n]),l)return o.jsx("section",{className:"preloader",children:o.jsx(L,{})});if(!r)return o.jsx("section",{children:o.jsx($,{})});const{bookDetails:_,bookDescription:d,publicationInformation:h}=r,b=o.jsx(o.Fragment,{children:i==="desktop"&&o.jsx(A,{modules:[S],slidesPerView:1,spaceBetween:20,grabCursor:!0,pagination:{clickable:!0},className:k.information__authors,children:_.authors.split(", ").map(e=>o.jsx(D,{children:o.jsx(oo,{author:e})},e))})}),m=o.jsx(Y,{..._,publication:h,addToCartButton:o.jsx(I,{data:{title:_.title,image:_.image,price:_.price,count:1},ISBN13:s})});return o.jsxs("section",{className:k.information,children:[o.jsxs("div",{className:k.information__header,children:[m,b]}),o.jsx(ao,{...d})]})},co="_details_1o3ru_1",lo={details:co},ko=()=>{const{id:s}=P();return o.jsx("div",{className:"container",children:o.jsx("div",{className:lo.details,children:o.jsx(no,{ISBN13:s})})})};export{ko as DetailsPage};

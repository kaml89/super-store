(this["webpackJsonpsuper-store"]=this["webpackJsonpsuper-store"]||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},132:function(e,t,c){},134:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},149:function(e,t,c){},248:function(e,t,c){},250:function(e,t,c){"use strict";c.r(t);var n,r,a,i=c(0),s=c.n(i),o=c(32),l=c.n(o),j=(c(110),c(13)),u=c(9),d=(c(111),c(7)),b=c.n(d),m=c(10),O=c(8),f=c(62),h=c.n(f),p="https://gp-super-store-api.herokuapp.com/item/",x={get:function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(p,"/list"),{params:t});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(m.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(p,"/").concat(t));case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},v=(c(132),c(1)),g=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg",alt:""})},N=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star-half-c86abc67a14feafe9a821fd5e06e5833.svg",alt:""})},w=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star-empty-849812a23c4515e156571518674ae723.svg",alt:""})},y=function(e){var t=e.avgRating,c=Math.floor(t),n=t%1===0?0:1;return Object(v.jsx)("div",{children:Array(5).fill(Object(v.jsx)(g,{}),0).fill(Object(v.jsx)(N,{}),c,c+n).fill(Object(v.jsx)(w,{}),c+n)})},C=(c(134),function(e){var t=e.label,c=e.onClick;return Object(v.jsx)("button",{onClick:c,className:"button",children:t})}),I=function(e){var t=e.avgRating,c=e.imageUrl,n=e.name,r=e.price,a=e.id;return Object(v.jsxs)("div",{className:"item-card",children:[Object(v.jsx)("div",{className:"img-wrapper",children:Object(v.jsx)("img",{className:"item-card-img",src:c,alt:n})}),Object(v.jsxs)("div",{className:"item-card-details",children:[Object(v.jsx)(j.c,{to:"/item/".concat(a),className:"item-card-name",children:n}),Object(v.jsx)(y,{avgRating:t}),Object(v.jsxs)("div",{className:"item-card-price",children:[" $",r]}),Object(v.jsx)(j.c,{to:"/item/".concat(a),children:Object(v.jsx)(C,{label:"View Item"})})]})]})},E=(c(139),function(e){var t=e.items;return Object(v.jsx)("div",{className:"items-list",children:t.map((function(e){return Object(v.jsx)(I,{id:e._id,imageUrl:e.imageUrl,name:e.name,price:e.price,avgRating:e.avgRating},e._id)}))})}),k=(c(140),function(e){var t=e.handleSearch,c=Object(i.useState)(""),n=Object(O.a)(c,2),r=n[0],a=n[1],s=Object(i.useRef)(null);return Object(v.jsx)("div",{className:"search-bar",children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(v.jsx)("input",{type:"text",ref:s,onChange:function(e){return a(e.target.value)}}),Object(v.jsx)("button",{children:"search"}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),a(""),s.current.value="",t(r)},children:"X"})]})})}),T=(c(141),function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(!1),a=Object(O.a)(r,2),s=a[0],o=a[1],l=function(){var e=Object(m.a)(b.a.mark((function e(){var t,c,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},o(!0),e.next=4,x.get(t);case 4:c=e.sent,n(c),console.log(c),o(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){l()}),[]);return Object(v.jsx)("div",{className:"page-container",children:s?Object(v.jsx)("p",{children:"Loading"}):Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{handleSearch:function(e){l({q:e})}}),Object(v.jsx)(E,{items:c})]})})}),R=c(19),S=c(6),A=Object(i.createContext)(),P=function(e,t){switch(t.type){case"ADD_TO_CART":return[].concat(Object(S.a)(e),[t.item]);case"INCREMENT_QUANTITY":return Object(S.a)(e.map((function(e){return e.id===t.id?Object(R.a)(Object(R.a)({},e),{},{quantity:e.quantity<e.stockCount?e.quantity+1:e.quantity}):e})));case"DECREMENT_QUANTITY":return Object(S.a)(e.map((function(e){return e.id===t.payload?Object(R.a)(Object(R.a)({},e),{},{quantity:e.quantity-1}):e})));case"REMOVE_FROM_CART":return Object(S.a)(e.filter((function(e){return e.id!==t.payload})));case"CLEAR":return[];default:return e}},q=function(e){var t=e.children,c=Object(i.useReducer)(P,[]),n=Object(O.a)(c,2),r=n[0],a=n[1];return Object(v.jsx)(A.Provider,{value:{cart:r,addItem:function(e){var t=r.find((function(t){return t.id===e.id}));a(t?{type:"INCREMENT_QUANTITY",id:e.id}:{type:"ADD_TO_CART",item:e})},removeItem:function(e){var t=r.find((function(t){return t.id===e}));1===t.quantity?a({type:"REMOVE_FROM_CART",payload:e}):(a({type:"DECREMENT_QUANTITY",payload:e}),console.log(t.quantity))},getTotal:function(){return r.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},children:t})},_=function(){var e=Object(i.useContext)(A);if(void 0===e)throw new Error("useCart must be used within CartProvider");return e},D=(c(142),c(253)),L=function(e){var t=e.item,c=_(),n=c.addItem,r=c.removeItem;return Object(v.jsxs)("div",{className:"cart-item-container",children:[Object(v.jsx)("div",{className:"cart-img",children:Object(v.jsx)("img",{src:t.imageUrl,alt:"img"})}),Object(v.jsxs)("div",{className:"cart-item-info",children:[Object(v.jsx)("h3",{className:"cart-item-name",children:t.name}),Object(v.jsxs)("div",{className:"quantity-controller",children:[Object(v.jsx)(D.a,{variant:"success",onClick:function(){return n(t)},children:"+"}),Object(v.jsx)("p",{children:t.quantity}),Object(v.jsx)(D.a,{variant:"danger",onClick:function(){return r(t.id)},children:" - "})]})]}),Object(v.jsxs)("h2",{className:"cart-item-price",children:["$",(t.price*t.quantity).toFixed(2)]})]})},M=(c(143),function(){var e=_(),t=e.cart,c=e.getTotal;return Object(v.jsx)("div",{children:0===t.length?Object(v.jsx)("h2",{className:"empty-cart-info",children:" Your cart is empty "}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"cart-header",children:"Shopping Cart"}),Object(v.jsxs)("div",{className:"cart-container",children:[t.map((function(e){return Object(v.jsxs)("div",{className:"cart-item",children:[" ",Object(v.jsx)(L,{item:e})," "]})})),Object(v.jsxs)("footer",{className:"cart-summary",children:[Object(v.jsx)(j.b,{to:"/checkout",children:Object(v.jsx)(C,{label:"Checkout"})}),Object(v.jsxs)("h2",{children:["$",c()]})]})]})]})})}),U=function(){var e=Object(i.useState)([]),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(i.useState)(!1),a=Object(O.a)(r,2),s=a[0],o=a[1],l=function(){var e=Object(m.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,x.get({isOnSale:!0});case 3:t=e.sent,n(t.items),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l()}),[]),Object(v.jsx)("div",{children:s?Object(v.jsx)("p",{children:"Loading..."}):0!==c.length?Object(v.jsx)(E,{items:c}):"Currenty there are no items on sale :("})},F=(c(144),c(256)),z=Object(i.createContext)(),B=function(e,t){switch(t.type){case"ADD_NOTIFICATION":return[].concat(Object(S.a)(e),[t.newNotification]);case"REMOVE_NOTIFICATION":return Object(S.a)(e.filter((function(e){return e.id!==t.id})));default:return e}},Y=function(e){var t=e.children,c=Object(i.useReducer)(B,[]),n=Object(O.a)(c,2),r=n[0],a=n[1];return Object(v.jsx)(z.Provider,{value:{notifications:r,addNotification:function(e){var t={message:e,id:Object(F.a)()};a({type:"ADD_NOTIFICATION",newNotification:t}),console.log(r)},removeNotification:function(e){a({type:"REMOVE_NOTIFICATION",id:e})}},children:t})},$=function(){var e=Object(i.useContext)(z);if(void 0===e)throw new Error("useNotification must be used within NotificationProvider");return e},G=function(){var e=Object(u.f)().itemId,t=Object(i.useState)({}),c=Object(O.a)(t,2),n=c[0],r=c[1],a=_().addItem,s=$().addNotification;return Object(i.useEffect)((function(){(function(){var t=Object(m.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getById(e);case 2:c=t.sent,r(c);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(v.jsxs)("div",{className:"item-container",children:[Object(v.jsx)("div",{className:"product-img",children:Object(v.jsx)("img",{src:n.imageUrl,alt:n.name})}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsx)("h2",{className:"name",children:n.name}),Object(v.jsx)(y,{avgRating:n.avgRating}),Object(v.jsx)("p",{className:"description",children:n.description}),Object(v.jsxs)("h3",{className:"price",children:["$",n.price]}),Object(v.jsx)(C,{onClick:function(){a({name:n.name,id:e,imageUrl:n.imageUrl,price:n.price,stockCount:n.stockCount,quantity:1}),s("Item has been succesfully added")},label:"Add to cart"})]})]})},V=function(){return Object(v.jsx)("div",{children:"Thank you for purchase"})},Q=c(37),J=c(17),X=c(254);c(145);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)c=a[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function W(e,t){var c=e.title,s=e.titleId,o=K(e,["title","titleId"]);return i.createElement("svg",H({height:"32pt",viewBox:"0 -31 512.00026 512",width:"32pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},o),c?i.createElement("title",{id:s},c):null,n||(n=i.createElement("path",{fill:"white",d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"})),r||(r=i.createElement("path",{fill:"white",d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})),a||(a=i.createElement("path",{fill:"white",d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})))}var Z=i.forwardRef(W),ee=(c.p,c(146),c(147),function(e){var t=e.showPreview,c=_(),n=c.cart,r=c.getTotal;return 0===n.length?null:Object(v.jsxs)("div",{className:"cart-preview-container",style:{display:"".concat(t?"block":"none"," ")},children:[Object(v.jsx)("h3",{children:"Cart"}),n.map((function(e){return Object(v.jsxs)("div",{className:"preview-item",children:[Object(v.jsx)("div",{className:"preview-item-name",children:e.name}),Object(v.jsxs)("div",{className:"preview-item-price",children:["$",e.price*e.quantity]})]})})),Object(v.jsxs)("div",{className:"preview-total-price",children:["$",r()]}),Object(v.jsx)("button",{children:"Go to Cart"})]})}),te=function(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),c=t[0],n=t[1],r=_().cart;return Object(v.jsxs)("div",{onMouseOver:function(){return n(!0)},onMouseOut:function(){return n(!1)},children:[Object(v.jsx)(Z,{}),Object(v.jsx)("span",{className:r.length>0?"cart-badge":"hidden",children:function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)}(r)}),Object(v.jsx)(ee,{showPreview:c,cart:r})]})},ce=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(Q.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(v.jsxs)(X.a,{children:[Object(v.jsx)(Q.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(Q.a.Brand,{className:"px-2",as:j.b,to:"/",children:"super store"}),Object(v.jsx)(Q.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(J.a,{className:"me-auto",children:[Object(v.jsx)(J.a.Item,{children:Object(v.jsx)(J.a.Link,{as:j.b,to:"/",children:"Home"})}),Object(v.jsx)(J.a.Item,{children:Object(v.jsx)(J.a.Link,{as:j.b,to:"/deals",children:"Deals"})}),Object(v.jsx)(J.a.Item,{children:Object(v.jsx)(J.a.Link,{as:j.b,to:"/signup",children:"Signup"})})]})}),Object(v.jsx)(J.a,{className:"ms-auto",children:Object(v.jsx)(J.a.Item,{children:Object(v.jsx)(J.a.Link,{as:j.b,to:"/cart",children:Object(v.jsx)(te,{})})})})]})})})},ne=(c(149),c.p+"static/media/check-icon.38171eb0.svg"),re=function(e){var t=e.message,c=Object(i.useState)(!0),n=Object(O.a)(c,2),r=n[0],a=n[1],s=$(),o=s.notifications,l=s.removeNotification;return Object(i.useEffect)((function(){a(!r)}),[t]),Object(v.jsx)("div",{className:"notifications-container",children:o.map((function(e){return Object(v.jsxs)("div",{className:"notification-item",children:[Object(v.jsx)("div",{className:"notification-image",children:Object(v.jsx)("img",{src:ne,alt:"check-icon"})}),e.message,Object(v.jsx)("button",{onClick:function(){return l(e.id)},children:"X"})]},e.id)}))})},ae=c(26),ie=c(105),se=c(30),oe=c(255),le=(c(248),se.a().shape({name:se.c().required(),email:se.c().email().required(),password:se.c().required().min(5),confirmPassword:se.c().required("You must confirm password").oneOf([se.b("password"),null],"Passwords must match")})),je=function(){var e=Object(ae.d)({resolver:Object(ie.a)(le)}),t=e.register,c=e.handleSubmit,n=e.watch,r=e.formState.errors;return console.log(n("example")),Object(v.jsxs)("div",{className:"form-container",children:[Object(v.jsx)("h2",{className:"form-header",children:"Sign Up"}),Object(v.jsxs)("p",{className:"login-redirect-info",children:["Already have an account? ",Object(v.jsx)(j.b,{to:"/login",children:"Log in now"})]}),Object(v.jsxs)(oe.a,{onSubmit:c((function(e){return console.log(e)})),children:[Object(v.jsxs)(oe.a.Group,{className:"mb-3",controlId:"formName",children:[Object(v.jsx)(oe.a.Label,{children:"Name"}),Object(v.jsx)(oe.a.Control,Object(R.a)({type:"text",placeholder:"Enter name"},t("name"))),r.name&&Object(v.jsx)("p",{className:"form-error-message",children:r.name.message})]}),Object(v.jsxs)(oe.a.Group,{className:"mb-3",controlId:"formEmail",children:[Object(v.jsx)(oe.a.Label,{children:"Email address"}),Object(v.jsx)(oe.a.Control,Object(R.a)({type:"email",placeholder:"Enter email"},t("email"))),r.email&&Object(v.jsx)("p",{className:"form-error-message",children:r.email.message})]}),Object(v.jsxs)(oe.a.Group,{className:"mb-3",controlId:"formPassword",children:[Object(v.jsx)(oe.a.Label,{children:"Password"}),Object(v.jsx)(oe.a.Control,Object(R.a)({type:"password",placeholder:"Password"},t("password"))),r.password&&Object(v.jsx)("p",{className:"form-error-message",children:r.password.message})]}),Object(v.jsxs)(oe.a.Group,{className:"mb-3",controlId:"formConfirmPassword",children:[Object(v.jsx)(oe.a.Label,{children:"Confirm Password"}),Object(v.jsx)(oe.a.Control,Object(R.a)({type:"password",placeholder:"Confirm password"},t("confirmPassword"))),r.confirmPassword&&Object(v.jsx)("p",{className:"form-error-message",children:r.confirmPassword.message})]}),Object(v.jsx)(C,{label:"Sign Up"})]})]})};var ue=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(q,{children:Object(v.jsx)(Y,{children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(ce,{}),Object(v.jsx)(re,{}),Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/",component:T}),Object(v.jsx)(u.a,{path:"/deals",component:U}),Object(v.jsx)(u.a,{path:"/cart",component:M}),Object(v.jsx)(u.a,{path:"/checkout",component:V}),Object(v.jsx)(u.a,{path:"/signup",component:je}),Object(v.jsx)(u.a,{path:"/item/:itemId",component:G})]})]})})})})},de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,257)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};c(249);l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(ue,{})}),document.getElementById("root")),de()}},[[250,1,2]]]);
//# sourceMappingURL=main.fc5d5b88.chunk.js.map
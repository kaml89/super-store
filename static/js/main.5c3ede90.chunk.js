(this["webpackJsonpsuper-store"]=this["webpackJsonpsuper-store"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c,r,a,i=n(0),s=n.n(i),o=n(21),u=n.n(o),j=(n(52),n(12)),l=n(4),d=(n(53),n(9)),b=n.n(d),O=n(14),f=n(7),m=n(32),h=n.n(m),p="https://gp-super-store-api.herokuapp.com/item/",x={get:function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(p,"/list"),{params:t});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getById:function(){var e=Object(O.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(p,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},v=(n(73),n(1)),g=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg",alt:""})},N=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star-half-c86abc67a14feafe9a821fd5e06e5833.svg",alt:""})},w=function(){return Object(v.jsx)("img",{src:"https://www.guidedprojects.dev/assets/files/star-empty-849812a23c4515e156571518674ae723.svg",alt:""})},y=function(e){var t=e.avgRating,n=Math.floor(t),c=t%1===0?0:1;return Object(v.jsx)("div",{children:Array(5).fill(Object(v.jsx)(g,{}),0).fill(Object(v.jsx)(N,{}),n,n+c).fill(Object(v.jsx)(w,{}),n+c)})},C=(n(75),function(e){var t=e.label,n=e.onClick;return Object(v.jsx)("button",{onClick:n,className:"button",children:t})}),I=function(e){var t=e.avgRating,n=e.imageUrl,c=e.name,r=e.price,a=e.id;return Object(v.jsxs)("div",{className:"item-card",children:[Object(v.jsx)("div",{className:"img-wrapper",children:Object(v.jsx)("img",{className:"item-card-img",src:n,alt:c})}),Object(v.jsxs)("div",{className:"item-card-details",children:[Object(v.jsx)(j.c,{to:"/item/".concat(a),className:"item-card-name",children:c}),Object(v.jsx)(y,{avgRating:t}),Object(v.jsxs)("div",{className:"item-card-price",children:[" $",r]}),Object(v.jsx)(j.c,{to:"/item/".concat(a),children:Object(v.jsx)(C,{label:"View Item"})})]})]})},T=(n(81),function(e){var t=e.items;return Object(v.jsx)("div",{className:"items-list",children:t.map((function(e){return Object(v.jsx)(I,{id:e._id,imageUrl:e.imageUrl,name:e.name,price:e.price,avgRating:e.avgRating},e._id)}))})}),k=(n(82),function(e){var t=e.handleSearch,n=Object(i.useState)(""),c=Object(f.a)(n,2),r=c[0],a=c[1],s=Object(i.useRef)(null);return Object(v.jsx)("div",{className:"search-bar",children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(v.jsx)("input",{type:"text",ref:s,onChange:function(e){return a(e.target.value)}}),Object(v.jsx)("button",{children:"search"}),Object(v.jsx)("button",{onClick:function(e){e.preventDefault(),a(""),s.current.value="",t(r)},children:"X"})]})})}),E=(n(83),function(){var e=Object(i.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),a=Object(f.a)(r,2),s=a[0],o=a[1],u=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},o(!0),e.next=4,x.get(t);case 4:n=e.sent,c(n.items),o(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){u()}),[]);return Object(v.jsx)("div",{className:"page-container",children:s?Object(v.jsx)("p",{children:"Loading"}):Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{handleSearch:function(e){u({q:e})}}),Object(v.jsx)(T,{items:n})]})})}),R=n(24),A=n(19),_=Object(i.createContext)(),S=function(e,t){switch(t.type){case"ADD_TO_CART":return[].concat(Object(A.a)(e),[t.item]);case"INCREMENT_QUANTITY":return Object(A.a)(e.map((function(e){return e.id===t.id?Object(R.a)(Object(R.a)({},e),{},{quantity:e.quantity<e.stockCount?e.quantity+1:e.quantity}):e})));case"DECREMENT_QUANTITY":return Object(A.a)(e.map((function(e){return e.id===t.payload?Object(R.a)(Object(R.a)({},e),{},{quantity:e.quantity-1}):e})));case"REMOVE_FROM_CART":return Object(A.a)(e.filter((function(e){return e.id!==t.payload})));case"CLEAR":return[];default:return e}},q=function(e){var t=e.children,n=Object(i.useReducer)(S,[]),c=Object(f.a)(n,2),r=c[0],a=c[1];return Object(v.jsx)(_.Provider,{value:{cart:r,addItem:function(e){var t=r.find((function(t){return t.id===e.id}));a(t?{type:"INCREMENT_QUANTITY",id:e.id}:{type:"ADD_TO_CART",item:e})},removeItem:function(e){var t=r.find((function(t){return t.id===e}));1===t.quantity?a({type:"REMOVE_FROM_CART",payload:e}):(a({type:"DECREMENT_QUANTITY",payload:e}),console.log(t.quantity))},getTotal:function(){return r.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},children:t})},D=function(){var e=Object(i.useContext)(_);if(void 0===e)throw new Error("useCart must be used within CartProvider");return e},M=(n(84),n(98)),F=function(e){var t=e.item,n=D(),c=n.addItem,r=n.removeItem;return Object(v.jsxs)("div",{className:"cart-item-container",children:[Object(v.jsx)("div",{className:"cart-img",children:Object(v.jsx)("img",{src:t.imageUrl,alt:"img"})}),Object(v.jsxs)("div",{className:"cart-item-info",children:[Object(v.jsx)("h3",{className:"cart-item-name",children:t.name}),Object(v.jsxs)("div",{className:"quantity-controller",children:[Object(v.jsx)(M.a,{variant:"success",onClick:function(){return c(t)},children:"+"}),Object(v.jsx)("p",{children:t.quantity}),Object(v.jsx)(M.a,{variant:"danger",onClick:function(){return r(t.id)},children:" - "})]})]}),Object(v.jsxs)("h2",{className:"cart-item-price",children:["$",(t.price*t.quantity).toFixed(2)]})]})},P=(n(85),function(){var e=D(),t=e.cart,n=e.getTotal;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{className:"cart-header",children:"Shopping Cart"}),Object(v.jsxs)("div",{className:"cart-container",children:[t.map((function(e){return Object(v.jsxs)("div",{className:"cart-item",children:[" ",Object(v.jsx)(F,{item:e})," "]})})),Object(v.jsxs)("footer",{className:"cart-summary",children:[Object(v.jsx)(j.b,{to:"/checkout",children:Object(v.jsx)(C,{label:"Checkout"})}),Object(v.jsxs)("h2",{children:["$",n()]})]})]})]})}),U=function(){var e=Object(i.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(!1),a=Object(f.a)(r,2),s=a[0],o=a[1],u=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,x.get({isOnSale:!0});case 3:t=e.sent,c(t.items),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){u()}),[]),Object(v.jsx)("div",{children:s?Object(v.jsx)("p",{children:"Loading..."}):0!==n.length?Object(v.jsx)(T,{items:n}):"Currenty there are no items on sale :("})},L=(n(86),n(100)),z=Object(i.createContext)(),B=function(e,t){switch(t.type){case"ADD_NOTIFICATION":return[].concat(Object(A.a)(e),[t.newNotification]);case"REMOVE_NOTIFICATION":return Object(A.a)(e.filter((function(e){return e.id!==t.id})));default:return e}},$=function(e){var t=e.children,n=Object(i.useReducer)(B,[]),c=Object(f.a)(n,2),r=c[0],a=c[1];return Object(v.jsx)(z.Provider,{value:{notifications:r,addNotification:function(e){var t={message:e,id:Object(L.a)()};a({type:"ADD_NOTIFICATION",newNotification:t}),console.log(r)},removeNotification:function(e){a({type:"REMOVE_NOTIFICATION",id:e})}},children:t})},V=function(){var e=Object(i.useContext)(z);if(void 0===e)throw new Error("useNotification must be used within NotificationProvider");return e},Q=function(){var e=Object(l.f)().itemId,t=Object(i.useState)({}),n=Object(f.a)(t,2),c=n[0],r=n[1],a=D().addItem,s=V().addNotification;return Object(i.useEffect)((function(){(function(){var t=Object(O.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.getById(e);case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(v.jsxs)("div",{className:"item-container",children:[Object(v.jsx)("div",{className:"product-img",children:Object(v.jsx)("img",{src:c.imageUrl,alt:c.name})}),Object(v.jsxs)("div",{className:"info",children:[Object(v.jsx)("h2",{className:"name",children:c.name}),Object(v.jsx)(y,{avgRating:c.avgRating}),Object(v.jsx)("p",{className:"description",children:c.description}),Object(v.jsxs)("h3",{className:"price",children:["$",c.price]}),Object(v.jsx)(C,{onClick:function(){a({name:c.name,id:e,imageUrl:c.imageUrl,price:c.price,stockCount:c.stockCount,quantity:1}),s("Item has been succesfully added")},label:"Add to cart"})]})]})},Y=function(){return Object(v.jsx)("div",{children:"Thank you for purchase"})},J=n(23),X=n(16),G=n(99);n(87);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){var n=e.title,s=e.titleId,o=K(e,["title","titleId"]);return i.createElement("svg",H({height:"32pt",viewBox:"0 -31 512.00026 512",width:"32pt",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},o),n?i.createElement("title",{id:s},n):null,c||(c=i.createElement("path",{fill:"white",d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"})),r||(r=i.createElement("path",{fill:"white",d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})),a||(a=i.createElement("path",{fill:"white",d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})))}var Z=i.forwardRef(W),ee=(n.p,n(88),n(89),function(e){var t=e.showPreview,n=D(),c=n.cart,r=n.getTotal;return 0===c.length?null:Object(v.jsxs)("div",{className:"cart-preview-container",style:{display:"".concat(t?"block":"none"," ")},children:[Object(v.jsx)("h3",{children:"Cart"}),c.map((function(e){return Object(v.jsxs)("div",{className:"preview-item",children:[Object(v.jsx)("div",{className:"preview-item-name",children:e.name}),Object(v.jsxs)("div",{className:"preview-item-price",children:["$",e.price*e.quantity]})]})})),Object(v.jsxs)("div",{className:"preview-total-price",children:["$",r()]}),Object(v.jsx)("button",{children:"Go to Cart"})]})}),te=function(){var e=Object(i.useState)(!1),t=Object(f.a)(e,2),n=t[0],c=t[1],r=D().cart;return Object(v.jsxs)("div",{onMouseOver:function(){return c(!0)},onMouseOut:function(){return c(!1)},children:[Object(v.jsx)(Z,{}),Object(v.jsx)("span",{className:r.length>0?"cart-badge":"hidden",children:function(e){return e.map((function(e){return e.quantity})).reduce((function(e,t){return e+t}),0)}(r)}),Object(v.jsx)(ee,{showPreview:n,cart:r})]})},ne=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(J.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(v.jsxs)(G.a,{children:[Object(v.jsx)(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(J.a.Brand,{className:"px-2",as:j.b,to:"/",children:"super store"}),Object(v.jsx)(J.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(X.a,{className:"me-auto",children:[Object(v.jsx)(X.a.Item,{children:Object(v.jsx)(X.a.Link,{as:j.b,to:"/",children:"Home"})}),Object(v.jsx)(X.a.Item,{children:Object(v.jsx)(X.a.Link,{as:j.b,to:"/deals",children:"Deals"})})]})}),Object(v.jsx)(X.a,{className:"ms-auto",children:Object(v.jsx)(X.a.Item,{children:Object(v.jsx)(X.a.Link,{as:j.b,to:"/cart",children:Object(v.jsx)(te,{})})})})]})})})},ce=(n(93),n.p+"static/media/check-icon.38171eb0.svg"),re=function(e){var t=e.message,n=Object(i.useState)(!0),c=Object(f.a)(n,2),r=c[0],a=c[1],s=V(),o=s.notifications,u=s.removeNotification;return Object(i.useEffect)((function(){a(!r)}),[t]),Object(v.jsx)("div",{className:"notifications-container",children:o.map((function(e){return Object(v.jsxs)("div",{className:"notification-item",children:[Object(v.jsx)("div",{className:"notification-image",children:Object(v.jsx)("img",{src:ce,alt:"check-icon"})}),e.message,Object(v.jsx)("button",{onClick:function(){return u(e.id)},children:"X"})]},e.id)}))})};var ae=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(q,{children:Object(v.jsx)($,{children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(ne,{}),Object(v.jsx)(re,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(l.a,{path:"/deals",component:U}),Object(v.jsx)(l.a,{path:"/cart",component:P}),Object(v.jsx)(l.a,{path:"/checkout",component:Y}),Object(v.jsx)(l.a,{path:"/item/:itemId",component:Q})]})]})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};n(94);u.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[95,1,2]]]);
//# sourceMappingURL=main.5c3ede90.chunk.js.map
(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{40:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r,c,i,a,s,l=n(4),o=n.n(l),b=n(43),u=n.n(b),d=n(30),p=n(22),m=n(53),j=n(31),h=n(48),O=n(54),g=n.n(O),f=n(55),x=n.n(f),v=n(16),w="SET_CURRENT_USER",y={currentUser:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type===w?Object(v.a)(Object(v.a)({},e),{},{currentUser:t.payload}):e},N={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},C=n(24),E=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(C.a)(e),[Object(v.a)(Object(v.a)({},t),{},{quantity:1})])},S=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{quantity:e.quantity-1}):e}))},U={hidden:!0,cartItems:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.TOGGLE_CART_HIDDEN:return Object(v.a)(Object(v.a)({},e),{},{hidden:!e.hidden});case N.ADD_ITEM:return Object(v.a)(Object(v.a)({},e),{},{cartItems:E(e.cartItems,t.payload)});case N.REMOVE_ITEM:return Object(v.a)(Object(v.a)({},e),{},{cartItems:S(e.cartItems,t.payload)});case N.CLEAR_ITEM_FROM_CART:return Object(v.a)(Object(v.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},T=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25,topSeller:!0},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18,topSeller:!0},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14,topSeller:!0},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220,topSeller:!0},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110,topSeller:!0},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160,topSeller:!0},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125,topSeller:!0},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90,topSeller:!0},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185,topSeller:!0}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25,topSeller:!0},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80,topSeller:!0},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45,topSeller:!0},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20,topSeller:!0}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325,topSeller:!0},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25,topSeller:!0},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25,topSeller:!0},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25,topSeller:!0}]}],A={collections:T},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type,e},P={key:"root",storage:x.a,whitelist:["cart"]},R=Object(j.b)({user:k,cart:I,shop:M}),B=Object(h.a)(P,R),_=[g.a],D=Object(j.c)(B,j.a.apply(void 0,_)),G=Object(h.b)(D),L=(n(74),n(0)),H=n.n(L),V=n(2),q=n(1),z=n(3),W=n(11),J=n(12),F=n(14),K=n(19),Q=(n(76),n(33)),X=(n(77),n(5)),Y=function(e){var t=e.title,n=e.imageUrl,r=e.size,c=Object(F.g)();return Object(X.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){switch(t){case"hats":c("/"+T[0].title.toLowerCase());break;case"sneakers":c("/"+T[1].title.toLowerCase());break;case"jackets":c("/"+T[2].title.toLowerCase());break;case"womens":c("/"+T[3].title.toLowerCase());break;case"mens":c("/"+T[4].title.toLowerCase());break;default:return}},children:[Object(X.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(X.jsxs)("div",{className:"content",children:[Object(X.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(X.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})},Z=(n(79),["id"]),$=function(e){Object(W.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(q.a)(this,n),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]},e}return Object(z.a)(n,[{key:"render",value:function(){return Object(X.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,n=Object(Q.a)(e,Z);return Object(X.jsx)(Y,Object(v.a)({},n),t)}))})}}]),n}(o.a.Component),ee=(n(80),n(81),n(82),n(27)),te=n(20),ne=Object(te.a)(r||(r=Object(ee.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]))),re=Object(te.a)(c||(c=Object(ee.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n\n    &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n    }\n"]))),ce=Object(te.a)(i||(i=Object(ee.a)(["\n    background-color: #4285f4;\n    color: white;\n    border: none;\n    &:hover {\n    background-color: #357ae8;\n    }\n"]))),ie=te.b.button(a||(a=Object(ee.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    ","\n"])),(function(e){return e.isGoogleSignIn?ce:e.inverted?re:ne})),ae=["children"],se=function(e){var t=e.children,n=Object(Q.a)(e,ae);return Object(X.jsx)(ie,Object(v.a)(Object(v.a)({},n),{},{children:t}))},le=function(){return{type:N.TOGGLE_CART_HIDDEN}},oe=function(e){return{type:N.ADD_ITEM,payload:e}},be=(n(83),Object(p.b)(null,(function(e){return{addItem:function(t){return e(oe(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,i=t.imageUrl;return Object(X.jsxs)("div",{className:"collection-item",children:[Object(X.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(X.jsxs)("div",{className:"collection-footer",children:[Object(X.jsx)("span",{className:"name",children:r}),Object(X.jsxs)("span",{className:"price",children:["$",c]})]}),Object(X.jsx)(se,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}))),ue=n(62),de=function(){var e=T[0].items.concat(T[1].items,T[2].items,T[3].items,T[4].items).filter((function(e){return!0===e.topSeller}));return Object(X.jsx)("div",{class:"ts-item",children:Object(X.jsx)(ue.a,{itemsToShow:4,itemsToScroll:4,enableAutoPlay:!0,autoPlaySpeed:5e3,children:e.map((function(e){return Object(X.jsx)(be,{id:e.id,item:e})}))})})},pe=function(){return Object(X.jsxs)("div",{class:"top-sellers",children:[Object(X.jsx)("h2",{children:"TOP SELLERS"}),Object(X.jsx)(de,{})]})},me=te.b.div(s||(s=Object(ee.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),je=function(){return Object(X.jsxs)(me,{children:[Object(X.jsx)($,{}),Object(X.jsx)(pe,{})]})},he=(n(84),function(e){var t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-preview",children:[Object(X.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(X.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})}),Oe=Object(K.a)([function(e){return e.shop}],(function(e){return e.collections})),ge=(Object(K.a)([Oe],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),n(85),["id"]),fe=Object(K.b)({collections:Oe}),xe=Object(p.b)(fe)((function(e){var t=e.collections;return Object(X.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(Q.a)(e,ge);return Object(X.jsx)(he,Object(v.a)({},n),t)}))})})),ve=function(e){Object(W.a)(n,e);var t=Object(J.a)(n);function n(e){var r;return Object(q.a)(this,n),(r=t.call(this,e)).state={collections:T},r}return Object(z.a)(n,[{key:"render",value:function(){return Object(X.jsx)("div",{className:"shop-page",children:Object(X.jsx)(xe,{})})}}]),n}(o.a.Component),we=n(6),ye=(n(86),["handleChange","label"]),ke=function(e){var t=e.handleChange,n=e.label,r=Object(Q.a)(e,ye);return Object(X.jsxs)("div",{className:"group",children:[Object(X.jsx)("input",Object(v.a)({className:"form-input",onChange:t},r)),n?Object(X.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null]})},Ne=n(38);n(99),n(87);Ne.a.initializeApp({apiKey:"AIzaSyB6Eozc1i75oOiIQ-Rd4t0XDvnIrCT2PK4",authDomain:"crwn-db-64351.firebaseapp.com",projectId:"crwn-db-64351",storageBucket:"crwn-db-64351.appspot.com",messagingSenderId:"676346236774",appId:"1:676346236774:web:ceb1512bc5d0ac780602a7",measurementId:"G-656V16SDDV"});var Ce=function(){var e=Object(V.a)(H.a.mark((function e(t,n){var r,c,i,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=Se.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,i=t.email,a=new Date,e.prev=9,e.next=12,r.set(Object(v.a)({displayName:c,email:i,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),Ee=Ne.a.auth(),Se=Ne.a.firestore(),Ue=new Ne.a.auth.GoogleAuthProvider;Ue.setCustomParameters({prompt:"select_account"});var Ie,Te,Ae,Me,Pe,Re,Be,_e,De,Ge,Le,He,Ve,qe,ze,We=function(){return Ee.signInWithPopup(Ue)},Je=(Ne.a,n(89),function(e){Object(W.a)(n,e);var t=Object(J.a)(n);function n(e){var r;return Object(q.a)(this,n),(r=t.call(this,e)).handleSubmit=function(){var e=Object(V.a)(H.a.mark((function e(t){var n,c,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state,c=n.email,i=n.password,e.prev=2,e.next=5,Ee.signInWithEmailAndPassword(c,i);case 5:r.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),r.handleChange=function(e){var t=e.target,n=t.value,c=t.name;r.setState(Object(we.a)({},c,n))},r.state={email:"",password:""},r}return Object(z.a)(n,[{key:"render",value:function(){return Object(X.jsxs)("div",{className:"sign-in",children:[Object(X.jsx)("h2",{children:"I already have an account"}),Object(X.jsx)("span",{children:"Sign in with your email and password"}),Object(X.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(X.jsx)(ke,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(X.jsx)(ke,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),Object(X.jsxs)("div",{className:"buttons",children:[Object(X.jsx)(se,{type:"submit",children:" Sign in "}),Object(X.jsx)(se,{onClick:We,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(o.a.Component)),Fe=Je,Ke=(n(90),function(e){Object(W.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(q.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(V.a)(H.a.mark((function t(n){var r,c,i,a,s,l,o;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.displayName,i=r.email,a=r.password,s=r.confirmPassword,a===s){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Ee.createUserWithEmailAndPassword(i,a);case 8:return l=t.sent,o=l.user,t.next=12,Ce(o,{displayName:c});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,r=n.name,c=n.value;e.setState(Object(we.a)({},r,c))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(z.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return Object(X.jsxs)("div",{className:"sign-up",children:[Object(X.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(X.jsx)("span",{children:"Sign up with your email and password"}),Object(X.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(X.jsx)(ke,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(X.jsx)(ke,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(X.jsx)(ke,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),Object(X.jsx)(ke,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(X.jsx)(se,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(o.a.Component)),Qe=Ke,Xe=(n(91),function(){return Object(X.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(X.jsx)(Fe,{}),Object(X.jsx)(Qe,{})]})}),Ye=(n(92),Object(p.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:N.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(oe(t))},removeItem:function(t){return e(function(e){return{type:N.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,i=t.name,a=t.imageUrl,s=t.price,l=t.quantity;return Object(X.jsxs)("div",{className:"checkout-item",children:[Object(X.jsx)("div",{className:"image-container",children:Object(X.jsx)("img",{src:a,alt:"item"})}),Object(X.jsx)("span",{className:"name",children:i}),Object(X.jsxs)("span",{className:"quantity",children:[Object(X.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(X.jsx)("span",{className:"value",children:l}),Object(X.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(X.jsxs)("span",{className:"price",children:["$",s]}),Object(X.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),Ze=function(e){return e.cart},$e=Object(K.a)([Ze],(function(e){return e.cartItems})),et=Object(K.a)([Ze],(function(e){return e.hidden})),tt=Object(K.a)([$e],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),nt=Object(K.a)([$e],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),rt=(n(93),n(61)),ct=n.n(rt),it=function(e){var t=e.price,n=100*t;return Object(X.jsx)(ct.a,{label:"Pay now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"../../assets/credit-card-icon-png-4401.png",description:"Your total is ".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51K8MVyGsqJpxK7EVuXazTVX4VmiZeimgCNBEewZHXgiSfyCQKftm0QHfe2UAmzs4KxAAESHmm3EsUb5e96zPGQ2v00MSrTxzqR"})},at=Object(K.b)({cartItems:$e,total:nt}),st=Object(p.b)(at)((function(e){var t=e.cartItems,n=e.total;return Object(X.jsxs)("div",{className:"checkout-page",children:[Object(X.jsxs)("div",{className:"checkout-header",children:[Object(X.jsx)("div",{className:"header-block",children:Object(X.jsx)("span",{children:"Product"})}),Object(X.jsx)("div",{className:"header-block",children:Object(X.jsx)("span",{children:"Description"})}),Object(X.jsx)("div",{className:"header-block",children:Object(X.jsx)("span",{children:"Quantity"})}),Object(X.jsx)("div",{className:"header-block",children:Object(X.jsx)("span",{children:"Price"})}),Object(X.jsx)("div",{className:"header-block",children:Object(X.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(X.jsx)(Ye,{cartItem:e},e.id)})),Object(X.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(X.jsx)(it,{price:n})]})})),lt=(n(40),function(){var e=T[0],t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-page",children:[Object(X.jsx)("div",{className:"title",children:Object(X.jsx)("h2",{children:t.toUpperCase()})}),Object(X.jsx)("div",{className:"items",children:n.map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})}),ot=function(){var e=T[2],t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-page",children:[Object(X.jsx)("div",{className:"title",children:Object(X.jsx)("h2",{children:t.toUpperCase()})}),Object(X.jsx)("div",{className:"items",children:n.map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})},bt=function(){var e=T[1],t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-page",children:[Object(X.jsx)("div",{className:"title",children:Object(X.jsx)("h2",{children:t.toUpperCase()})}),Object(X.jsx)("div",{className:"items",children:n.map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})},ut=function(){var e=T[3],t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-page",children:[Object(X.jsx)("div",{className:"title",children:Object(X.jsx)("h2",{children:t.toUpperCase()})}),Object(X.jsx)("div",{className:"items",children:n.map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})},dt=function(){var e=T[4],t=e.title,n=e.items;return Object(X.jsxs)("div",{className:"collection-page",children:[Object(X.jsx)("div",{className:"title",children:Object(X.jsx)("h2",{children:t.toUpperCase()})}),Object(X.jsx)("div",{className:"items",children:n.map((function(e){return Object(X.jsx)(be,{item:e},e.id)}))})]})},pt=["title","titleId"];function mt(){return mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}function jt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ht(e,t){var n=e.title,r=e.titleId,c=jt(e,pt);return l.createElement("svg",mt({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,l.createElement("g",null,l.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),l.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),l.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),l.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ie||(Ie=l.createElement("g",null)),Te||(Te=l.createElement("g",null)),Ae||(Ae=l.createElement("g",null)),Me||(Me=l.createElement("g",null)),Pe||(Pe=l.createElement("g",null)),Re||(Re=l.createElement("g",null)),Be||(Be=l.createElement("g",null)),_e||(_e=l.createElement("g",null)),De||(De=l.createElement("g",null)),Ge||(Ge=l.createElement("g",null)),Le||(Le=l.createElement("g",null)),He||(He=l.createElement("g",null)),Ve||(Ve=l.createElement("g",null)),qe||(qe=l.createElement("g",null)),ze||(ze=l.createElement("g",null)))}var Ot,gt,ft,xt,vt,wt,yt,kt,Nt=l.forwardRef(ht),Ct=(n.p,n(94),Object(K.b)({itemCount:tt})),Et=Object(p.b)(Ct,(function(e){return{toggleCartHidden:function(){return e(le())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(X.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(X.jsx)(Nt,{className:"shopping-icon"}),Object(X.jsx)("span",{className:"item-count",children:n})]})})),St=(n(95),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return Object(X.jsxs)("div",{className:"cart-item",children:[Object(X.jsx)("img",{src:n,alt:"item"}),Object(X.jsxs)("div",{className:"item-details",children:[Object(X.jsx)("span",{className:"name",children:c}),Object(X.jsxs)("span",{className:"price",children:[i," x $",r]})]})]})}),Ut=(n(96),Object(K.b)({cartItems:$e})),It=Object(p.b)(Ut)((function(e){var t=e.cartItems,n=e.dispatch;return Object(X.jsxs)("div",{className:"cart-dropdown",children:[Object(X.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(X.jsx)(St,{item:e},e.id)})):Object(X.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(X.jsx)(d.b,{to:"/checkout",children:Object(X.jsx)(se,{onClick:function(){n(le())},children:"GO TO CHECKOUT"})})]})})),Tt=Object(K.a)([function(e){return e.user}],(function(e){return e.currentUser})),At=Object(te.a)(Ot||(Ot=Object(ee.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]))),Mt=te.b.div(gt||(gt=Object(ee.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]))),Pt=Object(te.b)(d.b)(ft||(ft=Object(ee.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]))),Rt=te.b.div(xt||(xt=Object(ee.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]))),Bt=Object(te.b)(d.b)(vt||(vt=Object(ee.a)(["\n    ","\n"])),At),_t=te.b.div(wt||(wt=Object(ee.a)(["\n    ","\n"])),At),Dt=["title","titleId"];function Gt(){return Gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gt.apply(this,arguments)}function Lt(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Ht(e,t){var n=e.title,r=e.titleId,c=Lt(e,Dt);return l.createElement("svg",Gt({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),void 0===n?l.createElement("title",{id:r},"Group"):n?l.createElement("title",{id:r},n):null,yt||(yt=l.createElement("desc",null,"Created with Sketch.")),kt||(kt=l.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},l.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},l.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},l.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),l.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),l.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var Vt=l.forwardRef(Ht),qt=(n.p,n(97),Object(K.b)({currentUser:Tt,hidden:et})),zt=Object(p.b)(qt)((function(e){var t=e.currentUser,n=e.hidden;return Object(X.jsxs)(Mt,{children:[Object(X.jsx)(Pt,{to:"/home",children:Object(X.jsx)(Vt,{className:"logo"})}),Object(X.jsxs)(Rt,{children:[Object(X.jsx)(Bt,{to:"/shop",children:"SHOP"}),Object(X.jsx)(Bt,{to:"/shop",children:"CONTACT"}),t?Object(X.jsx)(_t,{onClick:function(){return Ee.signOut()},children:"SIGN OUT"}):Object(X.jsx)(Bt,{to:"/signin",children:"SIGN IN"}),Object(X.jsx)(Et,{})]}),n?null:Object(X.jsx)(It,{})]})})),Wt=function(e){Object(W.a)(n,e);var t=Object(J.a)(n);function n(){var e;Object(q.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).unsubscribeFromAuth=null,e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Ee.onAuthStateChanged(function(){var t=Object(V.a)(H.a.mark((function t(n){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Ce(n);case 3:t.sent.onSnapshot((function(t){e(Object(v.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)(zt,{}),Object(X.jsxs)(F.d,{children:[Object(X.jsx)(F.b,{path:"/home",element:Object(X.jsx)(je,{})}),Object(X.jsx)(F.b,{path:"/crwn-clothing",element:Object(X.jsx)(je,{})}),Object(X.jsx)(F.b,{path:"/shop",element:Object(X.jsx)(ve,{})}),Object(X.jsx)(F.b,{path:"/shop",element:Object(X.jsx)(ve,{})}),Object(X.jsx)(F.b,{path:"/checkout",element:Object(X.jsx)(st,{})}),Object(X.jsx)(F.b,{path:"/signin",element:this.props.currentUser?Object(X.jsx)(F.a,{replace:!0,to:"/"}):Object(X.jsx)(Xe,{})}),Object(X.jsx)(F.b,{path:"hats",element:Object(X.jsx)(lt,{})}),Object(X.jsx)(F.b,{path:"jackets",element:Object(X.jsx)(ot,{})}),Object(X.jsx)(F.b,{path:"sneakers",element:Object(X.jsx)(bt,{})}),Object(X.jsx)(F.b,{path:"womens",element:Object(X.jsx)(ut,{})}),Object(X.jsx)(F.b,{path:"mens",element:Object(X.jsx)(dt,{})})]})]})}}]),n}(o.a.Component),Jt=Object(K.b)({currentUser:Tt}),Ft=Object(p.b)(Jt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:w,payload:e}}(t))}}}))(Wt);u.a.render(Object(X.jsx)(p.a,{store:D,children:Object(X.jsx)(d.a,{children:Object(X.jsx)(m.a,{persistor:G,children:Object(X.jsx)(Ft,{})})})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.b104f112.chunk.js.map
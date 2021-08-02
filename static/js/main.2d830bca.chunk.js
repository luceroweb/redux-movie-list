(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var s=n(27),c=n(28),r=n(6),a=n(19),i=n.n(a),o=n(18),l=n(0),d=function(){return{type:"GET_MOVIE_LIST"}},u=n(12),j=n.n(u),b=n(24),m=n(54),x=n(55),O=n(41),h=n.n(O),p="19c7ac68",v=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,[{key:"getMoviesByTitle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e?h.a.get("https://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&apikey=").concat(p)).then((function(e){return e.data})).catch((function(e){return console.error(e)})):null}},{key:"getMovieById",value:function(e){return h.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat(p)).then((function(e){return e.data})).catch((function(e){return console.error(e)}))}}]),e}(),f=n(2),g=function(e){var t=e.imdbID,n=Object(l.useState)(),s=Object(o.a)(n,2),c=s[0],r=s[1];return Object(l.useEffect)((function(){var e=new v;(function(){var t=Object(b.a)(j.a.mark((function t(n){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMovieById(n);case 2:s=t.sent,r(s);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(t)}),[t]),c?Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-6 text-center",children:[Object(f.jsx)("img",{variant:"top",src:"N/A"!==c.Poster?c.Poster:"/redux-movie-list/images/popcornPoster.jpg",alt:"".concat(c.Title," poster"),style:{width:"100%"}}),"N/A"===c.Poster?Object(f.jsx)("span",{className:"text-secondary",children:"No poster avaialble"}):null]}),Object(f.jsxs)("div",{className:"col-md-6",children:["N/A"!==c.imdbRating&&Object(f.jsx)("strong",{className:"float-end text-primary h4",children:c.imdbRating}),Object(f.jsx)("h4",{children:Object(f.jsx)("strong",{children:c.Title})}),"N/A"!==c.Rated&&Object(f.jsx)("span",{className:"badge bg-secondary m-1",children:c.Rated}),"N/A"!==c.Runtime&&Object(f.jsx)("span",{className:"badge bg-secondary m-1",children:c.Runtime}),"N/A"!==c.Genre&&Object(f.jsx)("span",{className:"badge bg-secondary m-1",children:c.Genre}),"N/A"!==c.Plot&&Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Plot"}),Object(f.jsx)("br",{}),c.Plot]}),"N/A"!==c.Actors&&Object(f.jsxs)("p",{children:[Object(f.jsx)("strong",{children:"Actors"}),Object(f.jsx)("br",{}),c.Actors]})]})]}):Object(f.jsx)("h2",{children:"Loading..."})},y=function(e){var t,n=e.onClose,s=e.children,c=e.buttons;setTimeout((function(){(t=document.getElementById("exampleModal")).classList.add("show")}),500);var r=function(){t.classList.remove("show"),setTimeout((function(){return n()}),500)};return Object(f.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",style:{display:"block"},children:Object(f.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-scrollable",children:Object(f.jsxs)("div",{className:"modal-content p-0",children:[Object(f.jsx)("div",{className:"modal-header",children:Object(f.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:r})}),Object(f.jsx)("div",{className:"modal-body",children:s}),Object(f.jsxs)("div",{className:"modal-footer",children:[c,Object(f.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:r,children:"Close"})]})]})})})},N=n(29),L=function(e){var t=e.movie,n=e.buttons,s=e.onClose,c=e.selectedMovie,r=e.setSelectedMovie;return Object(f.jsxs)("div",{className:"h-100",children:[Object(f.jsxs)(N.a,{className:"h-100",children:[Object(f.jsx)(N.a.Img,{variant:"top",src:"N/A"!==t.Poster?t.Poster:"/redux-movie-list/images/popcornPoster.jpg",alt:"".concat(t.Title," poster"),onClick:function(){return r(t.imdbID)},style:{cursor:"pointer"}}),Object(f.jsx)(N.a.Body,{className:"pb-0",children:Object(f.jsx)(N.a.Title,{children:t.Title})}),Object(f.jsx)(N.a.Footer,{className:"bg-white border-0 pt-0 pb-3",children:n})]}),c===t.imdbID&&Object(f.jsx)(y,{title:t.Title,onClose:s,buttons:n,children:Object(f.jsx)(g,{imdbID:c})})]})},I=n(25),M=n(16),k=n(11),S=n(23),T=function(e){var t=e.movieList,n=e.getMovieList,s=e.removeMovieFromList,c=Object(l.useState)(null),r=Object(o.a)(c,2),a=r[0],i=r[1];Object(l.useEffect)((function(){n()}),[n]);var d=function(){return i(null)};return Object(f.jsx)(I.a,{children:Object(f.jsx)(M.a,{children:t?t.list.map((function(e,n){return Object(f.jsx)(k.a,{xs:12,md:6,lg:3,className:"mb-4",children:Object(f.jsx)(L,{movie:e,movieList:t,onClose:d,selectedMovie:a,setSelectedMovie:i,buttons:Object(f.jsxs)(S.a,{variant:"danger",onClick:function(){return s(e)},children:[Object(f.jsx)("i",{className:"bi bi-bookmark-dash-fill"}),"\xa0 Remove From List"]})},n)},e.imdbID)})):Object(f.jsx)(M.a,{children:Object(f.jsxs)(k.a,{className:"text-center",children:[Object(f.jsxs)("p",{className:"text-secondary",children:["You haven't added any movies yet. ",Object(f.jsx)("br",{}),"First ",Object(f.jsx)("a",{href:"/redux-movie-list/",children:"searh for a movie"}),', then click "Add To List".']}),Object(f.jsx)("img",{src:"/redux-movie-list/images/popcornPoster.jpg",alt:"",style:{maxWidth:"300px"}})]})})})})},w=T=Object(s.b)((function(e){return{movieList:e.movieListReducer}}),{getMovieList:d,removeMovieFromList:function(e){return{type:"REMOVE_MOVIE_FROM_LIST",payload:e}}})(T),C=n(15),E=function(e){for(var t=e.searchResults,n=e.currentPage,s=e.setCurrentPage,c=t.totalResults?Math.ceil(t.totalResults/10):[],r=[],a=0;a<c;a++)r.push({count:a+1});var i=r.slice(0,2),o=n>3?[Object(f.jsx)(C.a.Ellipsis,{disabled:!0},"firstThreeDots")]:[],l=n>0?r.slice(Math.max(n-2,2),Math.min(n+1,c-2)):[],d=n<c-2?[Object(f.jsx)(C.a.Ellipsis,{disabled:!0},"lastThreeDots")]:[],u=r.slice(-2),j=function(e){return e.map((function(e){var t=e.count;return Object(f.jsx)(C.a.Item,{disabled:t===n,onClick:function(){return s(t)},children:t},t)}))},b=[].concat(j(i),o,j(l),d,j(u));return Object(f.jsxs)("div",{children:[c>1&&Object(f.jsxs)(C.a,{className:"justify-content-center",children:[Object(f.jsx)(C.a.First,{disabled:1===n,onClick:function(){return s(1)}},"first"),Object(f.jsx)(C.a.Prev,{disabled:1===n,onClick:function(){return s(n-1)}},"previous"),Object(f.jsxs)(C.a.Item,{disabled:!0,children:["Page ",n," of ",c]}),Object(f.jsx)(C.a.Next,{disabled:n===c,onClick:function(){return s(n+1)}},"next"),Object(f.jsx)(C.a.Last,{disabled:n===c,onClick:function(){return s(c)}},"last")]}),c>1&&Object(f.jsx)(C.a,{className:"justify-content-center",children:c>7?b:j(r)})]})},D=n(44),R=n(56),P=function(e){var t=e.onSearch,n=e.setTitle;return Object(f.jsx)(D.a,{inline:!0,onSubmit:function(e){e.preventDefault(),t()},children:Object(f.jsxs)(M.a,{children:[Object(f.jsx)(k.a,{sm:9,children:Object(f.jsx)(R.a,{className:"form-group mb-3",children:Object(f.jsx)(D.a.Control,{type:"text",id:"movieTitle",name:"movieTitle",placeholder:"Search for a movie, show, or episode by name...",onChange:function(e){return n(e.target.value)},required:!0})})}),Object(f.jsx)(k.a,{sm:3,children:Object(f.jsx)(S.a,{type:"submit",className:"w-100 mb-3",children:"Search"})})]})})},A=function(e){e.movieList;var t=e.getMovieList,n=e.addMovieToList,s=new v,c=Object(l.useState)(),r=Object(o.a)(c,2),a=r[0],i=r[1],d=Object(l.useState)(),u=Object(o.a)(d,2),m=u[0],x=u[1],O=Object(l.useState)(1),h=Object(o.a)(O,2),p=h[0],g=h[1],y=Object(l.useState)(null),N=Object(o.a)(y,2),T=N[0],w=N[1];Object(l.useEffect)((function(){t()}),[t]);var C=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getMoviesByTitle(m,p);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=5;break}return g(1),e.next=4,C();case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t),C();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(b.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getMovieById(t);case 2:c=e.sent,n(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){return w(null)};return Object(f.jsxs)(I.a,{children:[Object(f.jsx)(P,{onSearch:D,setTitle:x}),a?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(M.a,{children:a.Search.map((function(e,t,n){var s;return Object(f.jsx)(k.a,{xs:12,md:6,lg:3,className:"mb-4",children:Object(f.jsx)(L,{movie:e,movieList:n,onClose:_,selectedMovie:T,setSelectedMovie:w,buttons:(null===(s=n.list)||void 0===s?void 0:s.indexOf(e.imdbID))?Object(f.jsxs)(S.a,{variant:"primary",children:[Object(f.jsx)("i",{className:"bi bi-bookmark-plus"}),"\xa0 In Movie List"]}):Object(f.jsxs)(S.a,{variant:"success",onClick:function(){return A(e.imdbID)},children:[Object(f.jsx)("i",{className:"bi bi-bookmark-plus"}),"\xa0 Add To List"]})},t)},e.imdbID)}))}),Object(f.jsx)(M.a,{children:Object(f.jsx)(k.a,{children:Object(f.jsx)(E,{searchResults:a,currentPage:p,setCurrentPage:R})})})]}):Object(f.jsx)(M.a,{children:Object(f.jsxs)(k.a,{className:"text-center",children:[Object(f.jsx)("p",{className:"text-secondary",children:"Use the search bar above to begin"}),Object(f.jsx)("img",{src:"/redux-movie-list/images/popcornPoster.jpg",alt:"",style:{maxWidth:"300px"}})]})})]})},_=A=Object(s.b)((function(e){return{movieList:e.movieListReducer}}),{getMovieList:d,addMovieToList:function(e){return{type:"ADD_MOVIE_TO_LIST",payload:e}}})(A),B=n(22),F=n(57),V=function(e){return function(e){return function(t){console.group(t.type),console.info("dispatching",t);var n=e(t);return console.groupEnd(),n}}},J=function(e){return function(t,n,s){return e((function(e,n){return t(e,n)}),n,s)}},G=n(58),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_LIST":var n=localStorage.getItem("movieList");return n?JSON.parse(n):e;case"ADD_MOVIE_TO_LIST":var s=localStorage.getItem("movieList");return s?(s=JSON.parse(s)).list.push(t.payload):s={list:[t.payload]},localStorage.setItem("movieList",JSON.stringify(s)),s;case"REMOVE_MOVIE_FROM_LIST":var c=localStorage.getItem("movieList"),r=(c=JSON.parse(c)).list.filter((function(e){return e.imdbID!==t.payload.imdbID}));return r.length?(c.list=r,localStorage.setItem("movieList",JSON.stringify(c))):localStorage.removeItem("movieList"),c;default:return e}},q=Object(B.combineReducers)({movieListReducer:W});var H=n(31),U=n(36),Y=function(){return Object(f.jsx)(H.a,{bg:"light",fixed:"top",expand:"sm",children:Object(f.jsxs)(I.a,{children:[Object(f.jsxs)(H.a.Brand,{as:c.b,href:"/",children:[Object(f.jsx)("img",{src:"/redux-movie-list/logo192.png",width:"30",height:"30",alt:"",className:"d-inline-block align-top mr-2"}),"Movie Database"]}),Object(f.jsx)(H.a.Toggle,{}),Object(f.jsx)(H.a.Collapse,{children:Object(f.jsxs)(U.a,{children:[Object(f.jsx)(U.a.Link,{as:c.b,to:"/",children:"Home"}),Object(f.jsx)(U.a.Link,{as:c.b,to:"/movie-list",children:"Movie List"})]})})]})})};n(93),n(94);i.a.render(Object(f.jsx)(s.a,{store:function(e){var t=[V,F.a],n=[B.applyMiddleware.apply(void 0,t),J];return Object(B.createStore)(q,e,G.composeWithDevTools.apply(void 0,n))}(),children:Object(f.jsxs)(c.a,{children:[Object(f.jsx)(Y,{}),Object(f.jsxs)(r.c,{children:[Object(f.jsx)(r.a,{exact:!0,path:"/",component:_}),Object(f.jsx)(r.a,{path:"/movie-list",component:w})]})]})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.2d830bca.chunk.js.map
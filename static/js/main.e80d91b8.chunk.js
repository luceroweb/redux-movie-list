(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{90:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var n=s(28),c=s(58),r=s(6),a=s(19),i=s.n(a),o=s(0),l=s(25),d=s(17),j=s(11),u=s(14),b=s(26),m=s(1),x=function(e){var t=e.movieList,s=e.getMovieList,n=e.removeMovieFromList;return Object(o.useEffect)((function(){s()}),[s]),Object(m.jsx)(l.a,{children:Object(m.jsx)(d.a,{children:t?t.list.map((function(e){return Object(m.jsx)(j.a,{xs:12,md:6,lg:3,className:"mb-4",children:Object(m.jsxs)(u.a,{className:"h-100",children:[Object(m.jsx)(u.a.Img,{variant:"top",src:"N/A"!==e.Poster?e.Poster:"/redux-movie-list/images/popcornPoster.jpg",alt:"".concat(e.Title," poster")}),Object(m.jsx)(u.a.Body,{className:"pb-0",children:Object(m.jsx)(u.a.Title,{children:e.Title})}),Object(m.jsx)(u.a.Footer,{className:"bg-white border-0 pt-0 pb-3",children:Object(m.jsxs)(b.a,{variant:"danger",onClick:function(){return n(e)},children:[Object(m.jsx)("i",{className:"bi bi-bookmark-dash-fill"}),"\xa0 Remove From List"]})})]})},e.imdbID)})):Object(m.jsx)(d.a,{children:Object(m.jsxs)(j.a,{className:"text-center",children:[Object(m.jsxs)("p",{className:"text-secondary",children:["You haven't added any movies yet. ",Object(m.jsx)("br",{}),"First ",Object(m.jsx)("a",{href:"/redux-movie-list/",children:"searh for a movie"}),', then click "Add To List".']}),Object(m.jsx)("img",{src:"/redux-movie-list/images/popcornPoster.jpg",alt:"",style:{maxWidth:"300px"}})]})})})})},h=x=Object(n.b)((function(e){return{movieList:e.movieListReducer}}),{getMovieList:function(){return{type:"GET_MOVIE_LIST"}},removeMovieFromList:function(e){return{type:"REMOVE_MOVIE_FROM_LIST",payload:e}}})(x),O=s(12),p=s.n(O),v=s(23),f=s(24),g=s(53),y=s(54),N=s(40),I=s.n(N),T="19c7ac68",M=function(){function e(){Object(g.a)(this,e)}return Object(y.a)(e,[{key:"getMoviesByTitle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e?I.a.get("https://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&apikey=").concat(T)).then((function(e){return e.data})).catch((function(e){return console.error(e)})):null}},{key:"getMovieById",value:function(e){return I.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat(T)).then((function(e){return e.data})).catch((function(e){return console.error(e)}))}}]),e}(),L=s(16),k=function(e){for(var t=e.searchResults,s=e.currentPage,n=e.setCurrentPage,c=t.totalResults?Math.ceil(t.totalResults/10):[],r=[],a=0;a<c;a++)r.push({count:a+1});var i=r.slice(0,2),o=s>3?[Object(m.jsx)(L.a.Ellipsis,{disabled:!0},"firstThreeDots")]:[],l=s>0?r.slice(Math.max(s-2,2),Math.min(s+1,c-2)):[],d=s<c-2?[Object(m.jsx)(L.a.Ellipsis,{disabled:!0},"lastThreeDots")]:[],j=r.slice(-2),u=function(e){return e.map((function(e){var t=e.count;return Object(m.jsx)(L.a.Item,{disabled:t===s,onClick:function(){return n(t)},children:t},t)}))},b=[].concat(u(i),o,u(l),d,u(j));return Object(m.jsxs)("div",{children:[c>1&&Object(m.jsxs)(L.a,{className:"justify-content-center",children:[Object(m.jsx)(L.a.First,{disabled:1===s,onClick:function(){return n(1)}},"first"),Object(m.jsx)(L.a.Prev,{disabled:1===s,onClick:function(){return n(s-1)}},"previous"),Object(m.jsxs)(L.a.Item,{disabled:!0,children:["Page ",s," of ",c]}),Object(m.jsx)(L.a.Next,{disabled:s===c,onClick:function(){return n(s+1)}},"next"),Object(m.jsx)(L.a.Last,{disabled:s===c,onClick:function(){return n(c)}},"last")]}),c>1&&Object(m.jsx)(L.a,{className:"justify-content-center",children:c>7?b:u(r)})]})},S=s(43),w=s(55),C=function(e){var t=e.onSearch,s=e.setTitle;return Object(m.jsx)(S.a,{inline:!0,onSubmit:function(e){e.preventDefault(),t()},children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j.a,{sm:9,children:Object(m.jsx)(w.a,{className:"form-group mb-3",children:Object(m.jsx)(S.a.Control,{type:"text",id:"movieTitle",name:"movieTitle",placeholder:"Search for a movie, show, or episode by name...",onChange:function(e){return s(e.target.value)},required:!0})})}),Object(m.jsx)(j.a,{sm:3,children:Object(m.jsx)(b.a,{type:"submit",className:"w-100 mb-3",children:"Search"})})]})})},P=function(e){var t=e.imdbID,s=Object(o.useState)(),n=Object(f.a)(s,2),c=n[0],r=n[1];return Object(o.useEffect)((function(){var e=new M;(function(){var t=Object(v.a)(p.a.mark((function t(s){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMovieById(s);case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}})()(t)}),[t]),c?Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-6 text-center",children:[Object(m.jsx)("img",{variant:"top",src:"N/A"!==c.Poster?c.Poster:"/redux-movie-list/images/popcornPoster.jpg",alt:"".concat(c.Title," poster")}),"N/A"===c.Poster?Object(m.jsx)("span",{className:"text-secondary",children:"No poster avaialble"}):null]}),Object(m.jsxs)("div",{className:"col-md-6",children:["N/A"!==c.imdbRating&&Object(m.jsx)("strong",{className:"float-end text-primary h4",children:c.imdbRating}),Object(m.jsx)("h4",{children:Object(m.jsx)("strong",{children:c.Title})}),"N/A"!==c.Rated&&Object(m.jsx)("span",{className:"badge bg-secondary m-1",children:c.Rated}),"N/A"!==c.Runtime&&Object(m.jsx)("span",{className:"badge bg-secondary m-1",children:c.Runtime}),"N/A"!==c.Genre&&Object(m.jsx)("span",{className:"badge bg-secondary m-1",children:c.Genre}),"N/A"!==c.Plot&&Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Plot"}),Object(m.jsx)("br",{}),c.Plot]}),"N/A"!==c.Actors&&Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Actors"}),Object(m.jsx)("br",{}),c.Actors]})]})]}):Object(m.jsx)("h2",{children:"Loading..."})},E=function(e){var t,s=e.onClose,n=e.children,c=e.buttons;setTimeout((function(){(t=document.getElementById("exampleModal")).classList.add("show")}),500);var r=function(){t.classList.remove("show"),setTimeout((function(){return s()}),500)};return Object(m.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",style:{display:"block"},children:Object(m.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-scrollable",children:Object(m.jsxs)("div",{className:"modal-content p-0",children:[Object(m.jsx)("div",{className:"modal-header",children:Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:r})}),Object(m.jsx)("div",{className:"modal-body",children:n}),Object(m.jsxs)("div",{className:"modal-footer",children:[c,Object(m.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:r,children:"Close"})]})]})})})},D=function(e){var t=e.movie,s=e.buttons,n=e.onClose,c=e.selectedMovie,r=e.setSelectedMovie;return Object(m.jsxs)("div",{children:[Object(m.jsxs)(u.a,{className:"h-100",children:[Object(m.jsx)(u.a.Img,{variant:"top",src:"N/A"!==t.Poster?t.Poster:"/redux-movie-list/images/popcornPoster.jpg",alt:"".concat(t.Title," poster"),onClick:function(){return r(t.imdbID)},style:{cursor:"pointer"}}),Object(m.jsx)(u.a.Body,{className:"pb-0",children:Object(m.jsx)(u.a.Title,{children:t.Title})}),Object(m.jsx)(u.a.Footer,{className:"bg-white border-0 pt-0 pb-3",children:s})]}),c===t.imdbID&&Object(m.jsx)(E,{title:t.Title,onClose:n,buttons:s,children:Object(m.jsx)(P,{imdbID:c})})]})},R=function(e){var t=e.addMovieToList,s=new M,n=Object(o.useState)(),c=Object(f.a)(n,2),r=c[0],a=c[1],i=Object(o.useState)(),u=Object(f.a)(i,2),x=u[0],h=u[1],O=Object(o.useState)(1),g=Object(f.a)(O,2),y=g[0],N=g[1],I=Object(o.useState)(null),T=Object(f.a)(I,2),L=T[0],S=T[1],w=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getMoviesByTitle(x,y);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=5;break}return N(1),e.next=4,w();case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t),w();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(v.a)(p.a.mark((function e(n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getMovieById(n);case 2:c=e.sent,t(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){return S(null)};return Object(m.jsxs)(l.a,{children:[Object(m.jsx)(C,{onSearch:P,setTitle:h}),r?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:r.Search.map((function(e,t){return Object(m.jsx)(j.a,{xs:12,md:6,lg:3,className:"mb-4",children:Object(m.jsx)(D,{movie:e,onClose:A,selectedMovie:L,setSelectedMovie:S,buttons:Object(m.jsxs)(b.a,{variant:"success",onClick:function(){return R(e.imdbID)},children:[Object(m.jsx)("i",{className:"bi bi-bookmark-plus"}),"\xa0 Add To List"]})},t)},e.imdbID)}))}),Object(m.jsx)(d.a,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(k,{searchResults:r,currentPage:y,setCurrentPage:E})})})]}):Object(m.jsx)(d.a,{children:Object(m.jsxs)(j.a,{className:"text-center",children:[Object(m.jsx)("p",{className:"text-secondary",children:"Use the search bar above to begin"}),Object(m.jsx)("img",{src:"/redux-movie-list/images/popcornPoster.jpg",alt:"",style:{maxWidth:"300px"}})]})})]})},A=R=Object(n.b)(null,{addMovieToList:function(e){return{type:"ADD_MOVIE_TO_LIST",payload:e}}})(R),_=s(22),B=s(56),F=function(e){return function(e){return function(t){console.group(t.type),console.info("dispatching",t);var s=e(t);return console.groupEnd(),s}}},V=function(e){return function(t,s,n){return e((function(e,s){return t(e,s)}),s,n)}},J=s(57),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MOVIE_LIST":var s=localStorage.getItem("movieList");return s?JSON.parse(s):e;case"ADD_MOVIE_TO_LIST":var n=localStorage.getItem("movieList");return n?(n=JSON.parse(n)).list.push(t.payload):n={list:[t.payload]},localStorage.setItem("movieList",JSON.stringify(n)),n;case"REMOVE_MOVIE_FROM_LIST":var c=localStorage.getItem("movieList"),r=(c=JSON.parse(c)).list.filter((function(e){return e.imdbID!==t.payload.imdbID}));return r.length?(c.list=r,localStorage.setItem("movieList",JSON.stringify(c))):localStorage.removeItem("movieList"),c;default:return e}},W=Object(_.combineReducers)({movieListReducer:G});var q=s(30),H=s(35),U=function(){return Object(m.jsx)(q.a,{bg:"light",fixed:"top",expand:"sm",children:Object(m.jsxs)(l.a,{children:[Object(m.jsxs)(q.a.Brand,{href:"/redux-movie-list/",children:[Object(m.jsx)("img",{src:"/redux-movie-list/logo192.png",width:"30",height:"30",alt:"",className:"d-inline-block align-top mr-2"}),"Movie Database"]}),Object(m.jsx)(q.a.Toggle,{}),Object(m.jsx)(q.a.Collapse,{children:Object(m.jsxs)(H.a,{children:[Object(m.jsx)(H.a.Link,{href:"/redux-movie-list/",children:"Home"}),Object(m.jsx)(H.a.Link,{href:"/redux-movie-list/movie-list",children:"Movie List"})]})})]})})};s(89),s(90);i.a.render(Object(m.jsx)(n.a,{store:function(e){var t=[F,B.a],s=[_.applyMiddleware.apply(void 0,t),V];return Object(_.createStore)(W,e,J.composeWithDevTools.apply(void 0,s))}(),children:Object(m.jsxs)(c.a,{children:[Object(m.jsx)(U,{}),Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/redux-movie-list/",component:A}),Object(m.jsx)(r.a,{exact:!0,path:"/redux-movie-list/movie-list",component:h})]})]})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.e80d91b8.chunk.js.map
(this["webpackJsonpreact-redux-personal-project"]=this["webpackJsonpreact-redux-personal-project"]||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(18),s=t.n(i),a=(t(34),t(35),t(12)),o=t(0),l=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(a.b,{to:"/",children:"Home"}),Object(o.jsx)(a.b,{to:"/CountryList",children:"Country List"}),Object(o.jsx)(a.b,{to:"/KnownFlags",children:"Manage Flags"}),Object(o.jsx)(a.b,{to:"/FlashCards",children:"Flash Cards"}),Object(o.jsx)(a.b,{to:"/FlagQuiz",children:"Flag Quiz"}),Object(o.jsx)("h3",{className:"viewNav",children:"Navigation"})]})})},u=t(2),j=function(){var e=Object(u.c)((function(e){return e.flipCard.deck})).map((function(e){return Object(o.jsx)("img",{src:e.flags[0],alt:e.name})}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Learn Your Flags"}),Object(o.jsx)("h2",{children:"Test yourself on the flags of countries and territories around the world."}),Object(o.jsx)("div",{className:"flagBanner",children:e})]})},d=t(29),b=t(11),f=t(10),h=t(14),O=t(17),g=t.n(O),m=t(26),x=function(){var e=Object(m.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/all");case 3:return n=e.sent,e.abrupt("return",n.json());case 7:e.prev=7,e.t0=e.catch(0),console.log("The site was unable to communicate with its source API. Please try again soon.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=Object(h.b)({name:"cardFlip",initialState:{deck:[],region:"All Regions",searchTerm:""},reducers:{loadCards:function(e,n){var t=(n.payload||[]).map((function(e,n){return Object(f.a)(Object(f.a)({},e),{},{isFlipped:!1,isSelected:!1,isMemorized:!1,mainDeckIndex:n})}));e.deck=t},changeRegion:function(e,n){var t=n.payload;e.region=t},flip:function(e,n){var t,r=e.deck,c=[],i=Object(b.a)(r);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.name===n.payload&&(s.isFlipped=!s.isFlipped),c.push(s)}}catch(a){i.e(a)}finally{i.f()}e=Object(f.a)(Object(f.a)({},e),{},{deck:c})},updateSearchTerm:function(e,n){e.searchTerm=n.payload},deleteSearchTerm:function(e){e.searchTerm=""},toggleMemorization:function(e,n){var t,r=e.deck,c=[],i=Object(b.a)(r);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.name===n.payload&&(s.isMemorized=!s.isMemorized),c.push(s)}}catch(a){i.e(a)}finally{i.f()}e=Object(f.a)(Object(f.a)({},e),{},{deck:c})},markAsKnown:function(e,n){var t,r=e.deck,c=[],i=Object(b.a)(r);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.name===n.payload&&(s.isMemorized=!0),c.push(s)}}catch(a){i.e(a)}finally{i.f()}e=Object(f.a)(Object(f.a)({},e),{},{deck:c})},markAsUnknown:function(e,n){var t,r=e.deck,c=[],i=Object(b.a)(r);try{for(i.s();!(t=i.n()).done;){var s=t.value;s.name===n.payload&&(s.isMemorized=!1),c.push(s)}}catch(a){i.e(a)}finally{i.f()}e=Object(f.a)(Object(f.a)({},e),{},{deck:c})}}}),v=p.actions,z=v.flip,C=(v.loadCards,v.changeRegion),y=v.updateSearchTerm,Q=v.deleteSearchTerm,k=v.toggleMemorization,w=v.markAsKnown,N=v.markAsUnknown,M=p.reducer,S=function(){var e=Object(u.c)((function(e){return e.flipCard.deck})),n=Object(u.b)(),t=e.map((function(e){return e.region})),r=Object(d.a)(new Set(t)).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{for:"regionSelector",children:"Select a region: "}),Object(o.jsxs)("select",{name:"regionSelector",onChange:function(e){var t=e.target.value;n(C(t))},children:[Object(o.jsx)("option",{value:"All Regions",children:"All Regions"},"allRegions"),r]})]})},F=function(){var e=Object(u.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{for:"searchBar",children:"Search: "}),Object(o.jsx)("input",{onChange:function(n){var t=n.target.value;e(y(t))},name:"searchBar",type:"text"}),Object(o.jsx)("button",{onClick:function(){e(Q())},children:"X"})]})},q=function(){var e=Object(u.c)((function(e){return e.flipCard.deck})),n=Object(u.c)((function(e){return e.flipCard.region})),t=Object(u.c)((function(e){return e.flipCard.searchTerm})),r=e;"All Regions"!==n&&(r=e.filter((function(e){return e.region===n})));var c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){var n="The flag of ".concat(e.name);return Object(o.jsxs)("div",{className:"nameFlagDisplay",children:[Object(o.jsxs)("div",{className:"countryInfo",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("h3",{children:["Capital City: ",e.capital]}),Object(o.jsxs)("h3",{children:["Estimated Population: ",e.population]}),Object(o.jsxs)("h3",{children:["Subregion: ",e.subregion,", Region: ",e.region]})]}),Object(o.jsx)("img",{className:"flagImage",src:e.flags[0],alt:n})]})})),i=Object(o.jsx)("h3",{children:"This search term returned no results. Please try a different term or region."});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h1",{children:["Country and Territory Info: ",n]}),Object(o.jsx)(S,{}),Object(o.jsx)(F,{}),Object(o.jsx)("div",{className:"flagDisplay",children:c.length>0?c:i})]})},I=Object(h.b)({name:"flagQuizRedux",initialState:{quizGenerated:!1,quizInProgress:!1,setToDifficult:!1,currentQuizQuestions:[],lastScore:0,currentTopScore:0,currentQuestion:0,quizLength:5},reducers:{changeQuizLength:function(e,n){e.quizLength=n.payload},generateQuiz:function(e,n){e.quizInProgress=!0,e.currentQuizQuestions=n.payload,e.quizGenerated=!0,e.currentQuestion=0},handleSelection:function(e,n){var t,r=n.payload.questionIndex,c=n.payload.optionIndex,i=Object(b.a)(e.currentQuizQuestions[r].answerOptions);try{for(i.s();!(t=i.n()).done;){t.value.isSelected=!1}}catch(s){i.e(s)}finally{i.f()}e.currentQuizQuestions[r].answerOptions[c].isSelected=!0},assessQuiz:function(e,n){e.quizInProgress=!1,e.lastScore=n.payload,n.payload>e.currentTopScore&&(e.currentTopScore=n.payload)},closeCurrentQuiz:function(e){e.quizGenerated=!1,e.quizInProgress=!1,e.currentQuizQuestions=[]},incrementQuestion:function(e){var n=e.currentQuestion;++n>=e.quizLength&&(n=e.quizLength-1),e.currentQuestion=n},decrementQuestion:function(e){var n=e.currentQuestion;--n<0&&(n=0),e.currentQuestion=n},toggleDifficulty:function(e){e.setToDifficult=!e.setToDifficult}}}),T=I.actions,L=T.generateQuiz,A=T.handleSelection,D=T.assessQuiz,R=T.closeCurrentQuiz,P=T.changeQuizLength,B=T.incrementQuestion,G=T.decrementQuestion,E=T.toggleDifficulty,U=I.reducer,K=function(){var e=Object(u.c)((function(e){return e.flipCard.deck}))||[],n=Object(u.c)((function(e){return e.flipCard.region})),t=Object(u.c)((function(e){return e.flagQuiz.quizLength})),r=Object(u.c)((function(e){return e.flagQuiz.setToDifficult})),c=(Object(u.c)((function(e){return e.flagQuiz.quizGenerated})),Object(u.b)()),i=e;"All Regions"!==n&&(i=e.filter((function(e){return e.region===n})));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Choose Quiz Length: "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{name:"quizLength",onChange:function(e){var n=e.target.value;c(P(n))},type:"number",min:"1",max:i.length}),Object(o.jsxs)("span",{children:[" (Max: ",i.length,")"]}),Object(o.jsx)("div",{onClick:function(){return c(E())},children:Object(o.jsxs)("h3",{children:["Difficulty: ",r?"Difficult":"Normal"]})}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){for(var n=[],s=[],a=function(t){for(var c=Math.floor(Math.random()*i.length);s.includes(c);)c=Math.floor(Math.random()*i.length);s.push(c);var a=i[c],o=e.filter((function(e){return e.subregion===a.subregion}));o.length<4&&(o=e.filter((function(e){return e.region===a.region}))),o.length<4&&(o=e);var l=r?o:e;console.log("optionsDeck: ",l);for(var u=[],j=[],d=0;d<3;d++){for(var b=Math.floor(Math.random()*l.length);j.includes(b)||i[c].name===l[b].name;)b=Math.floor(Math.random()*l.length);j.push(b),u.push(l[b])}var f=Math.floor(3*Math.random());u.splice(f,0,a);var h={correctAnswer:a,answerOptions:u};n.push(h)},o=0;o<t;o++)a();console.log("quizDeck: ",n),c(L(n))},children:"Start Quiz"})]})},Y=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.flagQuiz.quizLength})),t=Object(u.c)((function(e){return e.flagQuiz.currentQuizQuestions}));return Object(o.jsx)("button",{onClick:function(){var r,c=0,i=Object(b.a)(t);try{for(i.s();!(r=i.n()).done;){var s=r.value,a=s.answerOptions.filter((function(e){return!0===e.isSelected}));a.length>0&&a[0].name===s.correctAnswer.name&&c++}}catch(l){i.e(l)}finally{i.f()}var o=parseInt(c/n*100);console.log("qL: ",n),console.log("percentage: ",o),e(D(o))},children:"Submit"})},J=function(){var e=Object(u.c)((function(e){return e.flagQuiz.currentQuizQuestions})),n=Object(u.c)((function(e){return e.flagQuiz.quizInProgress})),t=Object(u.c)((function(e){return e.flagQuiz.quizGenerated})),r=Object(u.c)((function(e){return e.flagQuiz.currentQuestion})),c=Object(u.b)(),i=e.map((function(t,r){var i=t.answerOptions.map((function(e,t){return Object(o.jsx)("div",{className:"quizOption",children:Object(o.jsx)("img",{onClick:function(){n&&c(A({questionIndex:r,optionIndex:t}))},className:"quizFlag",src:e.flags[0],alt:"a flag",style:e.isSelected?{border:"5px solid yellow"}:{border:null}})})}));return Object(o.jsxs)("div",{className:"questionContent",children:[Object(o.jsxs)("h3",{children:[r+1,") Which flag represents ",Object(o.jsx)("strong",{children:e[r].correctAnswer.name}),"?"]}),Object(o.jsx)("div",{className:"answerOptions",children:i})]})})),s=0===r,a=r===e.length-1,l={color:"lightgrey",border:"lightgrey 1px solid"},j=Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{style:s?l:null,onClick:function(){return c(G())},children:"PREVIOUS"}),Object(o.jsx)("button",{style:a?l:null,onClick:function(){return c(B())},children:"NEXT"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(Y,{})]}),d=i[r];return Object(o.jsxs)("div",{className:"quizBody",children:[t&&d,Object(o.jsx)("br",{}),t&&j]})},V=function(){var e=Object(u.c)((function(e){return e.flagQuiz.lastScore})),n=Object(u.c)((function(e){return e.flagQuiz.currentTopScore}));return Object(o.jsxs)("div",{className:"scoreDisplay",children:[Object(o.jsxs)("h3",{children:["Current Score: ",e]}),Object(o.jsxs)("h3",{children:["Personal Best: ",n]})]})},W=function(){var e=Object(u.c)((function(e){return e.flagQuiz.currentQuizQuestions})),n=Object(u.c)((function(e){return e.flipCard.deck})),t=Object(u.b)(),r={backgroundColor:"rgb(208, 247, 208)"},c={backgroundColor:"rgb(247, 208, 208)"},i=e.map((function(e,i){var s,a=e.answerOptions.filter((function(e){return!0===e.isSelected}));s=a[0]?Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:a[0].flags[0],alt:a[0].name}),Object(o.jsxs)("p",{children:["You selected: ",a[0].name,"."]})]}):Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"No response selected."})});var l,u,j=e.correctAnswer,d=a[0]&&e.correctAnswer.name===a[0].name,b=Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:j.flags[0],alt:j.name}),Object(o.jsxs)("p",{children:["Correct response: ",j.name,"."]})]});return l=n[j.mainDeckIndex].isMemorized?Object(o.jsx)("h3",{children:"Memorized \u2714"}):Object(o.jsx)("button",{onClick:function(){t(w(j.name))},children:"Mark as Memorized"}),u=n[j.mainDeckIndex].isMemorized?Object(o.jsxs)("button",{onClick:function(){t(N(j.name))},children:["Mark  ",j.name," as Not Memorized"]}):Object(o.jsx)("h3",{children:"Not Memorized \u2718"}),Object(o.jsxs)("div",{className:"resultDiv",style:d?r:c,children:[Object(o.jsxs)("p",{children:["Question ",i+1]}),Object(o.jsxs)("div",{className:"results",children:[b,s]}),d?l:u]})})),s=function(){t(R())};return Object(o.jsxs)("div",{className:"resultsComponent",children:[Object(o.jsx)("h2",{children:"Results"}),Object(o.jsx)("button",{onClick:s,children:"Close Results"}),Object(o.jsx)("div",{className:"allResults",children:i}),Object(o.jsx)("button",{onClick:s,children:"Close Results"})]})},X=function(){var e=Object(u.c)((function(e){return e.flipCard.region})),n=Object(u.c)((function(e){return e.flagQuiz.quizInProgress})),t=Object(u.c)((function(e){return e.flagQuiz.quizGenerated}));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h1",{children:["Flag Quiz: ",e]}),Object(o.jsx)(S,{}),Object(o.jsxs)("div",{className:"quizInfo",children:[!n&&Object(o.jsx)(K,{}),Object(o.jsx)(V,{})]}),n&&Object(o.jsx)(J,{}),t&&!n&&Object(o.jsx)(W,{})]})},H=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.flipCard.deck})),t=Object(u.c)((function(e){return e.flipCard.region})),r=n;"All Regions"!==t&&(r=n.filter((function(e){return e.region===t})));var c=r.filter((function(e){return!e.isMemorized})).map((function(n){var t=n.isFlipped?"rotateY(0deg)":" rotateY(180deg)";return Object(o.jsx)("div",{className:"cardWrap",onClick:function(){return e(z(n.name))},children:Object(o.jsxs)("div",{className:"card",style:{transform:t},children:[Object(o.jsx)("div",{className:"cardFront",children:Object(o.jsx)("img",{className:"flagImage",src:n.flags[0],alt:"a flag"})}),Object(o.jsxs)("div",{className:"cardBack",children:[Object(o.jsx)("span",{children:n.name}),Object(o.jsx)("img",{className:"flagImage",src:n.flags[0],alt:"a flag"}),Object(o.jsx)("button",{onClick:function(){return e(k(n.name))},children:"I know this one!"})]})]})})}));return Object(o.jsxs)("div",{className:"boardContainer",children:[Object(o.jsxs)("h1",{children:["Flash Cards: ",t]}),Object(o.jsx)(S,{}),Object(o.jsx)("div",{className:"boardView",children:c})]})},Z=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.flipCard.deck})),t=Object(u.c)((function(e){return e.flipCard.searchTerm})),r=Object(u.c)((function(e){return e.flipCard.region})),c=n;"All Regions"!==r&&(c=n.filter((function(e){return e.region===r})));var i=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),s=i.filter((function(e){return!e.isMemorized})).map((function(n){return Object(o.jsxs)("div",{className:"unmemorizedFlag",onClick:function(){return e(k(n.name))},children:[Object(o.jsx)("img",{src:n.flags[0],alt:n.name}),Object(o.jsx)("h4",{children:n.name})]})})),a=i.filter((function(e){return e.isMemorized})).map((function(n){return Object(o.jsxs)("div",{className:"memorizedFlag",onClick:function(){return e(k(n.name))},children:[Object(o.jsx)("img",{src:n.flags[0],alt:n.name}),Object(o.jsx)("h4",{children:n.name})]})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Manage Flags"}),Object(o.jsx)(S,{}),Object(o.jsx)(F,{}),Object(o.jsxs)("div",{className:"knownAndUnknownFlags",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Unmemorized"}),Object(o.jsx)("div",{className:"memFlagList",children:s})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Memorized"}),Object(o.jsx)("div",{className:"memFlagList",children:a})]})]})]})},$=t(4);var _=function(){var e=Object(u.b)();return Object(r.useEffect)((function(){e(function(){var e=Object(m.a)(g.a.mark((function e(n){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,console.log(t),n({type:"cardFlip/loadCards",payload:t});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(a.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{children:Object(o.jsxs)($.c,{children:[Object(o.jsx)($.a,{exact:!0,path:"/",component:j}),Object(o.jsx)($.a,{path:"/CountryList",exact:!0,component:q}),Object(o.jsx)($.a,{path:"/KnownFlags",exact:!0,component:Z}),Object(o.jsx)($.a,{path:"/FlashCards",exact:!0,component:H}),Object(o.jsx)($.a,{path:"/FlagQuiz",exact:!0,component:X})]})})]}),Object(o.jsxs)("footer",{children:[Object(o.jsxs)("h3",{children:["Created with the ",Object(o.jsx)("a",{href:"https://restcountries.com/",children:"restcountries.com"})," API"]}),Object(o.jsxs)("h3",{children:["A project by ",Object(o.jsx)("a",{href:"https://patricklang87.github.io/portfolio/",children:"Patrick Lang"})]}),Object(o.jsx)("h3",{children:"\xa9 2021"})]})]})},ee=Object(h.a)({reducer:{flipCard:M,flagQuiz:U}});s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u.a,{store:ee,children:Object(o.jsx)(_,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9739856c.chunk.js.map
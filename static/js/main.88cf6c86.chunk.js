(window.webpackJsonpclickygame=window.webpackJsonpclickygame||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Panda","image":"/assets/images/Panda.gif","clicked":false},{"id":2,"name":"Baby Cheetah","image":"/assets/images/baby-cheetah.gif","clicked":false},{"id":3,"name":"Bear","image":"/assets/images/bear.gif","clicked":false},{"id":4,"name":"Blue Frog","image":"/assets/images/blue-frog.gif","clicked":false},{"id":5,"name":"Elephant","image":"/assets/images/elephant.gif","clicked":false},{"id":6,"name":"Fox","image":"/assets/images/fox.gif","clicked":false},{"id":7,"name":"Giraffes","image":"/assets/images/giraffes.gif","clicked":false},{"id":8,"name":"Hippo","image":"/assets/images/hippo.gif","clicked":false},{"id":9,"name":"Humming Bird","image":"/assets/images/humming-bird.gif","clicked":false},{"id":10,"name":"Owl","image":"/assets/images/owl.gif","clicked":false},{"id":11,"name":"Squirrel","image":"/assets/images/squirrel-hands-up.gif","clicked":false},{"id":12,"name":"Seal","image":"/assets/images/seal.gif","clicked":false},{"id":13,"name":"Tiger","image":"/assets/images/tiger.gif","clicked":false},{"id":14,"name":"Penguins","image":"/assets/images/penguins.gif","clicked":false},{"id":15,"name":"Monkey","image":"/assets/images/monkey.gif","clicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),s=(t(15),t(3)),l=t(4),o=t(5),m=t(8),d=t(6),f=t(9),u=t(7);t(16);var g=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:"/clickyGame"+e.src,alt:e.name,clicked:e.clicked,onClick:function(){return e.cardClick(e.id)}}))};t(17);var h=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Clicky Game")),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(18);var k=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h2",null,"Click on image to earn points, but don't click on image more than once!"))};t(19);function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={cards:u,score:0,topScore:0},t.handleCorrectClick=function(e){var a=t.state,n=a.topScore,r=a.score+1,i=Math.max(r,n);t.setState({cards:t.shuffleCard(e),score:r,topScore:i})},t.handleIncorrectClick=function(e){t.setState({cards:t.resetCard(e),score:0})},t.resetCard=function(e){var a=e.map(function(e){return b({},e,{clicked:!1})});return t.shuffleCard(a)},t.handleCardClick=function(e){var a=!1,n=t.state.cards.map(function(t){var n=b({},t);return n.id===e&&(n.clicked||(n.clicked=!0,a=!0)),n});a?t.handleCorrectClick(n):t.handleIncorrectClick(n)},t.shuffleCard=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),n=e[a];e[a]=e[t],e[t]=n,a--}return e},t}return Object(f.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({cards:this.shuffleCard(this.state.cards)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(k,null),r.a.createElement(p,null,this.state.cards.map(function(a){return r.a.createElement(g,{key:a.id,id:a.id,src:a.image,name:a.name,cardClick:e.handleCardClick})})))}}]),a}(n.Component);var C=function(){return r.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.88cf6c86.chunk.js.map
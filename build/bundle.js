!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(9),a=n(s),l=i(11),u=n(l),h=i(7),c=n(h),d=i(8),f=n(d),p=i(10),y=n(p),m=i(0),v=function(){function t(e,i,n){var o=this;r(this,t),this.element=e,this.width=i,this.height=n,this.ended=!1,this.gameElement=document.getElementById(this.element),this.board=new f.default(this.width,this.height),this.ball=new c.default(8,"red",this.width,this.height),this.boulderBall1=new a.default(8,"silver",this.width,this.height),this.boulderBall2=new a.default(8,"silver",this.width,this.height),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.player1=new y.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,m.KEYS.a,m.KEYS.z,"player1"),this.player2=new y.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,m.KEYS.up,m.KEYS.down,"player2"),this.score1=new u.default(this.width/2-50,30,30),this.score2=new u.default(this.width/2+25,30,30),this.pause=!1,document.addEventListener("keydown",function(t){t.key==m.KEYS.spaceBar&&(o.pause=!o.pause)})}return o(t,[{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(m.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),this.board.render(t),this.player1.render(t),this.player2.render(t),this.ball.render(t,this.player1,this.player2),this.boulderBall1.render(t,this.player1,this.player2),this.boulderBall2.render(t,this.player1,this.player2),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score)}}},{key:"stop",value:function(){this.ended=!0}}]),t}();e.default=v},function(t,e,i){var n=i(12);"string"==typeof n&&(n=[[t.i,n,""]]);i(19)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){(function(t){function n(t,e){this._id=t,this._clearFn=e}var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;e.setTimeout=function(){return new n(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new n(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(18),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(e,i(2))},function(t,e,i){"use strict";function n(){if(p-=1,v.innerHTML=p,p<=0){var t=l.player1.score,e=l.player2.score;t>e?alert(c+" wins!"):t<e?alert(f+" wins!"):alert("It's a Draw!"),r(),l.stop()}}function r(){clearInterval(b._id)}i(4);var o=i(3),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=i(5),l=new s.default("game",512,256);!function t(){l.ended?alert("Game Over!"):(l.render(),requestAnimationFrame(t))}();var u=document.createElement("div");u.setAttribute("id","playersNames"),document.getElementById("wrapper").appendChild(u),document.getElementById("playersNames").style.display="flex",document.getElementById("playersNames").style.justifyContent="space-between";var h=document.createElement("p"),c=prompt("Player 1 name");h.appendChild(document.createTextNode(c)),u.appendChild(h);var d=document.createElement("p"),f=prompt("Player 2 name");d.appendChild(document.createTextNode(f)),u.appendChild(d);var p=Number(prompt("How many minutes would you like to play 1, 2 or 3?"));1==p?p=60:2==p||3==p||(p=Number(prompt("Please, pick a valid number from 1 to 3.")));var y=document.getElementById("pong"),m=document.createElement("p");m.setAttribute("id","timerbox"),y.appendChild(m);var v=document.getElementById("timerbox"),b=0;b=(0,a.setInterval)(function(){n()},1e3)},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),a=function(){function t(e,i,r,o){n(this,t),this.ping=new Audio("public/sounds/pong-01.wav"),this.fill=i,this.radius=e,this.boardWidth=r,this.boardHeight=o,this.direction=10*Math.random()-6,this.reset()}return o(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),o=n[0],s=n[1],a=n[2],l=n[3];this.x+this.radius>=o&&this.x+this.radius<=s&&this.y>=a&&this.y<=l&&(this.vx=-this.vx,this.ping.play())}if(this.vx<0){var u=t.coordinates(t.x,t.y,t.width,t.height),h=r(u,4),c=h[0],d=h[1],f=h[2],p=h[3];this.x-this.radius>=c&&this.x-this.radius<=d&&this.y>=f&&this.y<=p&&(this.vx=-this.vx,this.ping.play())}}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth;(t||e)&&(this.vx*=-1);var i=this.y-this.radius<=0;(this.y+this.radius>=this.boardHeight||i)&&(this.vy*=-1)}},{key:"goal",value:function(t){t.score++,this.reset(),console.log(t.score)}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.paddleCollision(e,i),this.wallCollision();var n=document.createElementNS(s.SVG_NS,"circle");n.setAttributeNS(null,"fill",this.fill),n.setAttributeNS(null,"r",this.radius),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),t.appendChild(n);var r=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;r?(this.goal(e),this.direction=-1):o&&(this.goal(i),this.direction=1)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(o.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","#353535");var i=document.createElementNS(o.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray","20,15"),i.setAttributeNS(null,"stroke-width",4),t.appendChild(e),t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),a=function(){function t(e,i,r,o){n(this,t),this.ping=new Audio("public/sounds/pong-04.wav"),this.fill=i,this.radius=e,this.boardWidth=r,this.boardHeight=o,this.direction=10*Math.random()-5,this.reset()}return o(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5)/6;this.vx=this.direction*(6-Math.abs(this.vy))/6}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),o=n[0],s=n[1],a=n[2],l=n[3];this.x+this.radius>=o&&this.x+this.radius<=s&&this.y>=a&&this.y<=l&&(this.vx=-this.vx,this.ping.play(),this.goal(e))}if(this.vx<0){var u=t.coordinates(t.x,t.y,t.width,t.height),h=r(u,4),c=h[0],d=h[1],f=h[2],p=h[3];this.x-this.radius>=c&&this.x-this.radius<=d&&this.y>=f&&this.y<=p&&(this.vx=-this.vx,this.ping.play(),this.goal(t))}}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth;(t||e)&&(this.vx*=-1);var i=this.y-this.radius<=0;(this.y+this.radius>=this.boardHeight||i)&&(this.vy*=-1)}},{key:"goal",value:function(t){t.score--,console.log(t.score)}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy,this.paddleCollision(e,i),this.wallCollision();var n=document.createElementNS(s.SVG_NS,"circle");n.setAttributeNS(null,"fill",this.fill),n.setAttributeNS(null,"r",this.radius),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),t.appendChild(n);var r=this.paddleCollision(e,i),o=this.paddleCollision(e,i);r?(this.goal(e),this.direction=-1):o&&(this.goal(i),this.direction=1)}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=function(){function t(e,i,r,o,s,a,l,u){var h=this;n(this,t),this.boardHeight=e,this.width=i,this.height=r,this.x=o,this.y=s,this.speed=10,this.score=0,this.player=u,this.keyState={},document.addEventListener("keydown",function(t){h.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){h.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"up",value:function(){this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"render",value:function(t){this.keyState.a&&"player1"===this.player&&this.up(),this.keyState.z&&"player1"===this.player&&this.down(),this.keyState.ArrowUp&&"player2"===this.player&&this.up(),this.keyState.ArrowDown&&"player2"===this.player&&this.down();var e=document.createElementNS(o.SVG_NS,"rect");e.setAttributeNS(null,"fill","white"),e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),t.appendChild(e)}}]),t}();e.default=s},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),s=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(o.SVG_NS,"text");i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),i.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),i.setAttributeNS(null,"font-size",this.size),i.setAttributeNS(null,"fill","white"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=s},function(t,e,i){e=t.exports=i(13)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(16)+') format("woff"),url('+i(15)+') format("truetype"),url('+i(14)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:2.5rem;margin-bottom:1rem;text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function r(t){if(h===setTimeout)return setTimeout(t,0);if((h===i||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function o(t){if(c===clearTimeout)return clearTimeout(t);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function s(){y&&f&&(y=!1,f.length?p=f.concat(p):m=-1,p.length&&a())}function a(){if(!y){var t=r(s);y=!0;for(var e=p.length;e;){for(f=p,p=[];++m<e;)f&&f[m].run();m=-1,e=p.length}f=null,y=!1,o(t)}}function l(t,e){this.fun=t,this.array=e}function u(){}var h,c,d=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:i}catch(t){h=i}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(t){c=n}}();var f,p=[],y=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];p.push(new l(t,e)),1!==p.length||y||r(a)},l.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.prependListener=u,d.prependOnceListener=u,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,i){(function(t,e){!function(t,i){"use strict";function n(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i+1];var n={callback:t,args:e};return u[l]=n,a(l),l++}function r(t){delete u[t]}function o(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(i,n)}}function s(t){if(h)setTimeout(s,0,t);else{var e=u[t];if(e){h=!0;try{o(e)}finally{r(t),h=!1}}}}if(!t.setImmediate){var a,l=1,u={},h=!1,c=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){a=function(t){e.nextTick(function(){s(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,i=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=i,e}}()?function(){var e="setImmediate$"+Math.random()+"$",i=function(i){i.source===t&&"string"==typeof i.data&&0===i.data.indexOf(e)&&s(+i.data.slice(e.length))};t.addEventListener?t.addEventListener("message",i,!1):t.attachEvent("onmessage",i),a=function(i){t.postMessage(e+i,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){s(t.data)},a=function(e){t.port2.postMessage(e)}}():c&&"onreadystatechange"in c.createElement("script")?function(){var t=c.documentElement;a=function(e){var i=c.createElement("script");i.onreadystatechange=function(){s(e),i.onreadystatechange=null,t.removeChild(i),i=null},t.appendChild(i)}}():function(){a=function(t){setTimeout(s,0,t)}}(),d.setImmediate=n,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,i(2),i(17))},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(l(n.parts[o],e))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(l(n.parts[o],e));d[n.id]={id:n.id,refs:1,parts:s}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],o=r[0],s=r[1],a=r[2],l=r[3],u={css:s,media:a,sourceMap:l};i[o]?i[o].parts.push(u):e.push(i[o]={id:o,parts:[u]})}return e}function r(t,e){var i=y(),n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=v++;i=m||(m=s(e)),n=u.bind(null,i,l,!1),r=u.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=c.bind(null,i),r=function(){o(i),i.href&&URL.revokeObjectURL(i.href)}):(i=s(e),n=h.bind(null,i),r=function(){o(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function c(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(r),o&&URL.revokeObjectURL(o)}var d={},f=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=f(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,b=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var o=[],s=0;s<r.length;s++){var a=r[s],l=d[a.id];l.refs--,o.push(l)}if(t){i(n(t),e)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);
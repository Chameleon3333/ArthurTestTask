(function(t){function i(i){for(var r,o,a=i[0],n=i[1],c=i[2],l=0,x=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&x.push(s[o][0]),s[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);u&&u(i);while(x.length)x.shift()();return h.push.apply(h,c||[]),e()}function e(){for(var t,i=0;i<h.length;i++){for(var e=h[i],r=!0,a=1;a<e.length;a++){var n=e[a];0!==s[n]&&(r=!1)}r&&(h.splice(i--,1),t=o(o.s=e[0]))}return t}var r={},s={app:0},h=[];function o(i){if(r[i])return r[i].exports;var e=r[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,i,e){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)o.d(e,r,function(i){return t[i]}.bind(null,r));return e},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],n=a.push.bind(a);a.push=i,a=a.slice();for(var c=0;c<a.length;c++)i(a[c]);var u=n;h.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},2088:function(t,i,e){t.exports="img/triangle.6600f653.png"},2278:function(t,i,e){t.exports="img/circle.579d3dd3.png"},"29be":function(t,i,e){"use strict";var r=e("b389"),s=e.n(r);s.a},"452c":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[t.playGame?t._e():e("div",{staticClass:"launcher"},[e("span",[t._v("Поле:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.countW,expression:"countW"}],staticClass:"input-param",class:{error:t.isErrorW},attrs:{type:"text"},domProps:{value:t.countW},on:{input:function(i){i.target.composing||(t.countW=i.target.value)}}}),e("span",[t._v("X")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.countH,expression:"countH"}],staticClass:"input-param",class:{error:t.isErrorH},attrs:{type:"text"},domProps:{value:t.countH},on:{input:function(i){i.target.composing||(t.countH=i.target.value)}}}),e("br"),t.isErrorW?e("span",{staticClass:"errText"},[t._v("Поле не должно быть пустым и содержать только числа от 5 до 20")]):t._e(),t.isErrorH?e("span",{staticClass:"errText"},[t._v("Поле не должно быть пустым и содержать только числа от 5 до 16")]):t._e(),e("br"),e("button",{staticClass:"start-button",on:{click:t.startGame}},[t._v("НАЧАТЬ")])]),t.playGame?e("div",{staticClass:"game"},[e("game",{attrs:{"place-size":[+t.countW,+t.countH]},on:{"end-game":t.endGame}})],1):t._e()])},h=[],o=(e("ac1f"),e("466d"),function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"main"}})}),a=[],n=(e("18a5"),e("22a2")),c=null,u=null,l=null,x={props:["placeSize"],data:function(){return{columns:this.placeSize[1],rows:this.placeSize[0],score:0,scoreText:null,exitText:null,weightMatrix:[],objectMatrix:[],indexes:[],removedWeights:[],flagForRemoveWeights:!1,choosenFigures:[],moveCount:1}},methods:{init:function(){c=new n["a"]({forceCanvas:!0}),u=c.stage,l=new n["b"],u.addChild(l),c.renderer.view.style.position="absolute",c.renderer.view.style.display="block",c.renderer.autoResize=!0,c.renderer.resize(window.innerWidth,window.innerHeight),document.getElementById("main").appendChild(c.view),c.renderer.backgroundColor=8900346;var t=new n["e"]({fontFamily:"Arial",fontSize:36,letterSpacing:3,fill:"#C71585",stroke:"#FF4500",strokeThickness:4,dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6});this.scoreText=new n["d"]("SCORE: "+this.score,t),this.scoreText.x=20,this.scoreText.y=15,u.addChild(this.scoreText),this.exitText=new n["d"]("ВЫХОД",t),this.exitText.interactive=!0,this.exitText.buttonMode=!0,this.exitText.anchor.x=.5,this.exitText.anchor.y=.5,this.exitText.x=c.renderer.view.width-110,this.exitText.y=c.renderer.view.height-40,this.exitText.on("mousedown",this.exitButtonDown).on("mouseupoutside",this.exitButtonUp).on("mouseup",this.exit),u.addChild(this.exitText)},spriteSetup:function(){for(var t=0;t<this.columns;t++){this.objectMatrix[t]=[];for(var i=0;i<this.rows;i++)switch(this.weightMatrix[t][i]){case 0:this.objectMatrix[t][i]=0;break;case 1:this.objectMatrix[t][i]=new n["c"].from(e("2278")),this.objectMatrix[t][i].anchor.set(.5),this.objectMatrix[t][i].interactive=!0,this.objectMatrix[t][i].buttonMode=!0,this.objectMatrix[t][i].on("click",this.makeMove.bind(this,t,i));break;case 2:this.objectMatrix[t][i]=new n["c"].from(e("2088")),this.objectMatrix[t][i].anchor.set(.5),this.objectMatrix[t][i].interactive=!0,this.objectMatrix[t][i].buttonMode=!0,this.objectMatrix[t][i].on("click",this.makeMove.bind(this,t,i));break;case 3:this.objectMatrix[t][i]=new n["c"].from(e("94fb")),this.objectMatrix[t][i].anchor.set(.5),this.objectMatrix[t][i].interactive=!0,this.objectMatrix[t][i].buttonMode=!0,this.objectMatrix[t][i].on("click",this.makeMove.bind(this,t,i));break;case 4:this.objectMatrix[t][i]=new n["c"].from(e("ece1")),this.objectMatrix[t][i].anchor.set(.5),this.objectMatrix[t][i].interactive=!0,this.objectMatrix[t][i].buttonMode=!0,this.objectMatrix[t][i].on("click",this.makeMove.bind(this,t,i));break;case 5:this.objectMatrix[t][i]=new n["c"].from(e("735a")),this.objectMatrix[t][i].anchor.set(.5),this.objectMatrix[t][i].interactive=!0,this.objectMatrix[t][i].buttonMode=!0,this.objectMatrix[t][i].on("click",this.makeMove.bind(this,t,i));break}}this.drawObjectMatrix()},exitButtonDown:function(){this.exitText.scale.set(.9)},exitButtonUp:function(){this.exitText.scale.set(1)},exit:function(){this.exitText.scale.set(1),l.destroy(),l=null,c.destroy(),this.$emit("end-game")},updateSize:function(){c.renderer.resize(window.innerWidth,window.innerHeight),this.exitText.x=c.renderer.view.width-110,this.exitText.y=c.renderer.view.height-40,l.x=c.renderer.view.width/2,l.y=c.renderer.view.height/2},initMatrix:function(){for(var t=0;t<this.columns;t++){this.weightMatrix[t]=[];for(var i=0;i<this.rows;i++)this.weightMatrix[t][i]=Math.floor(5*Math.random()+1)}var e=this.checkMatch(),r=this.checkAvailableMoves();while(e||!r){e=this.checkMatch(),r=this.checkAvailableMoves();while(e)this.removeMatches(),e=this.checkMatch();while(!r)this.shuffleMatrix(),r=this.checkAvailableMoves()}},drawObjectMatrix:function(){null!=l&&l.destroy(),l=new n["b"],u.addChild(l);for(var t=0;t<this.columns;t++)for(var i=0;i<this.rows;i++)0!=this.objectMatrix[t][i]&&(this.objectMatrix[t][i].x=40*i,this.objectMatrix[t][i].y=40*t,l.addChild(this.objectMatrix[t][i]));l.x=c.renderer.view.width/2,l.y=c.renderer.view.height/2,l.pivot.x=l.width/2,l.pivot.y=l.height/2},shuffleMatrix:function(){alert("Нет возможных ходов, перемешиваем!");for(var t=0;t<this.columns;t++)for(var i=0;i<this.rows;i++){var e=Math.floor(Math.random()*t),r=Math.floor(Math.random()*i),s=this.weightMatrix[t][i];this.weightMatrix[t][i]=this.weightMatrix[e][r],this.weightMatrix[e][r]=s}this.spriteSetup()},checkAvailableMoves:function(){for(var t=[],i=0;i<this.columns;i++){t[i]=[];for(var e=0;e<this.rows;e++)t[i][e]={up1:!1,up2:!1,up3:!1,up4:!1,right1:!1,right2:!1,right3:!1,right4:!1,down1:!1,down2:!1,down3:!1,down4:!1,left1:!1,left2:!1,left3:!1,left4:!1},i-2>=0&&e-1>=0&&(t[i][e].up1=!0),i-1>=0&&e-1>=0&&i+1<this.columns&&(t[i][e].up2=!0),e-3>=0&&(t[i][e].up3=!0),i+2<this.columns&&e-1>=0&&(t[i][e].up4=!0),i+1<this.columns&&e-2>=0&&(t[i][e].right1=!0),i+1<this.columns&&e-1>=0&&e+1<this.rows&&(t[i][e].right2=!0),i+3<this.columns&&(t[i][e].right3=!0),i+1<this.columns&&e+2<this.rows&&(t[i][e].right4=!0),i+2<this.columns&&e+1<this.rows&&(t[i][e].down1=!0),i-1>=0&&i+1<this.columns&&e+1<this.rows&&(t[i][e].down2=!0),e+3<this.rows&&(t[i][e].down3=!0),i-2>=0&&e+1<this.rows&&(t[i][e].down4=!0),i-1>=0&&e+2<this.rows&&(t[i][e].left1=!0),i-1>=0&&e-1>=0&&e+1<this.rows&&(t[i][e].left2=!0),i-3>=0&&(t[i][e].left3=!0),i-1>=0&&e-2>=0&&(t[i][e].left4=!0)}for(var r=0;r<this.columns;r++)for(var s=0;s<this.rows;s++){var h=this.weightMatrix[r][s];if(t[r][s].up1&&h==this.weightMatrix[r-2][s-1]&&h==this.weightMatrix[r-1][s-1])return!0;if(t[r][s].up2&&h==this.weightMatrix[r-1][s-1]&&h==this.weightMatrix[r+1][s-1])return!0;if(t[r][s].up3&&h==this.weightMatrix[r][s-3]&&h==this.weightMatrix[r][s-2])return!0;if(t[r][s].up4&&h==this.weightMatrix[r+1][s-1]&&h==this.weightMatrix[r+2][s-1])return!0;if(t[r][s].right1&&h==this.weightMatrix[r+1][s-2]&&h==this.weightMatrix[r+1][s-1])return!0;if(t[r][s].right2&&h==this.weightMatrix[r+1][s-1]&&h==this.weightMatrix[r+1][s+1])return!0;if(t[r][s].right3&&h==this.weightMatrix[r+2][s]&&h==this.weightMatrix[r+3][s])return!0;if(t[r][s].right4&&h==this.weightMatrix[r+1][s+2]&&h==this.weightMatrix[r+1][s+1])return!0;if(t[r][s].down1&&h==this.weightMatrix[r+1][s+1]&&h==this.weightMatrix[r+2][s+1])return!0;if(t[r][s].down2&&h==this.weightMatrix[r-1][s+1]&&h==this.weightMatrix[r+1][s+1])return!0;if(t[r][s].down3&&h==this.weightMatrix[r][s+2]&&h==this.weightMatrix[r][s+3])return!0;if(t[r][s].down4&&h==this.weightMatrix[r-2][s+1]&&h==this.weightMatrix[r-1][s+1])return!0;if(t[r][s].left1&&h==this.weightMatrix[r-1][s+1]&&h==this.weightMatrix[r-1][s+2])return!0;if(t[r][s].left2&&h==this.weightMatrix[r-1][s-1]&&h==this.weightMatrix[r-1][s+1])return!0;if(t[r][s].left3&&h==this.weightMatrix[r-3][s]&&h==this.weightMatrix[r-2][s])return!0;if(t[r][s].left4&&h==this.weightMatrix[r-1][s-2]&&h==this.weightMatrix[r-1][s-1])return!0}return!1},checkMatch:function(){this.indexes=[];for(var t=0;t<this.columns;t++){for(var i=1,e=1;e<this.rows;e++)if(this.weightMatrix[t][e]==this.weightMatrix[t][e-1]&&0!=this.weightMatrix[t][e])i++;else{if(i>2)for(var r=i;r>0;r--){var s=e-r;this.indexes.push({a:t,b:s}),this.removedWeights.push(this.weightMatrix[t][e-1])}i=1}if(i>2){for(var h=i;h>0;h--){var o=this.rows-h;this.indexes.push({a:t,b:o})}for(var a=0;a<i;a++)this.removedWeights.push(this.weightMatrix[t][this.rows-1])}}for(var n=0;n<this.rows;n++){for(var c=1,u=1;u<this.columns;u++)if(this.weightMatrix[u][n]==this.weightMatrix[u-1][n]&&0!=this.weightMatrix[u][n])c++;else{if(c>2)for(var l=c;l>0;l--){var x=u-l;this.indexes.push({a:x,b:n}),this.removedWeights.push(this.weightMatrix[u-1][n])}c=1}if(c>2){for(var d=c;d>0;d--){var f=this.columns-d;this.indexes.push({a:f,b:n})}for(var g=0;g<c;g++)this.removedWeights.push(this.weightMatrix[this.columns-1][n])}}return this.indexes.length>0},removeMatches:function(){for(var t=0;t<this.indexes.length;t++)this.weightMatrix[this.indexes[t].a][this.indexes[t].b]=0,null!=l&&l.children.length>0&&l.removeChild(this.objectMatrix[this.indexes[t].a][this.indexes[t].b]);this.moveDown()},moveDown:function(){for(var t=this.columns-1;t>0;t--)for(var i=0;i<this.rows;i++)if(0==this.weightMatrix[t][i])for(var e=t-1;e>=0;e--)if(0!=this.weightMatrix[e][i]){this.weightMatrix[t][i]=this.weightMatrix[e][i],this.weightMatrix[e][i]=0;break}this.fillDeleted()},fillDeleted:function(){for(var t=0;t<this.columns;t++)for(var i=0;i<this.rows;i++)0==this.weightMatrix[t][i]&&(this.weightMatrix[t][i]=Math.floor(5*Math.random()+1));this.spriteSetup()},makeMove:function(t,i){if(0==this.choosenFigures.length)this.choosenFigures.push([t,i]);else if(1==this.choosenFigures.length){var e=this.choosenFigures[0][0],r=this.choosenFigures[0][1];if((t==e+1||t==e-1)&&i==r||t==e&&(i==r+1||i==r-1)){var s=this.weightMatrix[t][i],h=this.objectMatrix[t][i];if(this.weightMatrix[t][i]=this.weightMatrix[e][r],this.weightMatrix[e][r]=s,this.objectMatrix[t][i]=this.objectMatrix[e][r],this.objectMatrix[e][r]=h,this.changeScore(),this.checkMatch())this.removeMatches(),this.flagForRemoveWeights=!0,this.changeScore(),this.flagForRemoveWeights=!1;else{s=this.weightMatrix[t][i];var o=this.objectMatrix[t][i];this.weightMatrix[t][i]=this.weightMatrix[e][r],this.weightMatrix[e][r]=s,this.objectMatrix[t][i]=this.objectMatrix[e][r],this.objectMatrix[e][r]=o}}this.choosenFigures.pop(),this.checkAfterMove()}},changeScore:function(){if(this.flagForRemoveWeights&&this.removedWeights.length>0){var t=1;this.removedWeights.push(0);for(var i=1;i<this.removedWeights.length;i++)this.removedWeights[i]==this.removeMatches[i-1]?t++:(this.score+=t*this.removedWeights[i-1],t=1);this.scoreText.text="SCORE: "+this.score;for(var e=this.removedWeights.length,r=0;r<e;r++)this.removedWeights.pop()}else for(var s=this.removedWeights.length,h=0;h<s;h++)this.removedWeights.pop()},checkAfterMove:function(){var t=this.checkMatch(),i=this.checkAvailableMoves();this.changeScore();while(t||!i){while(t)this.removeMatches(),this.flagForRemoveWeights=!0,this.changeScore(),this.flagForRemoveWeights=!1,t=this.checkMatch();while(!i)this.shuffleMatrix(),i=this.checkAvailableMoves();t=this.checkMatch(),i=this.checkAvailableMoves()}}},mounted:function(){this.init(),this.initMatrix()},created:function(){window.addEventListener("resize",this.updateSize)}},d=x,f=e("2877"),g=Object(f["a"])(d,o,a,!1,null,"299434e4",null),w=g.exports,M={name:"app",components:{Game:w},data:function(){return{countW:"10",countH:"10",playGame:!1,isErrorW:!1,isErrorH:!1}},methods:{startGame:function(){!this.countW.match(/^\d+$/)||this.countW<5||this.countW>20?this.isErrorW=!0:!this.countH.match(/^\d+$/)||this.countH<5||this.countH>16?(this.isErrorW=!1,this.isErrorH=!0):(this.isErrorW=!1,this.isErrorH=!1,this.playGame=!0)},endGame:function(){this.playGame=!1}}},v=M,p=(e("29be"),e("b0a0"),Object(f["a"])(v,s,h,!1,null,"0623a077",null)),m=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"735a":function(t,i,e){t.exports="img/hexagon.10c1a9cd.png"},"94fb":function(t,i,e){t.exports="img/square.8ce67008.png"},b0a0:function(t,i,e){"use strict";var r=e("452c"),s=e.n(r);s.a},b389:function(t,i,e){},ece1:function(t,i,e){t.exports="img/pentagon.1d2c5f82.png"}});
//# sourceMappingURL=app.dce9e211.js.map
(function(){"use strict";var e={419:function(e,n,o){var t=o(963),r=o(252),l=o.p+"img/godzilla.61d3b45c.jpg";const i={id:"app"},a=(0,r._)("h1",null,"GODZILLA STEM WEBSITE MAIN PAGE YAY!!!!!",-1),s=(0,r._)("button",null,"What do we want",-1),c=(0,r._)("button",null,"How it gonna look?",-1),u=(0,r._)("button",null,"Controller?",-1),g=(0,r._)("div",{class:"bady"},[(0,r._)("div",{class:"imgbox"},[(0,r._)("img",{src:l})])],-1);function p(e,n,o,t,l,p){const d=(0,r.up)("router-link"),m=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[a,(0,r.Wm)(d,{to:{name:"DesiresPage"}},{default:(0,r.w5)((()=>[s])),_:1}),(0,r.Wm)(d,{to:{name:"VibesPage"}},{default:(0,r.w5)((()=>[c])),_:1}),(0,r.Wm)(d,{to:{name:"ControllerPageGeneric"}},{default:(0,r.w5)((()=>[u])),_:1}),((0,r.wg)(),(0,r.j4)(m,{key:e.$route.fullPath})),g])}var d={name:"App",components:{}},m=o(744);const h=(0,m.Z)(d,[["render",p]]);var f=h;const b={id:"app"},v=(0,r._)("h1",null,"What do we desrire",-1),w=(0,r._)("ul",null,[(0,r._)("li",null,"Notes and thoughts from each dev and their contributions. See Zane for details"),(0,r._)("li",null,"Roster. Include movies or interactive models. Ref unleashed website and smash bros roster list -goji and iris"),(0,r._)("li",null," before and after shots with slidey bar thingy - christ"),(0,r._)("li",null," dont have site as subsection of someone elses site - everyone"),(0,r._)("li",null,"hide link to doom somewhere in the code because. -christ "),(0,r._)("li",null," controls explanation alogn with button layout for modern controller options - zane")],-1),_=[v,w];function y(e,n,o,t,l,i){return(0,r.wg)(),(0,r.iD)("div",b,_)}var x={name:"DesirePage",components:{}};const P=(0,m.Z)(x,[["render",y]]);var k=P,z=o.p+"img/primalragelogo.c7649a85.png",C=o.p+"img/stemgreen.81e8324a.png";const O={id:"app"},j=(0,r._)("h1",null,"How it gonna be?",-1),D=(0,r._)("h3",null,"primal rage volcano shit",-1),W=(0,r._)("img",{src:z},null,-1),S=(0,r._)("h3",null,"STEM green!",-1),E=(0,r._)("img",{src:C},null,-1),G=[j,D,W,S,E];function Z(e,n,o,t,l,i){return(0,r.wg)(),(0,r.iD)("div",O,G)}var A={name:"VibesPage",components:{}};const I=(0,m.Z)(A,[["render",Z]]);var T=I,F=o.p+"img/generic.c826fa77.png",$=o.p+"img/xbox.4dcb2cd2.jpg",M=o.p+"img/ps2.64f4bf5b.png";const V=e=>((0,r.dD)("data-v-aa091118"),e=e(),(0,r.Cn)(),e),X={class:"controllerback",id:"app"},H=V((()=>(0,r._)("h1",null,"Choose your controller",-1))),L=V((()=>(0,r._)("button",null,"Generic",-1))),N=V((()=>(0,r._)("button",null,"Xbox",-1))),R=V((()=>(0,r._)("button",null,"PS2",-1))),Y={src:F,alt:"why wont you work"},B={src:$,alt:"why wont you work"},q={src:M,alt:"why wont you work"};function J(e,n,o,l,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",X,[H,(0,r.Wm)(s,{to:{name:"ControllerPageGeneric"}},{default:(0,r.w5)((()=>[L])),_:1}),(0,r.Wm)(s,{to:{name:"ControllerPageXbox"}},{default:(0,r.w5)((()=>[N])),_:1}),(0,r.Wm)(s,{to:{name:"ControllerPagePS2"}},{default:(0,r.w5)((()=>[R])),_:1}),(0,r.wy)((0,r._)("img",Y,null,512),[[t.F8,"yes"===i.genericexists]]),(0,r.wy)((0,r._)("img",B,null,512),[[t.F8,"yes"===i.xboxexists]]),(0,r.wy)((0,r._)("img",q,null,512),[[t.F8,"yes"===i.ps2exists]])])}var K={name:"ControllerPage",components:{},data(){return{genericexists:this.genericcheck(),xboxexists:this.xboxcheck(),ps2exists:this.ps2check(),image:this.type}},methods:{genericcheck(){return"/godzillastem/controller/generic"==this.$route.path?"yes":"no"},xboxcheck(){return"/godzillastem/controller/xbox"==this.$route.path?"yes":"no"},ps2check(){return"/godzillastem/controller/ps2"==this.$route.path?"yes":"no"}},props:{type:String}};const Q=(0,m.Z)(K,[["render",J],["__scopeId","data-v-aa091118"]]);var U=Q,ee=o(201);const ne=[{path:"/godzillastem/desires",name:"DesiresPage",component:k},{path:"/godzillastem/vibes",name:"VibesPage",component:T},{path:"/godzillastem/controller/generic",name:"ControllerPageGeneric",component:U},{path:"/godzillastem/controller/xbox",name:"ControllerPageXbox",component:U},{path:"/godzillastem/controller/ps2",name:"ControllerPagePS2",component:U}],oe=(0,ee.p7)({history:(0,ee.PO)(),routes:ne});var te=oe;const re=(0,t.ri)(f);re.use(te),re.mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var l=n[t]={exports:{}};return e[t](l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,l){if(!t){var i=1/0;for(u=0;u<e.length;u++){t=e[u][0],r=e[u][1],l=e[u][2];for(var a=!0,s=0;s<t.length;s++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(u--,1);var c=r();void 0!==c&&(n=c)}}return n}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[t,r,l]}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/godzillastem/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,l,i=t[0],a=t[1],s=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var u=s(o)}for(n&&n(t);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},t=self["webpackChunkgodzillastem"]=self["webpackChunkgodzillastem"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(419)}));t=o.O(t)})();
//# sourceMappingURL=app.9b6e02e8.js.map
(function(){"use strict";var e={488:function(e,n,t){var o=t(963),r=t(252),l=t.p+"img/godzilla.61d3b45c.jpg";const i={id:"app"},a=(0,r._)("h1",null,"GODZILLA STEM WEBSITE MAIN PAGE YAY!!!!!",-1),s=(0,r._)("button",null,"What do we want",-1),u=(0,r._)("button",null,"How it gonna look?",-1),c=(0,r._)("button",null,"Controller?",-1),d=(0,r._)("button",null,"Check out the slider mockup",-1),p=(0,r._)("div",{class:"bady"},[(0,r._)("div",{class:"imgbox"},[(0,r._)("img",{src:l})])],-1);function g(e,n,t,o,l,g){const m=(0,r.up)("router-link"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[a,(0,r.Wm)(m,{to:{name:"DesiresPage"}},{default:(0,r.w5)((()=>[s])),_:1}),(0,r.Wm)(m,{to:{name:"VibesPage"}},{default:(0,r.w5)((()=>[u])),_:1}),(0,r.Wm)(m,{to:{name:"ControllerPageGeneric"}},{default:(0,r.w5)((()=>[c])),_:1}),(0,r.Wm)(m,{to:{name:"SliderPage"}},{default:(0,r.w5)((()=>[d])),_:1}),((0,r.wg)(),(0,r.j4)(f,{key:e.$route.fullPath})),p])}var m={name:"App",components:{}},f=t(744);const h=(0,f.Z)(m,[["render",g]]);var b=h;const v={id:"app"},w=(0,r._)("h1",null,"What do we desrire",-1),_=(0,r._)("ul",null,[(0,r._)("li",null,"Notes and thoughts from each dev and their contributions. See Zane for details"),(0,r._)("li",null,"Roster. Include movies or interactive models. Ref unleashed website and smash bros roster list -goji and iris"),(0,r._)("li",null," before and after shots with slidey bar thingy - christ"),(0,r._)("li",null," dont have site as subsection of someone elses site - everyone"),(0,r._)("li",null,"hide link to doom somewhere in the code because. -christ "),(0,r._)("li",null," controls explanation alogn with button layout for modern controller options - zane")],-1),y=[w,_];function x(e,n,t,o,l,i){return(0,r.wg)(),(0,r.iD)("div",v,y)}var P={name:"DesirePage",components:{}};const k=(0,f.Z)(P,[["render",x]]);var C=k,z=t.p+"img/primalragelogo.c7649a85.png",O=t.p+"img/stemgreen.81e8324a.png";const S={id:"app"},D=(0,r._)("h1",null,"How it gonna be?",-1),W=(0,r._)("h3",null,"primal rage volcano shit",-1),j=(0,r._)("img",{src:z},null,-1),I=(0,r._)("h3",null,"STEM green!",-1),Z=(0,r._)("img",{src:O},null,-1),E=[D,W,j,I,Z];function G(e,n,t,o,l,i){return(0,r.wg)(),(0,r.iD)("div",S,E)}var A={name:"VibesPage",components:{}};const T=(0,f.Z)(A,[["render",G]]);var F=T,M=t.p+"img/generic.c826fa77.png",$=t.p+"img/xbox.4dcb2cd2.jpg",V=t.p+"img/ps2.64f4bf5b.png";const X=e=>((0,r.dD)("data-v-aa091118"),e=e(),(0,r.Cn)(),e),B={class:"controllerback",id:"app"},H=X((()=>(0,r._)("h1",null,"Choose your controller",-1))),L=X((()=>(0,r._)("button",null,"Generic",-1))),N=X((()=>(0,r._)("button",null,"Xbox",-1))),R=X((()=>(0,r._)("button",null,"PS2",-1))),Y={src:M,alt:"why wont you work"},q={src:$,alt:"why wont you work"},J={src:V,alt:"why wont you work"};function K(e,n,t,l,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",B,[H,(0,r.Wm)(s,{to:{name:"ControllerPageGeneric"}},{default:(0,r.w5)((()=>[L])),_:1}),(0,r.Wm)(s,{to:{name:"ControllerPageXbox"}},{default:(0,r.w5)((()=>[N])),_:1}),(0,r.Wm)(s,{to:{name:"ControllerPagePS2"}},{default:(0,r.w5)((()=>[R])),_:1}),(0,r.wy)((0,r._)("img",Y,null,512),[[o.F8,"yes"===i.genericexists]]),(0,r.wy)((0,r._)("img",q,null,512),[[o.F8,"yes"===i.xboxexists]]),(0,r.wy)((0,r._)("img",J,null,512),[[o.F8,"yes"===i.ps2exists]])])}var Q={name:"ControllerPage",components:{},data(){return{genericexists:this.genericcheck(),xboxexists:this.xboxcheck(),ps2exists:this.ps2check(),image:this.type}},methods:{genericcheck(){return"/godzillastem/controller/generic"==this.$route.path?"yes":"no"},xboxcheck(){return"/godzillastem/controller/xbox"==this.$route.path?"yes":"no"},ps2check(){return"/godzillastem/controller/ps2"==this.$route.path?"yes":"no"}},props:{type:String}};const U=(0,f.Z)(Q,[["render",K],["__scopeId","data-v-aa091118"]]);var ee=U,ne=t.p+"img/before.4dbb634f.png",te=t.p+"img/after.aa3c5513.png";const oe=e=>((0,r.dD)("data-v-0f8a886f"),e=e(),(0,r.Cn)(),e),re={class:"controllerback",id:"app"},le=oe((()=>(0,r._)("h1",null,"Before and after, for your health",-1))),ie=oe((()=>(0,r._)("img",{slot:"first",style:{width:"100%"},src:ne},null,-1))),ae=oe((()=>(0,r._)("img",{slot:"second",style:{width:"100%"},src:te},null,-1)));function se(e,n,t,o,l,i){const a=(0,r.up)("ImgComparisonSlider");return(0,r.wg)(),(0,r.iD)("div",re,[le,(0,r.Wm)(a,null,{default:(0,r.w5)((()=>[ie,ae])),_:1})])}var ue=t(311),ce={name:"SliderPage",components:{ImgComparisonSlider:ue.P},data(){return{}},methods:{},props:{}};const de=(0,f.Z)(ce,[["render",se],["__scopeId","data-v-0f8a886f"]]);var pe=de,ge=t(201);const me=[{path:"/godzillastem/desires",name:"DesiresPage",component:C},{path:"/godzillastem/vibes",name:"VibesPage",component:F},{path:"/godzillastem/controller/generic",name:"ControllerPageGeneric",component:ee},{path:"/godzillastem/controller/xbox",name:"ControllerPageXbox",component:ee},{path:"/godzillastem/controller/ps2",name:"ControllerPagePS2",component:ee},{path:"/godzillastem/sliderdemo",name:"SliderPage",component:pe}],fe=(0,ge.p7)({history:(0,ge.PO)(),routes:me});var he=fe;const be=(0,o.ri)(b);be.use(he),be.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={exports:{}};return e[o](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,l){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],l=e[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var u=r();void 0!==u&&(n=u)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,r,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/godzillastem/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,l,i=o[0],a=o[1],s=o[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var c=s(t)}for(n&&n(o);u<i.length;u++)l=i[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},o=self["webpackChunkgodzillastem"]=self["webpackChunkgodzillastem"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(488)}));o=t.O(o)})();
//# sourceMappingURL=app.7e26766c.js.map
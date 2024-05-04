"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8089],{9034:(A,m,s)=>{s.d(m,{Hc:()=>_});const _=(0,s(2726).fo)("NativeBiometric",{web:()=>s.e(5303).then(s.bind(s,5303)).then(n=>new n.NativeBiometricWeb)})},1062:(A,m,s)=>{s.d(m,{Zz:()=>_,ag:()=>b,h5:()=>O,mk:()=>n,yz:()=>v});var d=s(5861),p=s(2014);const o=new p.K({name:"_localDataDB",driverOrder:[p.N.IndexedDB,p.N.LocalStorage]}),_=function(){var g=(0,d.Z)(function*(a){var r;yield o.create(),(a=null!==(r=a)&&void 0!==r?r:{}).params=a.params||{};try{var l=(yield o.get("ui-config"))||{};return"function"==typeof a.callback&&a.callback(l),l}catch(i){"function"==typeof a.callback&&a.callback(),console.error(i)}return{}});return function(r){return g.apply(this,arguments)}}(),n=function(){var g=(0,d.Z)(function*(a){var r;yield o.create();var e="ui-config";(a=null!==(r=a)&&void 0!==r?r:{}).params=a.params||{};try{var l=(yield o.get(e))||{};Object.assign(l,a.params),yield o.set(e,l),"function"==typeof a.callback&&a.callback(l)}catch(i){"function"==typeof a.callback&&a.callback(),console.error(i)}});return function(r){return g.apply(this,arguments)}}(),v=function(){var g=(0,d.Z)(function*(a){var r;yield o.create(),(a=null!==(r=a)&&void 0!==r?r:{}).params=a.params||{};try{var l=(yield o.get("setting"))||{};return"function"==typeof a.callback&&a.callback(l),l}catch(i){"function"==typeof a.callback&&a.callback(),console.error(i)}return{}});return function(r){return g.apply(this,arguments)}}(),b=function(){var g=(0,d.Z)(function*(a){var r;yield o.create();var e="setting";(a=null!==(r=a)&&void 0!==r?r:{}).params=a.params||{};try{var l=(yield o.get(e))||{};Object.assign(l,a.params),yield o.set(e,l),"function"==typeof a.callback&&a.callback(l)}catch(i){"function"==typeof a.callback&&a.callback(),console.error(i)}});return function(r){return g.apply(this,arguments)}}(),O=function(){var g=(0,d.Z)(function*(a){var r;yield o.create(),(a=null!==(r=a)&&void 0!==r?r:{}).params=a.params||{};try{yield o.set("setting",{}),"function"==typeof a.callback&&a.callback()}catch(l){"function"==typeof a.callback&&a.callback(),console.error(l)}});return function(r){return g.apply(this,arguments)}}()},3377:(A,m,s)=>{s.d(m,{Kr:()=>v,LE:()=>O,iA:()=>n,lL:()=>b});var d=s(5861),p=s(2014),o=s(4459);const _=new p.K({name:"_userDB",driverOrder:[p.N.IndexedDB,p.N.LocalStorage]}),n=function(){var r=(0,d.Z)(function*(e){yield _.create();try{var l=(yield _.get("user-local"))||{};return"function"==typeof(null==e?void 0:e.callback)&&e.callback(Object.assign({},l||{})),l}catch(i){"function"==typeof(null==e?void 0:e.callback)&&e.callback(),console.error(i)}return{}});return function(l){return r.apply(this,arguments)}}(),v=function(){var r=(0,d.Z)(function*(e){yield _.create(),e.params=e.params||{};try{var l=Object.assign({},e.params);yield _.set("user-local",l),"function"==typeof e.callback&&e.callback(Object.assign({},l||{}))}catch(i){"function"==typeof e.callback&&e.callback(),console.error(i)}});return function(l){return r.apply(this,arguments)}}(),b=function(){var r=(0,d.Z)(function*(e){return e&&(e.params={}),v(null!=e?e:{})});return function(l){return r.apply(this,arguments)}}(),O=function(){var r=(0,d.Z)(function*(e,l){let i=yield(0,o.H0)();if(l){let L=[];e.params.profilephoto&&L.push(new Promise((t,u)=>{let f=new Image;f.onload=()=>{e.params.url_profilephoto=f.src,t(1)},f.onerror=()=>{e.params.url_profilephoto="assets/image/user-avatar-default.png",t(0)},f.src=i.readfileuploadurl+e.params.profilephoto})),e.params.banner&&L.push(new Promise((t,u)=>{let f=new Image;f.onload=()=>{e.params.url_banner=f.src,t(1)},f.onerror=()=>{e.params.url_banner="assets/image/user-banner-default.png",t(0)},f.src=i.readfileuploadurl+e.params.banner})),L.length>0?Promise.all(L).then(()=>{v(e)}):v(e)}else n({callback:L=>{if(L){let t=[];e.params.profilephoto&&t.push(new Promise((u,f)=>{let c=new Image;c.onload=()=>{e.params.url_profilephoto=c.src,u(1)},c.onerror=()=>{e.params.url_profilephoto="assets/image/user-avatar-default.png",u(0)},c.src=i.readfileuploadurl+e.params.profilephoto})),e.params.banner&&t.push(new Promise((u,f)=>{let c=new Image;c.onload=()=>{e.params.url_banner=c.src,u(1)},c.onerror=()=>{e.params.url_banner="assets/image/user-banner-default.png",u(0)},c.src=i.readfileuploadurl+e.params.banner})),t.length>0?Promise.all(t).then(()=>{v({params:Object.assign({},L,e.params),callback:e.callback})}):v({params:Object.assign({},L,e.params),callback:e.callback})}else"function"==typeof e.callback&&e.callback()}})});return function(l,i){return r.apply(this,arguments)}}()},8089:(A,m,s)=>{s.r(m),s.d(m,{AppLoadingPageModule:()=>L});var d=s(6814),p=s(6223),o=s(3536),_=s(6916),n=s(5861),v=s(9034),b=s(4459),O=s(1062),g=s(3377),a=s(2695),r=s(5879);const l=[{path:"",component:(()=>{var t;class u{constructor(){this.appsettings={}}ngOnInit(){var c=this;(0,n.Z)(function*(){c.appsettings=yield(0,b.H0)(),c.checkBiometric()})()}onIonRefresher(c){this.checkBiometric(),setTimeout(()=>{c.target.complete()},3e3)}checkBiometric(){var c=this;return(0,n.Z)(function*(){(yield(0,O.yz)()).Biometric?v.Hc.verifyIdentity({subtitle:"\u1ee8ng d\u1ee5ng \u0111\xe3 \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 b\u1edfi sinh tr\u1eafc h\u1ecdc",useFallback:!0,maxAttempts:5}).then(I=>{console.info("NativeBiometric.verifyIdentity",I),c.checkAuth()}).catch(I=>{console.error("NativeBiometric.verifyIdentity",I)}):c.checkAuth()})()}checkAuth(){var c=this;return(0,n.Z)(function*(){yield(0,g.iA)({callback:I=>{var N,C;c.user=I,null!==(N=c.user)&&void 0!==N&&N.userid?(null===(C=c.user)||void 0===C?void 0:C.madonvi)==c.appsettings.madonvi?window.location.replace(a.z.DASHBOARD):c.signOut():window.location.replace(a.z.LANDING_PAGE)}})})()}signOut(){return(0,n.Z)(function*(){yield(0,b.rt)(),(0,g.Kr)({callback:()=>{window.location.replace(a.z.LANDING_PAGE)}})})()}}return(t=u).\u0275fac=function(c){return new(c||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-app-loading"]],decls:3,vars:0,consts:[["slot","fixed",3,"ionRefresh"]],template:function(c,I){1&c&&(r.TgZ(0,"ion-content")(1,"ion-refresher",0),r.NdJ("ionRefresh",function(C){return I.onIonRefresher(C)}),r._UZ(2,"ion-refresher-content"),r.qZA()())},dependencies:[o.W2,o.nJ,o.Wo]}),u})()}];let i=(()=>{var t;class u{}return(t=u).\u0275fac=function(c){return new(c||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[_.Bz.forChild(l),_.Bz]}),u})(),L=(()=>{var t;class u{}return(t=u).\u0275fac=function(c){return new(c||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[d.ez,p.u5,o.Pc,i]}),u})()}}]);
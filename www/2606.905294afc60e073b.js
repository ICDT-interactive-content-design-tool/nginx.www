"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2606],{7073:(A,P,i)=>{i.r(P),i.d(P,{EmbedPageModule:()=>$});var M=i(6814),O=i(6223),u=i(3536),h=i(6916),y=i(5861),g=i(4981),T=i(4459),E=i(7090),v=i(8530),d=i(70),I=i(3377),C=i(9942),t=i(5879),Z=i(6593);function z(e,s){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"ion-button",16),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.pageBack())}),t._UZ(3,"ion-img",17),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"ion-button",16),t.NdJ("click",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.pageNext())}),t._UZ(7,"ion-img",18),t.qZA()(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(2),t.Q6J("disabled",o.slideIdx<1),t.xp6(3),t.AsE("",o.slideIdx+1,"/",o.slideTotal,""),t.xp6(1),t.Q6J("disabled",o.slideIdx>=o.slideTotal-1)}}const S=[{path:"",component:(()=>{var e;class s{constructor(n,a,r){this.router=n,this.activatedRoute=a,this.titleService=r,this.b=0,this.slides=[],this.slideIdx=0,this.slideTotal=0,this.settings={},this.pageBack=()=>{this.slideIdx>0&&(this.slideIdx--,this.renderSlide())},this.pageNext=()=>{this.slideIdx<this.slideTotal-1&&(this.slideIdx++,this.renderSlide())},this.slideIdx=parseInt(a.snapshot.queryParamMap.get("n")||"1")-1,this.pathfile=this.activatedRoute.snapshot.queryParamMap.get("pathfile")||void 0;let c=this.activatedRoute.snapshot.queryParamMap.get("b")||"";c?this.b=parseInt(c):window.location.replace("/")}ngOnInit(){var n=this;g.icdt.container="#mainContainer",g.icdt.svg="#mainSvg",(0,y.Z)(function*(){g.icdt.config=yield(0,T.H0)(),n.user=yield(0,I.iA)(),n.refreshData()})()}refreshData(){var n,a;(0,E.T6)({params:{userid:null===(n=this.user)||void 0===n?void 0:n.userid,board_id:this.b},callback:r=>{var c;null!=r&&r.board_id?(this.titleService.setTitle(`${r.board_title}`),(0,v.Yx)({params:{userid:null===(c=this.user)||void 0===c?void 0:c.userid,board_id:this.b,pathfile:this.pathfile},callback:l=>{var m;let p;if(l&&!l.modules?p=(0,C.w)(l):"icdtV2"==(null==l?void 0:l.modules)&&(p=l),p)return d.$.data=p,d.$.changeSlide=(f,U,w,x,b)=>{this.slideIdx=w,this.slideTotal=x,this.slide=b,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=d.$.slideTotal,void this.renderSlide();(0,v.Ir)({params:{userid:null===(m=this.user)||void 0===m?void 0:m.userid,board_id:this.b},callback:f=>{f&&(d.$.data=(0,C.w)(f),d.$.changeSlide=(U,w,x,b,_)=>{this.slideIdx=x,this.slideTotal=b,this.slide=_,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{n:this.slideIdx+1},queryParamsHandling:"merge",replaceUrl:!0})},this.slideTotal=d.$.slideTotal,this.renderSlide())}})}})):window.location.replace("/")}}),(0,v.gj)({params:{board_id:this.b,userid:null===(a=this.user)||void 0===a?void 0:a.userid},callback:r=>{this.settings=r||{buttons:{paging:!0}}}}),window.addEventListener("resize",()=>{console.log("preview window resize"),this.slide&&(0,d.U)(g.icdt.container,g.icdt.svg,this.slide)})}renderSlide(){d.$.runSlide(this.slideIdx)}}return(e=s).\u0275fac=function(n){return new(n||e)(t.Y36(h.F0),t.Y36(h.gz),t.Y36(Z.Dx))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-embed"]],decls:16,vars:2,consts:[["scroll-x","false","scroll-y","false",3,"fullscreen"],[1,"container-grid","grid-column"],[1,"container-head","container-top"],[1,"container-body","grid-grow"],[1,"container-grid","grid-row"],[1,"container-left"],[1,"container-center"],[1,"grid-grow"],[1,"main-container",2,"overflow","auto"],["scroll-x","false","scroll-y","false"],["id","mainContainer",1,"svg-box"],["id","mainSvg","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"viewer"],[1,"container-bottom"],[4,"ngIf"],[1,"container-right"],[1,"group-action-paging"],["fill","clear",1,"ion-no-margin","ion-no-padding",3,"disabled","click"],["src","../../../assets/icon-png/Back.png"],["src","../../../assets/icon-png/Next.png"]],template:function(n,a){1&n&&(t.TgZ(0,"ion-content",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"div",4),t._UZ(5,"div",5),t.TgZ(6,"div",6)(7,"div",1)(8,"div",7)(9,"div",8)(10,"ion-content",9)(11,"div",10),t.O4$(),t._UZ(12,"svg",11),t.qZA()()()(),t.kcU(),t.TgZ(13,"div",12),t.YNc(14,z,8,4,"ng-container",13),t.qZA()()(),t._UZ(15,"div",14),t.qZA()()()()),2&n&&(t.Q6J("fullscreen",!0),t.xp6(14),t.Q6J("ngIf",null==a.settings.buttons?null:a.settings.buttons.paging))},dependencies:[M.O5,u.YG,u.W2,u.Xz],styles:[".container-grid[_ngcontent-%COMP%]{display:flex;width:100%;height:100%}.container-grid.grid-row[_ngcontent-%COMP%]{flex-flow:row}.container-grid.grid-column[_ngcontent-%COMP%]{flex-flow:column}.container-grid[_ngcontent-%COMP%]   .grid-grow[_ngcontent-%COMP%]{flex-grow:1}.container-head[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:0 2px 2px #0000001a}.container-body[_ngcontent-%COMP%]{position:relative;z-index:1}.container-body[_ngcontent-%COMP%]   .container-left[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-right[_ngcontent-%COMP%]{position:relative;z-index:2;box-shadow:-2px 0 2px #0000001a}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]{position:relative;z-index:1;flex:auto;width:calc(100% - 480px)}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .container-bottom[_ngcontent-%COMP%]{position:relative;z-index:2}.container-body[_ngcontent-%COMP%]   .container-center[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1;-webkit-user-select:none;user-select:none;background-color:#fafafa}.group-action-paging[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;right:1rem;line-height:0;-webkit-user-select:none;user-select:none}.group-action-paging[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;padding:0 1rem;vertical-align:middle;font-size:18px;color:#fab11d}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{vertical-align:middle}.group-action-paging[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{height:34px}.svg-box[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));display:flex;align-items:center;justify-content:center}.svg-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%;margin:auto;background:#fff}"]}),s})()}];let k=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(S),h.Bz]}),s})(),$=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[M.ez,O.u5,u.Pc,k]}),s})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["src_app_pages_tabs_login_login_module_ts"],{4883:(A,c,i)=>{i.r(c),i.d(c,{LoginPageModule:()=>M});var m=i(6895),s=i(433),n=i(2346),g=i(1407),p=i(9671),v=i(6052),t=i(8256),h=i(9647),f=i(8334);const y=function(){return["/cliente-acciones"]},L=[{path:"",component:(()=>{class e{constructor(o,l,r,d,u){this.router=o,this.servicio=l,this.rutas=r,this.nav=d,this.alertController=u}ngOnInit(){}registrar(){this.router.navigate(["cliente-acciones"])}login(o){this.servicio.post(this.rutas.usuario,{Cmd:[5,0,0,0],Datos:o.value}).then(r=>{r.Datos.UsuarioId>0?(this.rutas.cliente=r.Datos,v.K.set({key:"cliente",value:JSON.stringify(r.Datos)}).then(()=>{this.nav.back()})):this.presentAlert()})}presentAlert(){var o=this;return(0,p.Z)(function*(){yield(yield o.alertController.create({header:"Alerta",subHeader:"Message",message:"Usuario no existe !",buttons:["Aceptar"]})).present()})()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.F0),t.Y36(h.l),t.Y36(f.R),t.Y36(n.SH),t.Y36(n.Br))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:21,vars:3,consts:[["color","primary"],[1,"ion-text-center"],[1,"ion-padding"],[3,"ngSubmit"],["form","ngForm"],["color","primary","justify-content-center",""],["align-center","","size-md","6","size-lg","5","size-xs","12"],["padding",""],["name","UsuarioLogin","type","text","placeholder","usuario","ngModel","","required",""],["name","UsuarioPass","type","password","placeholder","contrase\xf1a","ngModel","","required",""],["type","submit","expand","block",3,"disabled"],[1,"small-text",3,"routerLink"]],template:function(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),t._uU(3,"LOGIN"),t.qZA()()(),t.TgZ(4,"ion-content",2)(5,"form",3,4),t.NdJ("ngSubmit",function(){t.CHM(r);const u=t.MAs(6);return t.KtG(l.login(u))}),t.TgZ(7,"ion-grid")(8,"ion-row",5)(9,"ion-col",6)(10,"div",7)(11,"ion-item"),t._UZ(12,"ion-input",8),t.qZA(),t.TgZ(13,"ion-item"),t._UZ(14,"ion-input",9),t.qZA()(),t.TgZ(15,"div",7)(16,"ion-button",10),t._uU(17,"Login"),t.qZA()(),t.TgZ(18,"div",1)(19,"a",11),t._uU(20,"\xa1reg\xedstrate!"),t.qZA()()()()()()()}if(2&o){const r=t.MAs(6);t.xp6(16),t.Q6J("disabled",r.invalid),t.xp6(3),t.Q6J("routerLink",t.DdM(2,y))}},dependencies:[s._Y,s.JJ,s.JL,s.Q7,s.On,s.F,n.YG,n.wI,n.W2,n.jY,n.Gu,n.pK,n.Ie,n.Nd,n.wd,n.sr,n.j9,n.Fo,g.yS],styles:[".md[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(L),g.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,s.u5,n.Pc,P]}),e})()}}]);
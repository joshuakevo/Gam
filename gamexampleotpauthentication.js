gx.evt.autoSkip=!1;gx.define("gamexampleotpauthentication",!1,function(){this.ServerClass="gamexampleotpauthentication";this.PackageName="GeneXus.Programs";this.ServerFullClass="gamexampleotpauthentication.aspx";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GamDemo";this.SetStandaloneVars=function(){this.AV7AuthenticationTypeName=gx.fn.getControlValue("vAUTHENTICATIONTYPENAME");this.AV16UseTwoFactorAuthentication=gx.fn.getControlValue("vUSETWOFACTORAUTHENTICATION");this.AV10IDP_State=gx.fn.getControlValue("vIDP_STATE")};this.e12092_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e13092_client=function(){return this.executeServerEvent("'LOGIN'",!1,null,!1,!1)};this.e15092_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31,32,33];this.GXLastCtrlId=33;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TBTITLE",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAME",fmt:0,gxz:"ZV14UserName",gxold:"OV14UserName",gxvar:"AV14UserName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14UserName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14UserName=n)},v2c:function(){gx.fn.setControlValue("vUSERNAME",gx.O.AV14UserName,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV14UserName=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAME")},nac:gx.falseFn};this.declareDomainHdlr(14,function(){});n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,lvl:0,type:"char",len:50,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERPASSWORD",fmt:0,gxz:"ZV15UserPassword",gxold:"OV15UserPassword",gxvar:"AV15UserPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15UserPassword=n)},v2z:function(n){n!==undefined&&(gx.O.ZV15UserPassword=n)},v2c:function(){gx.fn.setControlValue("vUSERPASSWORD",gx.O.AV15UserPassword,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV15UserPassword=this.val())},val:function(){return gx.fn.getControlValue("vUSERPASSWORD")},nac:gx.falseFn};this.declareDomainHdlr(19,function(){});n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"ENTER",grid:0,evt:"e12092_client",std:"ENTER"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"TABLEBACK",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"IMAGE1",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"LOGIN",grid:0,evt:"e13092_client"};this.AV14UserName="";this.ZV14UserName="";this.OV14UserName="";this.AV15UserPassword="";this.ZV15UserPassword="";this.OV15UserPassword="";this.AV14UserName="";this.AV15UserPassword="";this.AV10IDP_State="";this.AV7AuthenticationTypeName="";this.AV16UseTwoFactorAuthentication=!1;this.Events={e12092_client:["ENTER",!0],e13092_client:["'LOGIN'",!0],e15092_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV7AuthenticationTypeName",fld:"vAUTHENTICATIONTYPENAME",pic:"",hsh:!0},{av:"AV16UseTwoFactorAuthentication",fld:"vUSETWOFACTORAUTHENTICATION",pic:"",hsh:!0},{av:"AV14UserName",fld:"vUSERNAME",pic:"",hsh:!0}],[]];this.EvtParms.ENTER=[[{av:"AV7AuthenticationTypeName",fld:"vAUTHENTICATIONTYPENAME",pic:"",hsh:!0},{av:"AV16UseTwoFactorAuthentication",fld:"vUSETWOFACTORAUTHENTICATION",pic:"",hsh:!0},{av:"AV10IDP_State",fld:"vIDP_STATE",pic:""},{av:"AV14UserName",fld:"vUSERNAME",pic:"",hsh:!0},{av:"AV15UserPassword",fld:"vUSERPASSWORD",pic:""}],[{av:"AV10IDP_State",fld:"vIDP_STATE",pic:""},{av:"AV15UserPassword",fld:"vUSERPASSWORD",pic:""}]];this.EvtParms["'LOGIN'"]=[[{av:"AV10IDP_State",fld:"vIDP_STATE",pic:""}],[{av:"AV10IDP_State",fld:"vIDP_STATE",pic:""}]];this.EnterCtrl=["ENTER"];this.setVCMap("AV7AuthenticationTypeName","vAUTHENTICATIONTYPENAME",0,"char",60,0);this.setVCMap("AV16UseTwoFactorAuthentication","vUSETWOFACTORAUTHENTICATION",0,"boolean",1,0);this.setVCMap("AV10IDP_State","vIDP_STATE",0,"char",60,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.gamexampleotpauthentication)})
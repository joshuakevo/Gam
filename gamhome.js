gx.evt.autoSkip=!1;gx.define("gamhome",!1,function(){this.ServerClass="gamhome";this.PackageName="GeneXus.Programs";this.ServerFullClass="gamhome.aspx";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GamDemo";this.SetStandaloneVars=function(){this.AV12Id=gx.fn.getIntegerValue("vID",",");this.AV9isJavaEnvironment=gx.fn.getControlValue("vISJAVAENVIRONMENT")};this.e12062_client=function(){return this.executeServerEvent("'CONFIRM'",!1,null,!1,!1)};this.e13062_client=function(){return this.executeServerEvent("'GODEVMENU'",!0,null,!1,!1)};this.e14062_client=function(){return this.executeServerEvent("'GOBACKEND'",!0,null,!1,!1)};this.e15062_client=function(){return this.executeServerEvent("'GODOC'",!0,null,!1,!1)};this.e17062_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e18062_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];this.GXLastCtrlId=39;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"WELCOME",format:0,grid:0,ctrltype:"textblock"};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TEXTBLOCK2",format:0,grid:0,ctrltype:"textblock"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TABLEOPTIONS",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"TEXTBLOCK4",format:0,grid:0,ctrltype:"textblock"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"TEXTBLOCK7",format:0,grid:0,evt:"e14062_client",ctrltype:"textblock"};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"TEXTBLOCK5",format:0,grid:0,ctrltype:"textblock"};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"TEXTBLOCK8",format:0,grid:0,evt:"e13062_client",ctrltype:"textblock"};n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"TEXTBLOCK3",format:0,grid:0,ctrltype:"textblock"};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"TEXTBLOCK6",format:0,grid:0,evt:"e15062_client",ctrltype:"textblock"};n[31]={id:31,fld:"",grid:0};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"TEXTBLOCK9",format:0,grid:0,ctrltype:"textblock"};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPLICATIONHOMEOBJECT",fmt:0,gxz:"ZV6ApplicationHomeObject",gxold:"OV6ApplicationHomeObject",gxvar:"AV6ApplicationHomeObject",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6ApplicationHomeObject=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6ApplicationHomeObject=n)},v2c:function(){gx.fn.setControlValue("vAPPLICATIONHOMEOBJECT",gx.O.AV6ApplicationHomeObject,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6ApplicationHomeObject=this.val())},val:function(){return gx.fn.getControlValue("vAPPLICATIONHOMEOBJECT")},nac:gx.falseFn};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"CONFIRM",grid:0,evt:"e12062_client"};this.AV6ApplicationHomeObject="";this.ZV6ApplicationHomeObject="";this.OV6ApplicationHomeObject="";this.AV6ApplicationHomeObject="";this.AV12Id=0;this.AV9isJavaEnvironment=!1;this.AV10HttpRequest={};this.Events={e12062_client:["'CONFIRM'",!0],e13062_client:["'GODEVMENU'",!0],e14062_client:["'GOBACKEND'",!0],e15062_client:["'GODOC'",!0],e17062_client:["ENTER",!0],e18062_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV12Id",fld:"vID",pic:"ZZZ9",hsh:!0},{av:"AV9isJavaEnvironment",fld:"vISJAVAENVIRONMENT",pic:"",hsh:!0}],[]];this.EvtParms["'CONFIRM'"]=[[{av:"AV12Id",fld:"vID",pic:"ZZZ9",hsh:!0},{av:"AV6ApplicationHomeObject",fld:"vAPPLICATIONHOMEOBJECT",pic:""}],[]];this.EvtParms["'GODEVMENU'"]=[[{av:"AV9isJavaEnvironment",fld:"vISJAVAENVIRONMENT",pic:"",hsh:!0},{av:"this.AV10HttpRequest.Baseurl",ctrl:"vHTTPREQUEST",prop:"Baseurl"}],[]];this.EvtParms["'GOBACKEND'"]=[[{av:"AV9isJavaEnvironment",fld:"vISJAVAENVIRONMENT",pic:"",hsh:!0}],[]];this.EvtParms["'GODOC'"]=[[],[]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV12Id","vID",0,"int",4,0);this.setVCMap("AV9isJavaEnvironment","vISJAVAENVIRONMENT",0,"boolean",4,0);this.Initialize()});gx.wi(function(){gx.createParentObj(this.gamhome)})
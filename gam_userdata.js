gx.evt.autoSkip=!1;gx.define("gam_userdata",!0,function(n){this.ServerClass="gam_userdata";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_userdata.aspx";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.AV16Language=gx.fn.getControlValue("vLANGUAGE")};this.e12382_client=function(){return this.executeServerEvent("VAUTHENTICATIONTYPENAME.ISVALID",!0,null,!1,!0)};this.e14382_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15382_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];this.GXLastCtrlId=49;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"GAM_DATACARD",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"GAM_DATACARD_TABLEGENERALTITLE",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"GAM_DATACARD_TBTITLEGENERAL",format:0,grid:0,ctrltype:"textblock"};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"GAM_DATACARD_TABLEDATAGENERAL",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"IMAGECELL",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"bits",len:1024,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIMAGE",fmt:0,gxz:"ZV14Image",gxold:"OV14Image",gxvar:"AV14Image",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14Image=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14Image=n)},v2c:function(){gx.fn.setMultimediaValue("vIMAGE",gx.O.AV14Image,gx.O.AV26Image_GXI)},c2v:function(){gx.O.AV26Image_GXI=this.val_GXI();this.val()!==undefined&&(gx.O.AV14Image=this.val())},val:function(){return gx.fn.getBlobValue("vIMAGE")},val_GXI:function(){return gx.fn.getControlValue("vIMAGE_GXI")},gxvar_GXI:"AV26Image_GXI",nac:gx.falseFn};t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"char",len:40,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERGUID",fmt:0,gxz:"ZV21UserGUID",gxold:"OV21UserGUID",gxvar:"AV21UserGUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21UserGUID=n)},v2z:function(n){n!==undefined&&(gx.O.ZV21UserGUID=n)},v2c:function(){gx.fn.setControlValue("vUSERGUID",gx.O.AV21UserGUID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV21UserGUID=this.val())},val:function(){return gx.fn.getControlValue("vUSERGUID")},nac:gx.falseFn};this.declareDomainHdlr(24,function(){});t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSERNAMESPACE",fmt:0,gxz:"ZV22UserNameSpace",gxold:"OV22UserNameSpace",gxvar:"AV22UserNameSpace",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV22UserNameSpace=n)},v2z:function(n){n!==undefined&&(gx.O.ZV22UserNameSpace=n)},v2c:function(){gx.fn.setControlValue("vUSERNAMESPACE",gx.O.AV22UserNameSpace,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV22UserNameSpace=this.val())},val:function(){return gx.fn.getControlValue("vUSERNAMESPACE")},nac:gx.falseFn};this.declareDomainHdlr(29,function(){});t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,lvl:0,type:"char",len:60,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:"e12382_client",evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAUTHENTICATIONTYPENAME",fmt:0,gxz:"ZV5AuthenticationTypeName",gxold:"OV5AuthenticationTypeName",gxvar:"AV5AuthenticationTypeName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV5AuthenticationTypeName=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5AuthenticationTypeName=n)},v2c:function(){gx.fn.setComboBoxValue("vAUTHENTICATIONTYPENAME",gx.O.AV5AuthenticationTypeName);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV5AuthenticationTypeName=this.val())},val:function(){return gx.fn.getControlValue("vAUTHENTICATIONTYPENAME")},nac:gx.falseFn};this.declareDomainHdlr(34,function(){});t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Name=n)},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV18Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV18Name=this.val())},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};this.declareDomainHdlr(39,function(){});t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"",grid:0};t[44]={id:44,lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEMAIL",fmt:0,gxz:"ZV9EMail",gxold:"OV9EMail",gxvar:"AV9EMail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9EMail=n)},v2z:function(n){n!==undefined&&(gx.O.ZV9EMail=n)},v2c:function(){gx.fn.setControlValue("vEMAIL",gx.O.AV9EMail,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV9EMail=this.val())},val:function(){return gx.fn.getControlValue("vEMAIL")},nac:gx.falseFn};this.declareDomainHdlr(44,function(){});t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"",grid:0};t[49]={id:49,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vEXTERNALID",fmt:0,gxz:"ZV11ExternalId",gxold:"OV11ExternalId",gxvar:"AV11ExternalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11ExternalId=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11ExternalId=n)},v2c:function(){gx.fn.setControlValue("vEXTERNALID",gx.O.AV11ExternalId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV11ExternalId=this.val())},val:function(){return gx.fn.getControlValue("vEXTERNALID")},nac:gx.falseFn};this.declareDomainHdlr(49,function(){});this.AV26Image_GXI="";this.AV14Image="";this.ZV14Image="";this.OV14Image="";this.AV21UserGUID="";this.ZV21UserGUID="";this.OV21UserGUID="";this.AV22UserNameSpace="";this.ZV22UserNameSpace="";this.OV22UserNameSpace="";this.AV5AuthenticationTypeName="";this.ZV5AuthenticationTypeName="";this.OV5AuthenticationTypeName="";this.AV18Name="";this.ZV18Name="";this.OV18Name="";this.AV9EMail="";this.ZV9EMail="";this.OV9EMail="";this.AV11ExternalId="";this.ZV11ExternalId="";this.OV11ExternalId="";this.AV14Image="";this.AV21UserGUID="";this.AV22UserNameSpace="";this.AV5AuthenticationTypeName="";this.AV18Name="";this.AV9EMail="";this.AV11ExternalId="";this.AV16Language="";this.Events={e12382_client:["VAUTHENTICATIONTYPENAME.ISVALID",!0],e14382_client:["ENTER",!0],e15382_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"AV16Language",fld:"vLANGUAGE",pic:"",hsh:!0}],[]];this.EvtParms["VAUTHENTICATIONTYPENAME.ISVALID"]=[[{av:"AV16Language",fld:"vLANGUAGE",pic:"",hsh:!0},{ctrl:"vAUTHENTICATIONTYPENAME"},{av:"AV5AuthenticationTypeName",fld:"vAUTHENTICATIONTYPENAME",pic:""}],[]];this.EvtParms.ENTER=[[],[]];this.setVCMap("AV16Language","vLANGUAGE",0,"char",3,0);this.Initialize()});gx.setExecutableComponent("gam_userdata")
gx.evt.autoSkip=!1;gx.define("gam_securitypolicyentry",!1,function(){this.ServerClass="gam_securitypolicyentry";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_securitypolicyentry.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Allowmultipleconcurrentwebsessions=function(){return this.validCliEvt("Validv_Allowmultipleconcurrentwebsessions",0,function(){try{var n=gx.util.balloon.getNew("vALLOWMULTIPLECONCURRENTWEBSESSIONS");if(this.AnyError=0,!(this.AV5AllowMultipleConcurrentWebSessions==1||this.AV5AllowMultipleConcurrentWebSessions==2||this.AV5AllowMultipleConcurrentWebSessions==3))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Allow Multiple Concurrent Web Sessions"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s122_client=function(){this.createWebComponent("Wcmessages","GAM_Messages",[])};this.e120a1_client=function(){return this.clearMessages(),this.call("gam_securitypolicyentry.aspx",["DLT",this.AV9Id],null,["Mode","Id"]),this.refreshOutputs([{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e110a1_client=function(){return this.clearMessages(),this.call("gam_securitypolicyentry.aspx",["UPD",this.AV9Id],null,["Mode","Id"]),this.refreshOutputs([{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e180a1_client=function(){return this.clearMessages(),this.call("gam_wwsecuritypolicies.aspx",[],null,[]),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e140a2_client=function(){return this.executeServerEvent("'CONFIRM'",!1,null,!1,!1)};this.e150a2_client=function(){return this.executeServerEvent("'CANCEL'",!1,null,!1,!1)};this.e160a2_client=function(){return this.executeServerEvent("'COPYSECPOL'",!0,null,!1,!1)};this.e190a2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e200a2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,144,145,146,147,148,149,150,151,152,153];this.GXLastCtrlId=153;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_HEADERENTRY",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_HEADERENTRY_TBLBACKCONTAINER",grid:0};n[12]={id:12,fld:"GAM_HEADERENTRY_TBLBACK",grid:0,evt:"e180a1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"GAM_HEADERENTRY_IMGBACK",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"GAM_HEADERENTRY_TXTBACK",format:0,grid:0,ctrltype:"textblock"};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"GAM_HEADERENTRY_TABLETITLEACTIONS",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"GAM_HEADERENTRY_TITLE",format:0,grid:0,ctrltype:"textblock"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"GAM_HEADERENTRY_TXTSTATUS",format:0,grid:0,ctrltype:"textblock"};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"GAM_HEADERENTRY_TBLTOOLBARS",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",format:0,grid:0,ctrltype:"textblock"};n[31]={id:31,fld:"GAM_HEADERENTRY_BUTTONSTOOLBAR_INNER",grid:0};n[32]={id:32,fld:"BUTTONEDIT",format:0,grid:0,evt:"e110a1_client",ctrltype:"textblock"};n[33]={id:33,fld:"BUTTONDELETE",format:0,grid:0,evt:"e120a1_client",ctrltype:"textblock"};n[34]={id:34,fld:"BTNCOPYSECPOL",format:0,grid:0,evt:"e160a2_client",ctrltype:"textblock"};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"GAM_HEADERENTRY_MENUTABLE",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"",grid:0};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"GAM_DATACARD",grid:0};n[41]={id:41,fld:"",grid:0};n[42]={id:42,fld:"",grid:0};n[43]={id:43,fld:"GAM_DATACARD_TABLEGENERALTITLE",grid:0};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"GAM_DATACARD_TBTITLEGENERAL",format:0,grid:0,ctrltype:"textblock"};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"",grid:0};n[49]={id:49,fld:"GAM_DATACARD_TABLEDATAGENERAL",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"",grid:0};n[53]={id:53,fld:"",grid:0};n[54]={id:54,lvl:0,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",fmt:0,gxz:"ZV9Id",gxold:"OV9Id",gxvar:"AV9Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV9Id=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV9Id=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vID",gx.O.AV9Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV9Id=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vID",gx.thousandSeparator)},nac:gx.falseFn};this.declareDomainHdlr(54,function(){});n[55]={id:55,fld:"",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,lvl:0,type:"char",len:32,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vGUID",fmt:0,gxz:"ZV8GUID",gxold:"OV8GUID",gxvar:"AV8GUID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV8GUID=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8GUID=n)},v2c:function(){gx.fn.setControlValue("vGUID",gx.O.AV8GUID,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV8GUID=this.val())},val:function(){return gx.fn.getControlValue("vGUID")},nac:gx.falseFn};n[60]={id:60,fld:"",grid:0};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,lvl:0,type:"char",len:254,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV16Name",gxold:"OV16Name",gxvar:"AV16Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV16Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Name=n)},v2c:function(){gx.fn.setControlValue("vNAME",gx.O.AV16Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV16Name=this.val())},val:function(){return gx.fn.getControlValue("vNAME")},nac:gx.falseFn};this.declareDomainHdlr(64,function(){});n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"GROUPONLYWEB",grid:0};n[68]={id:68,fld:"GROUPONLYWEBTABLE1",grid:0};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[73]={id:73,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Allowmultipleconcurrentwebsessions,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vALLOWMULTIPLECONCURRENTWEBSESSIONS",fmt:0,gxz:"ZV5AllowMultipleConcurrentWebSessions",gxold:"OV5AllowMultipleConcurrentWebSessions",gxvar:"AV5AllowMultipleConcurrentWebSessions",ucs:[],op:[73],ip:[73],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV5AllowMultipleConcurrentWebSessions=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV5AllowMultipleConcurrentWebSessions=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",gx.O.AV5AllowMultipleConcurrentWebSessions);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV5AllowMultipleConcurrentWebSessions=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vALLOWMULTIPLECONCURRENTWEBSESSIONS",gx.thousandSeparator)},nac:gx.falseFn};this.declareDomainHdlr(73,function(){});n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vWEBSESSIONTIMEOUT",fmt:0,gxz:"ZV21WebSessionTimeOut",gxold:"OV21WebSessionTimeOut",gxvar:"AV21WebSessionTimeOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV21WebSessionTimeOut=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV21WebSessionTimeOut=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vWEBSESSIONTIMEOUT",gx.O.AV21WebSessionTimeOut,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV21WebSessionTimeOut=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vWEBSESSIONTIMEOUT",gx.thousandSeparator)},nac:gx.falseFn};n[79]={id:79,fld:"",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"",grid:0};n[82]={id:82,fld:"",grid:0};n[83]={id:83,fld:"GROUPREST",grid:0};n[84]={id:84,fld:"GROUPRESTTABLE1",grid:0};n[85]={id:85,fld:"",grid:0};n[86]={id:86,fld:"",grid:0};n[87]={id:87,fld:"",grid:0};n[88]={id:88,fld:"",grid:0};n[89]={id:89,lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTHTOKENEXPIRE",fmt:0,gxz:"ZV17OauthTokenExpire",gxold:"OV17OauthTokenExpire",gxvar:"AV17OauthTokenExpire",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17OauthTokenExpire=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV17OauthTokenExpire=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENEXPIRE",gx.O.AV17OauthTokenExpire,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV17OauthTokenExpire=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENEXPIRE",gx.thousandSeparator)},nac:gx.falseFn};n[90]={id:90,fld:"",grid:0};n[91]={id:91,fld:"",grid:0};n[92]={id:92,fld:"",grid:0};n[93]={id:93,fld:"",grid:0};n[94]={id:94,lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vOAUTHTOKENMAXIMUMRENOVATIONS",fmt:0,gxz:"ZV18OauthTokenMaximumRenovations",gxold:"OV18OauthTokenMaximumRenovations",gxvar:"AV18OauthTokenMaximumRenovations",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18OauthTokenMaximumRenovations=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV18OauthTokenMaximumRenovations=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vOAUTHTOKENMAXIMUMRENOVATIONS",gx.O.AV18OauthTokenMaximumRenovations,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV18OauthTokenMaximumRenovations=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vOAUTHTOKENMAXIMUMRENOVATIONS",gx.thousandSeparator)},nac:gx.falseFn};n[95]={id:95,fld:"",grid:0};n[96]={id:96,fld:"STENCIL1",grid:0};n[97]={id:97,fld:"",grid:0};n[98]={id:98,fld:"",grid:0};n[99]={id:99,fld:"STENCIL1_TABLEGENERALTITLE",grid:0};n[100]={id:100,fld:"",grid:0};n[101]={id:101,fld:"",grid:0};n[102]={id:102,fld:"STENCIL1_TBTITLEGENERAL",format:0,grid:0,ctrltype:"textblock"};n[103]={id:103,fld:"",grid:0};n[104]={id:104,fld:"",grid:0};n[105]={id:105,fld:"STENCIL1_TABLEDATAGENERAL",grid:0};n[106]={id:106,fld:"",grid:0};n[107]={id:107,fld:"",grid:0};n[108]={id:108,fld:"",grid:0};n[109]={id:109,fld:"",grid:0};n[110]={id:110,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERIODCHANGEPASSWORD",fmt:0,gxz:"ZV19PeriodChangePassword",gxold:"OV19PeriodChangePassword",gxvar:"AV19PeriodChangePassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19PeriodChangePassword=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV19PeriodChangePassword=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPERIODCHANGEPASSWORD",gx.O.AV19PeriodChangePassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV19PeriodChangePassword=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPERIODCHANGEPASSWORD",gx.thousandSeparator)},nac:gx.falseFn};n[111]={id:111,fld:"",grid:0};n[112]={id:112,fld:"",grid:0};n[113]={id:113,fld:"",grid:0};n[114]={id:114,fld:"",grid:0};n[115]={id:115,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMTIMETOCHANGEPASSWORDS",fmt:0,gxz:"ZV14MinimumTimeToChangePasswords",gxold:"OV14MinimumTimeToChangePasswords",gxvar:"AV14MinimumTimeToChangePasswords",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV14MinimumTimeToChangePasswords=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV14MinimumTimeToChangePasswords=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMINIMUMTIMETOCHANGEPASSWORDS",gx.O.AV14MinimumTimeToChangePasswords,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV14MinimumTimeToChangePasswords=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMINIMUMTIMETOCHANGEPASSWORDS",gx.thousandSeparator)},nac:gx.falseFn};n[116]={id:116,fld:"",grid:0};n[117]={id:117,fld:"",grid:0};n[118]={id:118,fld:"",grid:0};n[119]={id:119,fld:"",grid:0};n[120]={id:120,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMLENGTHPASSWORD",fmt:0,gxz:"ZV11MinimumLengthPassword",gxold:"OV11MinimumLengthPassword",gxvar:"AV11MinimumLengthPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11MinimumLengthPassword=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11MinimumLengthPassword=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMINIMUMLENGTHPASSWORD",gx.O.AV11MinimumLengthPassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11MinimumLengthPassword=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMINIMUMLENGTHPASSWORD",gx.thousandSeparator)},nac:gx.falseFn};n[121]={id:121,fld:"",grid:0};n[122]={id:122,fld:"",grid:0};n[123]={id:123,fld:"",grid:0};n[124]={id:124,fld:"",grid:0};n[125]={id:125,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMNUMERICALCHARACTERPASSWORD",fmt:0,gxz:"ZV12MinimumNumericalCharacterPassword",gxold:"OV12MinimumNumericalCharacterPassword",gxvar:"AV12MinimumNumericalCharacterPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12MinimumNumericalCharacterPassword=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12MinimumNumericalCharacterPassword=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMINIMUMNUMERICALCHARACTERPASSWORD",gx.O.AV12MinimumNumericalCharacterPassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12MinimumNumericalCharacterPassword=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMINIMUMNUMERICALCHARACTERPASSWORD",gx.thousandSeparator)},nac:gx.falseFn};n[126]={id:126,fld:"",grid:0};n[127]={id:127,fld:"",grid:0};n[128]={id:128,fld:"",grid:0};n[129]={id:129,fld:"",grid:0};n[130]={id:130,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMUPPERCASECHARACTERSPASSWORD",fmt:0,gxz:"ZV15MinimumUpperCaseCharactersPassword",gxold:"OV15MinimumUpperCaseCharactersPassword",gxvar:"AV15MinimumUpperCaseCharactersPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV15MinimumUpperCaseCharactersPassword=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV15MinimumUpperCaseCharactersPassword=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",gx.O.AV15MinimumUpperCaseCharactersPassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV15MinimumUpperCaseCharactersPassword=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMINIMUMUPPERCASECHARACTERSPASSWORD",gx.thousandSeparator)},nac:gx.falseFn};n[131]={id:131,fld:"",grid:0};n[132]={id:132,fld:"",grid:0};n[133]={id:133,fld:"",grid:0};n[134]={id:134,fld:"",grid:0};n[135]={id:135,lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMINIMUMSPECIALCHARACTERSPASSWORD",fmt:0,gxz:"ZV13MinimumSpecialCharactersPassword",gxold:"OV13MinimumSpecialCharactersPassword",gxvar:"AV13MinimumSpecialCharactersPassword",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13MinimumSpecialCharactersPassword=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13MinimumSpecialCharactersPassword=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMINIMUMSPECIALCHARACTERSPASSWORD",gx.O.AV13MinimumSpecialCharactersPassword,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13MinimumSpecialCharactersPassword=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMINIMUMSPECIALCHARACTERSPASSWORD",gx.thousandSeparator)},nac:gx.falseFn};n[136]={id:136,fld:"",grid:0};n[137]={id:137,fld:"",grid:0};n[138]={id:138,fld:"",grid:0};n[139]={id:139,fld:"",grid:0};n[140]={id:140,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMAXIMUMPASSWORDHISTORYENTRIES",fmt:0,gxz:"ZV10MaximumPasswordHistoryEntries",gxold:"OV10MaximumPasswordHistoryEntries",gxvar:"AV10MaximumPasswordHistoryEntries",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10MaximumPasswordHistoryEntries=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10MaximumPasswordHistoryEntries=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vMAXIMUMPASSWORDHISTORYENTRIES",gx.O.AV10MaximumPasswordHistoryEntries,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10MaximumPasswordHistoryEntries=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMAXIMUMPASSWORDHISTORYENTRIES",gx.thousandSeparator)},nac:gx.falseFn};n[141]={id:141,fld:"",grid:0};n[142]={id:142,fld:"",grid:0};n[144]={id:144,fld:"",grid:0};n[145]={id:145,fld:"",grid:0};n[146]={id:146,fld:"GAM_FOOTERENTRY",grid:0};n[147]={id:147,fld:"",grid:0};n[148]={id:148,fld:"",grid:0};n[149]={id:149,fld:"GAM_FOOTERENTRY_TABLEBUTTONS",grid:0};n[150]={id:150,fld:"",grid:0};n[151]={id:151,fld:"GAM_FOOTERENTRY_BTNCANCEL",grid:0,evt:"e150a2_client"};n[152]={id:152,fld:"",grid:0};n[153]={id:153,fld:"GAM_FOOTERENTRY_BTNCONFIRM",grid:0,evt:"e140a2_client"};this.AV9Id=0;this.ZV9Id=0;this.OV9Id=0;this.AV8GUID="";this.ZV8GUID="";this.OV8GUID="";this.AV16Name="";this.ZV16Name="";this.OV16Name="";this.AV5AllowMultipleConcurrentWebSessions=0;this.ZV5AllowMultipleConcurrentWebSessions=0;this.OV5AllowMultipleConcurrentWebSessions=0;this.AV21WebSessionTimeOut=0;this.ZV21WebSessionTimeOut=0;this.OV21WebSessionTimeOut=0;this.AV17OauthTokenExpire=0;this.ZV17OauthTokenExpire=0;this.OV17OauthTokenExpire=0;this.AV18OauthTokenMaximumRenovations=0;this.ZV18OauthTokenMaximumRenovations=0;this.OV18OauthTokenMaximumRenovations=0;this.AV19PeriodChangePassword=0;this.ZV19PeriodChangePassword=0;this.OV19PeriodChangePassword=0;this.AV14MinimumTimeToChangePasswords=0;this.ZV14MinimumTimeToChangePasswords=0;this.OV14MinimumTimeToChangePasswords=0;this.AV11MinimumLengthPassword=0;this.ZV11MinimumLengthPassword=0;this.OV11MinimumLengthPassword=0;this.AV12MinimumNumericalCharacterPassword=0;this.ZV12MinimumNumericalCharacterPassword=0;this.OV12MinimumNumericalCharacterPassword=0;this.AV15MinimumUpperCaseCharactersPassword=0;this.ZV15MinimumUpperCaseCharactersPassword=0;this.OV15MinimumUpperCaseCharactersPassword=0;this.AV13MinimumSpecialCharactersPassword=0;this.ZV13MinimumSpecialCharactersPassword=0;this.OV13MinimumSpecialCharactersPassword=0;this.AV10MaximumPasswordHistoryEntries=0;this.ZV10MaximumPasswordHistoryEntries=0;this.OV10MaximumPasswordHistoryEntries=0;this.AV9Id=0;this.AV8GUID="";this.AV16Name="";this.AV5AllowMultipleConcurrentWebSessions=0;this.AV21WebSessionTimeOut=0;this.AV17OauthTokenExpire=0;this.AV18OauthTokenMaximumRenovations=0;this.AV19PeriodChangePassword=0;this.AV14MinimumTimeToChangePasswords=0;this.AV11MinimumLengthPassword=0;this.AV12MinimumNumericalCharacterPassword=0;this.AV15MinimumUpperCaseCharactersPassword=0;this.AV13MinimumSpecialCharactersPassword=0;this.AV10MaximumPasswordHistoryEntries=0;this.Gx_mode="";this.Events={e140a2_client:["'CONFIRM'",!0],e150a2_client:["'CANCEL'",!0],e160a2_client:["'COPYSECPOL'",!0],e190a2_client:["ENTER",!0],e200a2_client:["CANCEL",!0],e120a1_client:["'DELETE'",!1],e110a1_client:["'EDIT'",!1],e180a1_client:["GAM_HEADERENTRY_TBLBACK.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[]];this.EvtParms["'CONFIRM'"]=[[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0},{av:"AV16Name",fld:"vNAME",pic:""},{ctrl:"vALLOWMULTIPLECONCURRENTWEBSESSIONS"},{av:"AV5AllowMultipleConcurrentWebSessions",fld:"vALLOWMULTIPLECONCURRENTWEBSESSIONS",pic:"9"},{av:"AV21WebSessionTimeOut",fld:"vWEBSESSIONTIMEOUT",pic:"ZZZ9"},{av:"AV17OauthTokenExpire",fld:"vOAUTHTOKENEXPIRE",pic:"ZZZZZ9"},{av:"AV18OauthTokenMaximumRenovations",fld:"vOAUTHTOKENMAXIMUMRENOVATIONS",pic:"ZZ9"},{av:"AV19PeriodChangePassword",fld:"vPERIODCHANGEPASSWORD",pic:"ZZZ9"},{av:"AV14MinimumTimeToChangePasswords",fld:"vMINIMUMTIMETOCHANGEPASSWORDS",pic:"ZZZ9"},{av:"AV11MinimumLengthPassword",fld:"vMINIMUMLENGTHPASSWORD",pic:"Z9"},{av:"AV12MinimumNumericalCharacterPassword",fld:"vMINIMUMNUMERICALCHARACTERPASSWORD",pic:"Z9"},{av:"AV15MinimumUpperCaseCharactersPassword",fld:"vMINIMUMUPPERCASECHARACTERSPASSWORD",pic:"Z9"},{av:"AV13MinimumSpecialCharactersPassword",fld:"vMINIMUMSPECIALCHARACTERSPASSWORD",pic:"Z9"},{av:"AV10MaximumPasswordHistoryEntries",fld:"vMAXIMUMPASSWORDHISTORYENTRIES",pic:"ZZZ9"}],[{ctrl:"WCMESSAGES"}]];this.EvtParms["'DELETE'"]=[[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}],[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}]];this.EvtParms["'EDIT'"]=[[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}],[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}]];this.EvtParms["'CANCEL'"]=[[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!",hsh:!0}],[]];this.EvtParms["GAM_HEADERENTRY_TBLBACK.CLICK"]=[[],[]];this.EvtParms["'COPYSECPOL'"]=[[{av:"AV9Id",fld:"vID",pic:"ZZZZZZZZZZZ9"}],[{ctrl:"WCMESSAGES"}]];this.EvtParms.ENTER=[[],[]];this.EvtParms.VALIDV_ALLOWMULTIPLECONCURRENTWEBSESSIONS=[[],[]];this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize();this.setComponent({id:"WCMESSAGES",GXClass:null,Prefix:"W0143",lvl:1})});gx.wi(function(){gx.createParentObj(this.gam_securitypolicyentry)})
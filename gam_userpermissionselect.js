gx.evt.autoSkip=!1;gx.define("gam_userpermissionselect",!1,function(){var n,t;this.ServerClass="gam_userpermissionselect";this.PackageName="GeneXus.Security.Backend";this.ServerFullClass="gam_userpermissionselect.aspx";this.setObjectType("web");this.setAjaxSecurity(!1);this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GAMDesignSystem";this.SetStandaloneVars=function(){this.AV28UserId=gx.fn.getControlValue("vUSERID");this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",gx.thousandSeparator);this.AV17isOK=gx.fn.getControlValue("vISOK");this.AV28UserId=gx.fn.getControlValue("vUSERID");this.AV7ApplicationId=gx.fn.getIntegerValue("vAPPLICATIONID",gx.thousandSeparator);this.subGridww_Recordcount=gx.fn.getIntegerValue("subGridww_Recordcount",gx.thousandSeparator)};this.Validv_Access=function(){var n=gx.fn.currentGridRowImpl(25);return this.validCliEvt("Validv_Access",25,function(){try{var n=gx.util.balloon.getNew("vACCESS");if(this.AnyError=0,!(gx.text.compare(this.AV5Access,"A")==0||gx.text.compare(this.AV5Access,"D")==0||gx.text.compare(this.AV5Access,"R")==0))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Access"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Permissionaccesstype=function(){return this.validCliEvt("Validv_Permissionaccesstype",0,function(){try{var n=gx.util.balloon.getNew("vPERMISSIONACCESSTYPE");if(this.AnyError=0,!(gx.text.compare(this.AV20PermissionAccessType,"A")==0||gx.text.compare(this.AV20PermissionAccessType,"D")==0||gx.text.compare(this.AV20PermissionAccessType,"R")==0||gx.text.compare("",this.AV20PermissionAccessType)==0))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Permission Access Type"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Boolenfilter=function(){return this.validCliEvt("Validv_Boolenfilter",0,function(){try{var n=gx.util.balloon.getNew("vBOOLENFILTER");if(this.AnyError=0,!(gx.text.compare(this.AV8BoolenFilter,"A")==0||gx.text.compare(this.AV8BoolenFilter,"T")==0||gx.text.compare(this.AV8BoolenFilter,"F")==0))try{n.setError(gx.text.format(gx.getMessage("GXSPC_OutOfRange"),gx.getMessage("Boolen Filter"),"","","","","","","",""));this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){this.createWebComponent("Wcmessages","GAM_Messages",[])};this.e212t1_client=function(){return this.clearMessages(),this.refreshOutputs([]),this.refreshGrid("Gridww"),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e132t1_client=function(){return this.clearMessages(),this.refreshOutputs([]),this.refreshGrid("Gridww"),this.refreshOutputs([]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e122t1_client=function(){return this.clearMessages(),this.AV20PermissionAccessType="",this.AV8BoolenFilter="",this.refreshOutputs([{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""}]),this.refreshGrid("Gridww"),this.refreshOutputs([{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e112t1_client=function(){return this.clearMessages(),gx.text.compare(gx.fn.getCtrlProperty("GAM_FILTERSWW","Class"),"filters-container")==0?(gx.fn.setCtrlProperty("GAM_FILTERSWW","Class",gx.text.format("%1 %2","filters-container","filters-container-floating--visible","","","","","","","")),gx.fn.setCtrlProperty("GAM_HEADERWW_TOGGLEFILTERS","Tooltiptext",gx.getMessage("Hide filters"))):(gx.fn.setCtrlProperty("GAM_FILTERSWW","Class","filters-container"),gx.fn.setCtrlProperty("GAM_HEADERWW_TOGGLEFILTERS","Tooltiptext",gx.getMessage("Show filters"))),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("GAM_FILTERSWW","Class")',ctrl:"GAM_FILTERSWW",prop:"Class"},{av:'gx.fn.getCtrlProperty("GAM_HEADERWW_TOGGLEFILTERS","Tooltiptext")',ctrl:"GAM_HEADERWW_TOGGLEFILTERS",prop:"Tooltiptext"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e182t1_client=function(){return this.clearMessages(),this.AV10CurrentPage=gx.num.trunc(1,0),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.refreshGrid("Gridww"),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e192t1_client=function(){return this.clearMessages(),this.AV10CurrentPage=gx.num.trunc(this.AV10CurrentPage-1,0),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.refreshGrid("Gridww"),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e202t1_client=function(){return this.clearMessages(),this.AV10CurrentPage=gx.num.trunc(this.AV10CurrentPage+1,0),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.refreshGrid("Gridww"),this.refreshOutputs([{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]),this.OnClientEventEnd(),gx.$.Deferred().resolve()};this.e142t2_client=function(){return this.executeServerEvent("'CONFIRM'",!1,null,!1,!1)};this.e152t2_client=function(){return this.executeServerEvent("'CANCEL'",!1,null,!1,!1)};this.e222t2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e232t2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35,36,37,40,42,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,74,75,76,77,78,79,80,81,82,83];this.GXLastCtrlId=83;this.GridwwContainer=new gx.grid.grid(this,2,"WbpLvl2",25,"Gridww","Gridww","GridwwContainer",this.CmpContext,this.IsMasterPage,"gam_userpermissionselect",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px",0,"px",gx.getMessage("GXM_newrow"),!1,!1,!0,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridwwContainer;t.addCheckBox("Select",26,"vSELECT",gx.getMessage("Select"),"","Select","boolean","true","false",null,!0,!1,60,"px","column");t.addSingleLineEdit("Name",27,"vNAME",gx.getMessage("Permission name"),"","Name","char",0,"px",254,80,"left",null,[],"Name","Name",!0,0,!1,!1,"Attribute",0,"column");t.addSingleLineEdit("Dsc",28,"vDSC",gx.getMessage("Description"),"","Dsc","char",0,"px",254,80,"left",null,[],"Dsc","Dsc",!0,0,!1,!1,"Attribute",0,"column column-optional");t.addComboBox("Access",29,"vACCESS",gx.getMessage("Permission options"),"Access","char",null,0,!0,!1,150,"px","column column-optional");t.addSingleLineEdit("Appid",30,"vAPPID",gx.getMessage("Key Numeric Long"),"","AppId","int",0,"px",12,12,"right",null,[],"Appid","AppId",!1,0,!1,!1,"Attribute",0,"");t.addSingleLineEdit("Id",31,"vID",gx.getMessage("GUID"),"","Id","char",0,"px",40,40,"left",null,[],"Id","Id",!1,0,!1,!1,"Attribute",0,"");this.GridwwContainer.emptyText=gx.getMessage("No results found.");this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GAM_HEADERWW",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"GAM_HEADERWW_TABLEACTIONS",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"GAM_HEADERWW_TITLE",format:0,grid:0,ctrltype:"textblock"};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"GAM_HEADERWW_ADDNEW",grid:0,evt:"e242t1_client"};n[14]={id:14,fld:"CELLSEARCH",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"svchar",len:100,dec:60,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:"e212t1_client",evt_cvcing:null,rgrid:[],fld:"vSEARCH",fmt:0,gxz:"ZV25Search",gxold:"OV25Search",gxvar:"AV25Search",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV25Search=n)},v2z:function(n){n!==undefined&&(gx.O.ZV25Search=n)},v2c:function(){gx.fn.setControlValue("vSEARCH",gx.O.AV25Search,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV25Search=this.val())},val:function(){return gx.fn.getControlValue("vSEARCH")},nac:gx.falseFn};this.declareDomainHdlr(16,function(){});n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GAM_HEADERWW_TOGGLEFILTERS",grid:0,evt:"e112t1_client"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"SECTIONGRID",grid:0};n[22]={id:22,fld:"GRIDTABLE",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[26]={id:26,lvl:2,type:"boolean",len:4,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vSELECT",fmt:0,gxz:"ZV27Select",gxold:"OV27Select",gxvar:"AV27Select",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV27Select=gx.lang.booleanValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV27Select=gx.lang.booleanValue(n))},v2c:function(n){gx.fn.setGridCheckBoxValue("vSELECT",n||gx.fn.currentGridRowImpl(25),gx.O.AV27Select,!0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV27Select=gx.lang.booleanValue(this.val(n)))},val:function(n){return gx.fn.getGridControlValue("vSELECT",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:["true","false"]};n[27]={id:27,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNAME",fmt:0,gxz:"ZV18Name",gxold:"OV18Name",gxvar:"AV18Name",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV18Name=n)},v2z:function(n){n!==undefined&&(gx.O.ZV18Name=n)},v2c:function(n){gx.fn.setGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(25),gx.O.AV18Name,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV18Name=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vNAME",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"char",len:254,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDSC",fmt:0,gxz:"ZV11Dsc",gxold:"OV11Dsc",gxvar:"AV11Dsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV11Dsc=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11Dsc=n)},v2c:function(n){gx.fn.setGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(25),gx.O.AV11Dsc,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV11Dsc=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDSC",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"char",len:1,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:this.Validv_Access,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vACCESS",fmt:0,gxz:"ZV5Access",gxold:"OV5Access",gxvar:"AV5Access",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5Access=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5Access=n)},v2c:function(n){gx.fn.setGridComboBoxValue("vACCESS",n||gx.fn.currentGridRowImpl(25),gx.O.AV5Access);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV5Access=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vACCESS",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vAPPID",fmt:0,gxz:"ZV6AppId",gxold:"OV6AppId",gxvar:"AV6AppId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV6AppId=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV6AppId=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("vAPPID",n||gx.fn.currentGridRowImpl(25),gx.O.AV6AppId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV6AppId=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("vAPPID",n||gx.fn.currentGridRowImpl(25),gx.thousandSeparator)},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"char",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:25,gxgrid:this.GridwwContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vID",fmt:0,gxz:"ZV16Id",gxold:"OV16Id",gxvar:"AV16Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV16Id=n)},v2z:function(n){n!==undefined&&(gx.O.ZV16Id=n)},v2c:function(n){gx.fn.setGridControlValue("vID",n||gx.fn.currentGridRowImpl(25),gx.O.AV16Id,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV16Id=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vID",n||gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"GAM_PAGINGWW",grid:0};n[35]={id:35,fld:"",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"GAM_PAGINGWW_TBLPAGINGBUTTONS",grid:0};n[40]={id:40,fld:"GAM_PAGINGWW_BTNFIRST",grid:0,evt:"e182t1_client"};n[42]={id:42,fld:"GAM_PAGINGWW_BTNPREVIOUS",grid:0,evt:"e192t1_client"};n[44]={id:44,fld:"GAM_PAGINGWW_BTNNEXT",grid:0,evt:"e202t1_client"};n[45]={id:45,fld:"",grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCURRENTPAGE",fmt:0,gxz:"ZV10CurrentPage",gxold:"OV10CurrentPage",gxvar:"AV10CurrentPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10CurrentPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV10CurrentPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vCURRENTPAGE",gx.O.AV10CurrentPage,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10CurrentPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vCURRENTPAGE",gx.thousandSeparator)},nac:gx.falseFn};n[49]={id:49,fld:"GAM_FILTERSWW",grid:0};n[50]={id:50,fld:"",grid:0};n[51]={id:51,fld:"",grid:0};n[52]={id:52,fld:"GAM_FILTERSWW_HIDEFILTERS",grid:0,evt:"e112t1_client"};n[53]={id:53,fld:"",grid:0};n[54]={id:54,fld:"",grid:0};n[55]={id:55,fld:"GAM_FILTERSWW_TABLEFILTERS",grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};n[58]={id:58,fld:"",grid:0};n[59]={id:59,fld:"",grid:0};n[60]={id:60,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissionaccesstype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPERMISSIONACCESSTYPE",fmt:0,gxz:"ZV20PermissionAccessType",gxold:"OV20PermissionAccessType",gxvar:"AV20PermissionAccessType",ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV20PermissionAccessType=n)},v2z:function(n){n!==undefined&&(gx.O.ZV20PermissionAccessType=n)},v2c:function(){gx.fn.setComboBoxValue("vPERMISSIONACCESSTYPE",gx.O.AV20PermissionAccessType);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV20PermissionAccessType=this.val())},val:function(){return gx.fn.getControlValue("vPERMISSIONACCESSTYPE")},nac:gx.falseFn};this.declareDomainHdlr(60,function(){});n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Boolenfilter,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBOOLENFILTER",fmt:0,gxz:"ZV8BoolenFilter",gxold:"OV8BoolenFilter",gxvar:"AV8BoolenFilter",ucs:[],op:[65],ip:[65],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.AV8BoolenFilter=n)},v2z:function(n){n!==undefined&&(gx.O.ZV8BoolenFilter=n)},v2c:function(){gx.fn.setComboBoxValue("vBOOLENFILTER",gx.O.AV8BoolenFilter);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV8BoolenFilter=this.val())},val:function(){return gx.fn.getControlValue("vBOOLENFILTER")},nac:gx.falseFn};this.declareDomainHdlr(65,function(){});n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,fld:"GAM_FILTERSWW_CLEARFILTERS",grid:0,evt:"e122t1_client"};n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"GAM_FILTERSWW_APPLY",grid:0,evt:"e132t1_client"};n[71]={id:71,fld:"",grid:0};n[72]={id:72,fld:"",grid:0};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,fld:"GAM_FOOTERPOPUP",grid:0};n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"",grid:0};n[79]={id:79,fld:"GAM_FOOTERPOPUP_TABLEBUTTONS",grid:0};n[80]={id:80,fld:"",grid:0};n[81]={id:81,fld:"GAM_FOOTERPOPUP_BTNCANCEL",grid:0,evt:"e152t2_client"};n[82]={id:82,fld:"",grid:0};n[83]={id:83,fld:"GAM_FOOTERPOPUP_BTNCONFIRM",grid:0,evt:"e142t2_client"};this.AV25Search="";this.ZV25Search="";this.OV25Search="";this.ZV27Select=!1;this.OV27Select=!1;this.ZV18Name="";this.OV18Name="";this.ZV11Dsc="";this.OV11Dsc="";this.ZV5Access="";this.OV5Access="";this.ZV6AppId=0;this.OV6AppId=0;this.ZV16Id="";this.OV16Id="";this.AV10CurrentPage=0;this.ZV10CurrentPage=0;this.OV10CurrentPage=0;this.AV20PermissionAccessType="";this.ZV20PermissionAccessType="";this.OV20PermissionAccessType="";this.AV8BoolenFilter="";this.ZV8BoolenFilter="";this.OV8BoolenFilter="";this.AV25Search="";this.AV10CurrentPage=0;this.AV20PermissionAccessType="";this.AV8BoolenFilter="";this.AV28UserId="";this.AV7ApplicationId=0;this.AV27Select=!1;this.AV18Name="";this.AV11Dsc="";this.AV5Access="";this.AV6AppId=0;this.AV16Id="";this.AV17isOK=!1;this.Events={e142t2_client:["'CONFIRM'",!0],e152t2_client:["'CANCEL'",!0],e222t2_client:["ENTER",!0],e232t2_client:["CANCEL",!0],e212t1_client:["VSEARCH.CONTROLVALUECHANGED",!1],e132t1_client:["'APPLY'",!1],e122t1_client:["'CLEARFILTERS'",!1],e112t1_client:["'HIDE'",!1],e182t1_client:["'FIRST'",!1],e192t1_client:["'PREVIOUS'",!1],e202t1_client:["'NEXT'",!1]};this.EvtParms.REFRESH=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0}],[]];this.EvtParms["GRIDWW.LOAD"]=[[{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[{ctrl:"FORM",prop:"Caption"},{av:"AV16Id",fld:"vID",pic:"",hsh:!0},{av:"AV18Name",fld:"vNAME",pic:""},{av:"AV11Dsc",fld:"vDSC",pic:""},{ctrl:"GAM_PAGINGWW_BTNNEXT",prop:"Enabled"},{ctrl:"GAM_PAGINGWW_BTNFIRST",prop:"Enabled"},{ctrl:"GAM_PAGINGWW_BTNPREVIOUS",prop:"Enabled"}]];this.EvtParms["'CONFIRM'"]=[[{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV27Select",fld:"vSELECT",grid:25,pic:""},{av:"GRIDWW_nFirstRecordOnPage"},{av:"nRC_GXsfl_25",ctrl:"GRIDWW",grid:25,prop:"GridRC",grid:25},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV16Id",fld:"vID",grid:25,pic:"",hsh:!0},{av:"AV5Access",fld:"vACCESS",grid:25,pic:""},{av:"AV17isOK",fld:"vISOK",pic:""}],[{av:"AV17isOK",fld:"vISOK",pic:""},{ctrl:"WCMESSAGES"}]];this.EvtParms["'CANCEL'"]=[[{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0}],[]];this.EvtParms["VSEARCH.CONTROLVALUECHANGED"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[]];this.EvtParms["'APPLY'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[]];this.EvtParms["'CLEARFILTERS'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""}]];this.EvtParms["'HIDE'"]=[[{av:'gx.fn.getCtrlProperty("GAM_FILTERSWW","Class")',ctrl:"GAM_FILTERSWW",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("GAM_FILTERSWW","Class")',ctrl:"GAM_FILTERSWW",prop:"Class"},{av:'gx.fn.getCtrlProperty("GAM_HEADERWW_TOGGLEFILTERS","Tooltiptext")',ctrl:"GAM_HEADERWW_TOGGLEFILTERS",prop:"Tooltiptext"}]];this.EvtParms["'FIRST'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]];this.EvtParms["'PREVIOUS'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]];this.EvtParms["'NEXT'"]=[[{av:"GRIDWW_nFirstRecordOnPage"},{av:"GRIDWW_nEOF"},{av:"AV28UserId",fld:"vUSERID",pic:"",hsh:!0},{av:"AV7ApplicationId",fld:"vAPPLICATIONID",pic:"ZZZZZZZZZZZ9",hsh:!0},{av:"AV25Search",fld:"vSEARCH",pic:""},{ctrl:"vPERMISSIONACCESSTYPE"},{av:"AV20PermissionAccessType",fld:"vPERMISSIONACCESSTYPE",pic:""},{ctrl:"vBOOLENFILTER"},{av:"AV8BoolenFilter",fld:"vBOOLENFILTER",pic:""},{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}],[{av:"AV10CurrentPage",fld:"vCURRENTPAGE",pic:"ZZZ9"}]];this.EvtParms.ENTER=[[],[]];this.EvtParms.VALIDV_PERMISSIONACCESSTYPE=[[],[]];this.EvtParms.VALIDV_BOOLENFILTER=[[],[]];this.EvtParms.VALIDV_ACCESS=[[{ctrl:"vACCESS"},{av:"AV5Access",fld:"vACCESS",pic:""}],[{ctrl:"vACCESS"},{av:"AV5Access",fld:"vACCESS",pic:""}]];this.setVCMap("AV28UserId","vUSERID",0,"char",40,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("AV17isOK","vISOK",0,"boolean",4,0);this.setVCMap("AV28UserId","vUSERID",0,"char",40,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);this.setVCMap("AV28UserId","vUSERID",0,"char",40,0);this.setVCMap("AV7ApplicationId","vAPPLICATIONID",0,"int",12,0);t.addRefreshingVar({rfrVar:"AV28UserId"});t.addRefreshingVar({rfrVar:"AV7ApplicationId"});t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[60]);t.addRefreshingVar(this.GXValidFnc[65]);t.addRefreshingVar(this.GXValidFnc[48]);t.addRefreshingParm({rfrVar:"AV28UserId"});t.addRefreshingParm({rfrVar:"AV7ApplicationId"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[60]);t.addRefreshingParm(this.GXValidFnc[65]);t.addRefreshingParm(this.GXValidFnc[48]);this.Initialize();this.setComponent({id:"WCMESSAGES",GXClass:null,Prefix:"W0073",lvl:1})});gx.wi(function(){gx.createParentObj(this.gam_userpermissionselect)})
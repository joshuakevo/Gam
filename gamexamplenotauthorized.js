gx.evt.autoSkip=!1;gx.define("gamexamplenotauthorized",!1,function(){this.ServerClass="gamexamplenotauthorized";this.PackageName="GeneXus.Programs";this.ServerFullClass="gamexamplenotauthorized.aspx";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.DSO="GamDemo";this.SetStandaloneVars=function(){};this.e11052_client=function(){return this.executeServerEvent("'LOGIN'",!1,null,!1,!1)};this.e12052_client=function(){return this.executeServerEvent("'GO BACK'",!1,null,!1,!1)};this.e14052_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15052_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];this.GXLastCtrlId=20;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLECONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"IMAGE1",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TBFORMTITLE",format:0,grid:0,ctrltype:"textblock"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TEXTBLOCK1",format:0,grid:0,ctrltype:"textblock"};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"GOBACK",grid:0,evt:"e12052_client"};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"LOGIN",grid:0,evt:"e11052_client"};this.Events={e11052_client:["'LOGIN'",!0],e12052_client:["'GO BACK'",!0],e14052_client:["ENTER",!0],e15052_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms["'LOGIN'"]=[[],[]];this.EvtParms["'GO BACK'"]=[[],[]];this.EvtParms.ENTER=[[],[]];this.Initialize()});gx.wi(function(){gx.createParentObj(this.gamexamplenotauthorized)})
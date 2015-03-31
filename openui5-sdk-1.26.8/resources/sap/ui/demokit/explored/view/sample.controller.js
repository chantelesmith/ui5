/*!
 * @copyright@
 */
sap.ui.controller("sap.ui.demokit.explored.view.sample",{onInit:function(){this.router=sap.ui.core.UIComponent.getRouterFor(this);this.router.attachRoutePatternMatched(this.onRouteMatched,this)},onRouteMatched:function(e){if(e.getParameter("name")!=="sample"){return}this._sId=e.getParameter("arguments").id;var s=sap.ui.demokit.explored.data.samples[this._sId];if(!s){this.router.myNavToWithoutHash("sap.ui.demokit.explored.view.notFound","XML",false,{path:this._sId});return}var p=this.getView().byId("page");var h=sap.ui.core.routing.History.getInstance();var P=h.getPreviousHash();var S=sap.ui.Device.system.phone||!!P;p.setShowNavButton(S);p.setTitle("Sample: "+s.name);try{var c=this._createComponent()}catch(a){p.removeAllContent();p.addContent(new sap.m.Text({text:"Error while loading the sample: "+a}));return}var C=(this._oComp.getMetadata())?this._oComp.getMetadata().getConfig():null;var o=C&&C.sample||{};if(o.iframe){c=this._createIframe(c,o.iframe)}var b=!!o.stretch;var H=b?"100%":null;p.setEnableScrolling(!b);if(c.setHeight){c.setHeight(H)}p.removeAllContent();p.addContent(c);p.scrollTo(0)},_createIframe:function(i,I){var s,S=this._sId,r=/[^\.]*/,a=/.html$/;if(typeof I==="string"){var b=I.replace(a,"");if(!r.test(b)){jQuery.sap.log.error("Don't put a . in your iframe sample url.");return}var s=jQuery.sap.getModulePath(S+"."+b,".html")}else{jQuery.sap.log.error("no iframe source was provided");return}var h=new sap.ui.core.HTML({content:'<iframe src="'+s+'" id="sampleFrame"></iframe>'}).addEventDelegate({onAfterRendering:function(){h.$().on("load",function(){i.placeAt("body")})}});return h},_createComponent:function(){var c='sampleComp-'+this._sId;var C=this._sId;this._oComp=sap.ui.component(c);if(!this._oComp){this._oComp=sap.ui.getCore().createComponent({id:c,name:C})}return new sap.ui.core.ComponentContainer({component:this._oComp})},onNavBack:function(e){this.router.myNavBack("home",{})},onNavToCode:function(e){this.router.navTo("code",{id:this._sId},false)}});

(this["webpackJsonpgasp-v4"]=this["webpackJsonpgasp-v4"]||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},22:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),l=n(14),r=n.n(l),c=(n(22),n(23),n(6)),i=n(10),o=n(9),u=n(8),h=n(7),d=n(35),p=n(36),m=n(32),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{src:"https://cdn.discordapp.com/attachments/702617973365407838/729414271783403580/PlHPRQ4.png"}))}}]),n}(s.a.Component),f=(s.a.Component,s.a.Component,s.a.Component,n(33)),v=n(34),E=n(37),y=n(38),S=n(15),k=(n(27),"13Qr1i85_XXrflbOD-4IYbEA8do_G-K_nD86VW1GDSig"),b="AIzaSyDGLVvBm5uNAMlLEV1q-h9Gpu1misQg6I8",C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updatePinglist=function(){return fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(k,"/values/").concat("'Master List'!B2:F","?key=").concat(b))},a.updateDoNotPings=function(){return fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(k,"/values/").concat("'Do not ping'!A:A","?key=").concat(b))},a.generatePinglist=function(){a.updatePinglist().then((function(e){return e.json()})).then((function(e){var t=e.values;a.updateDoNotPings().then((function(e){return e.json()})).then((function(e){var n=[],s=[],l=a.props.keywords.slice(1),r=a.state;e.values.forEach((function(e){s.push(e[0])})),t.forEach((function(e,t){var a=e[0].trim(),c=e[1].split(", "),i=e[2].split(", "),o=e[3].split(", "),u=null,h=[];if(e.length>4&&(u=e[4].split(", ")),!(s.indexOf(a)>=0)){if(r.reselling)if(null===u);else if(u.indexOf("resell")>=0)return;r.keywordsChecked.forEach((function(e){(null===u||u.indexOf(l[e])<0)&&h.push(l[e])})),null!==u&&0==h.length||c.indexOf(r.selectedBreed)<0||i.indexOf(r.sasSelected)<0||(o.indexOf("no preference")<0?h.some((function(e){return o.indexOf(e)>=0}))&&n.push(a):n.push(a))}})),n.length>0?a.setState({currentPinglist:"@"+n.join(" @")}):a.setState({currentPinglist:"No users to ping, please change your criteria or come back later!"})})).catch()})).catch()},a.onKeywordClick=function(e){var t=a.state.keywordsChecked.indexOf(e),n=Array.from(a.state.keywordsChecked);t<0?n.push(e):n.splice(t,1),a.setState({keywordsChecked:Array.from(n)}),a.setState({isKeywordSelected:Array.from(n).length},(function(){a.checkForButtonActivation()}))},a.state={keywordsChecked:[],isBreedSelected:!1,isSasSelected:!1,isResellSelected:!1,isKeywordSelected:0,selectedBreed:"",sasSelected:"",isReselling:!1,disableGen:!0,currentPinglist:"",kwSearchQuery:""},a.onBreedChange=a.onBreedChange.bind(Object(i.a)(a)),a.onSasChange=a.onSasChange.bind(Object(i.a)(a)),a.onResellChange=a.onResellChange.bind(Object(i.a)(a)),a.onSearchInput=a.onSearchInput.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"onBreedChange",value:function(e){var t=this;this.setState({selectedBreed:e.target.value}),this.setState({isBreedSelected:!0},(function(){t.checkForButtonActivation()}))}},{key:"onSasChange",value:function(e){var t=this;this.setState({sasSelected:e.target.value}),this.setState({isSasSelected:!0},(function(){t.checkForButtonActivation()}))}},{key:"onSearchInput",value:function(e){this.setState({kwSearchQuery:e.target.value})}},{key:"onResellChange",value:function(e){var t=this;1==e.target.value?this.setState({reselling:!0}):2==e.target.value&&this.setState({reselling:!1}),this.setState({isResellSelected:!0},(function(){t.checkForButtonActivation()}))}},{key:"printKeyword",value:function(e,t){var n=this;return""==this.state.kwSearchQuery||e.includes(this.state.kwSearchQuery)?s.a.createElement(m.a,null,s.a.createElement(f.a,{className:"keywordButton",outline:!0,onClick:function(){return n.onKeywordClick(t)},active:this.state.keywordsChecked.includes(t),color:"info"},e)):s.a.createElement("span",null)}},{key:"checkForButtonActivation",value:function(){this.setState({disableGen:!(this.state.isBreedSelected&&this.state.isSasSelected&&this.state.isResellSelected&&this.state.keywordsChecked.length>0)})}},{key:"render",value:function(){var e=this;return s.a.createElement(v.a,null,s.a.createElement("em",null,this.props.translation.gasperror),s.a.createElement(d.a,null,s.a.createElement(p.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"3"},s.a.createElement(m.a,null,s.a.createElement(E.a,null,s.a.createElement(y.a,{type:"select",defaultValue:"0",name:"breedGenderSelect",id:"breedGenderSelect",onChange:this.onBreedChange},s.a.createElement("option",{disabled:!0,value:"0"},this.props.translation.gaspbg),this.props.breedlist.slice(1).map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}))))),s.a.createElement(m.a,null,s.a.createElement(E.a,null,s.a.createElement(y.a,{type:"select",defaultValue:"0",name:"typeSelect",id:"typeSelect",onChange:this.onSasChange},s.a.createElement("option",{value:"0",disabled:!0},this.props.translation.gaspt),s.a.createElement("option",{value:"Accents"},"Accents"),s.a.createElement("option",{value:"Skins"},"Skins"),s.a.createElement("option",{value:"Skincents"},"Skincents")))),s.a.createElement(m.a,null,s.a.createElement(E.a,null,s.a.createElement(y.a,{type:"select",defaultValue:"0",name:"typeSelect",id:"typeSelect",onChange:this.onResellChange},s.a.createElement("option",{value:"0",disabled:!0},this.props.translation.gaspresell),s.a.createElement("option",{value:"1"},"Yes"),s.a.createElement("option",{value:"2"},"No"))))),s.a.createElement("h4",null,this.props.keywords[0],":"),s.a.createElement(p.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{className:"keywordContainer"},s.a.createElement(p.a,{xs:"1",sm:"1",md:"1",lg:"1",xl:"2"},this.props.keywords.slice(1).map((function(t,n){return e.printKeyword(t,n)})))))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(p.a,null,s.a.createElement(m.a,null,s.a.createElement(f.a,{disabled:this.state.disableGen,color:"warning",onClick:function(){return e.generatePinglist()},size:"lg"},this.props.translation.gaspgen)," ",s.a.createElement(S.CopyToClipboard,{text:this.state.currentPinglist},s.a.createElement(f.a,{color:"success",size:"lg"},this.props.translation.copy)))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(p.a,null,s.a.createElement(m.a,null,s.a.createElement("em",null,this.props.translation.gaspconsent))),s.a.createElement(p.a,null,s.a.createElement(m.a,null,s.a.createElement(E.a,null,s.a.createElement(y.a,{type:"textarea",name:"text",id:"exampleText",value:this.state.currentPinglist}))))))}}]),n}(s.a.Component),w=(n(30),"1eX0iu8pFksHIqu66dFc3HjsGwLg6c8ZZ9Q-67MuAQPk"),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={breedList:{},keywordList:{},rulesList:{},langList:[],pureRules:[],currentTranslation:0},a.getSheetValues=function(e,t,n){var a=n;return null!==t&&(a="'"+t+"'!"+a),fetch("https://sheets.googleapis.com/v4/spreadsheets/".concat(e,"/values/").concat(a,"?key=").concat("AIzaSyDGLVvBm5uNAMlLEV1q-h9Gpu1misQg6I8"))},a.onLanguageChange=a.onLanguageChange.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getSheetValues(w,"Breed","A1:A").then((function(e){return e.json()})).then((function(t){var n=t.values,a=[];n.forEach((function(e){a.push(e[0])})),e.setState({breedList:a})})).catch(),this.getSheetValues(w,"Keywords","A1:A").then((function(e){return e.json()})).then((function(t){var n=t.values,a=[];n.forEach((function(e){a.push(e[0])})),e.setState({keywordList:a})})).catch(),this.getSheetValues("1Kh5Fd40b-dXtLtCPNTuLHd_fwVC8I9Dvl3fO5cWmogA","Gasp Translations","A1:X").then((function(e){return e.json()})).then((function(t){var n=[],a=[],s=[];t.values.forEach((function(e,t){for(var l=1;l<e.length;l++)!1===Array.isArray(n[l-1])&&(n[l-1]=[]),n[l-1][e[0]]=e[l],"native"==e[0]&&a.push(e[l]),e[0].startsWith("gasp_")&&1===l&&s.push(e[l])})),e.setState({pureRules:s},(function(){e.setState({rulesList:n}),e.setState({langList:a})}))})).catch()}}]),Object(o.a)(n,[{key:"onLanguageChange",value:function(e){this.setState({currentTranslation:e.target.value})}},{key:"printRule",value:function(e,t){return"-"==e?s.a.createElement("span",null):s.a.createElement("span",{className:"rulePosition",dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){var e=this,t=0!==Object.entries(this.state.breedList).length,n=0!==Object.entries(this.state.keywordList).length,a=0!==Object.entries(this.state.rulesList).length,l=0!==Object.entries(this.state.langList).length;return t&&n&&a&&l?s.a.createElement("div",{className:"App"},s.a.createElement(d.a,{fluid:!0,className:"HeaderRow"},s.a.createElement(p.a,null,s.a.createElement(m.a,{className:"HeaderContent"},s.a.createElement(g,null)))),s.a.createElement(d.a,{fluid:!0},s.a.createElement(p.a,{xs:"1",sm:"1",md:"2"},s.a.createElement(m.a,{className:"RulesCol"},this.state.pureRules.map((function(t,n){return e.printRule(t,n)}))),s.a.createElement(m.a,{className:"PinglistCol"},s.a.createElement("h3",null,"Pings"),s.a.createElement(C,{breedlist:this.state.breedList,keywords:this.state.keywordList,translation:this.state.rulesList[this.state.currentTranslation]}))))):s.a.createElement("span",null,"Loading . . .")}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5c2940a5.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1211:function(e,t,n){var content=n(1954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("c11c400a",content,!0,{sourceMap:!1})},1953:function(e,t,n){"use strict";n(1211)},1954:function(e,t,n){var r=n(86)(!1);r.push([e.i,".settings-redirection-modal[data-v-b6a958ac]{top:80%}.settings-redirection-modal[data-v-b6a958ac]  .aligner>.content{background-color:rgba(48,57,63,.95)}@media screen and (max-width:767.9px){.settings-redirection-modal[data-v-b6a958ac]  .aligner>.content{position:fixed;left:.5rem!important;right:1rem;width:96%;top:4.2rem}}@media screen and (max-width:768px){.settings-redirection-modal[data-v-b6a958ac]  .notch:before{z-index:0}}.settings-redirection-modal[data-v-b6a958ac]  .notch{opacity:.95;width:0;height:0;border-color:transparent transparent #30393f;border-style:solid;border-width:0 1rem 1rem;top:-1rem}.settings-redirection-modal[data-v-b6a958ac]  .notch:before{display:none}.popup-content[data-v-b6a958ac]{position:relative;width:100%;color:#f3f9fd}@media screen and (min-width:768px){.popup-content[data-v-b6a958ac]{width:21rem}}.ui-button.min-width[data-v-b6a958ac]{min-width:7rem}.close-button[data-v-b6a958ac]{position:absolute;right:0;top:0;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;color:#f3f9fd}.close-button[data-v-b6a958ac]:hover{cursor:pointer}",""]),e.exports=r},1955:function(e,t,n){"use strict";var r=n(971),o=n.n(r);t.default=o.a},1956:function(e,t,n){"use strict";var r=n(972),o=n.n(r);t.default=o.a},1957:function(e,t,n){"use strict";var r=n(973),o=n.n(r);t.default=o.a},1958:function(e,t,n){"use strict";var r=n(974),o=n.n(r);t.default=o.a},1971:function(e,t,n){"use strict";var r={props:{align:{type:String,default:"center"}},computed:{classes:function(){return["align-"+this.align]}},methods:{close:function(){document.activeElement&&document.activeElement.blur&&document.activeElement.blur()}}},o=(n(966),n(48)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"x-dropdown",class:e.classes,on:{mousedown:function(e){e.stopPropagation(),e.preventDefault()}}},[n("div",{staticClass:"notch"}),e._v(" "),n("div",{staticClass:"aligner"},[n("div",{staticClass:"content"},[e._t("title"),e._v(" "),e._t("content")],2)])])}),[],!1,null,"01e85eab",null);t.a=component.exports},2100:function(e,t,n){"use strict";n.r(t);n(18),n(17),n(16),n(3),n(22),n(13),n(23);var r=n(0),o=n(4),c=(n(5),n(27),n(72)),l=n(432),d=n(411),f=n(1971),h=n(984),v=n(460),m=n(458);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:{UIIcon:l.a,UIButton:d.a,UIPopup:f.a,SettingsRegionDropdown:h.a},mixins:[v.a,m.a],computed:O(O({},Object(c.c)({activePopup:"ui/activePopup",detectedRegion:"locale/detectedRegion"})),{},{popupIsActive:function(){return this.filesAreLoaded&&this.activePopup&&"settings-redirection"===this.activePopup.name},defaultLanguage:function(){return this.$locale.getDefaultLanguageOfRegion(this.detectedRegion)},preferredInternationalLanguage:function(){var e=this.$locale.getInternationalLanguagesOfRegion(this.detectedRegion);return this.$locale.getPreferredLanguageOf(e)},preferredNativeLanguage:function(){var e=this.$locale.getNativeLanguagesOfRegion(this.detectedRegion);return this.$locale.getPreferredLanguageOf(e)},preferredLanguage:function(){if(this.detectedRegion)return this.preferredNativeLanguage||this.preferredInternationalLanguage||this.defaultLanguage}}),watch:{preferredLanguage:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchTranslationsForLanguage(n.preferredLanguage);case 2:case"end":return e.stop()}}),e)})))()},popupIsActive:function(e){var t=this;!0===e&&this.$nextTick((function(){return t.$refs.dropdown.$children[0].$refs.toggleButton.focus()}))}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.preferredLanguage){t.next=3;break}return t.next=3,e.fetchTranslationsForLanguage(e.preferredLanguage);case 3:case"end":return t.stop()}}),t)})))()},methods:O(O({},Object(c.b)({hidePopup:"ui/hidePopup"})),{},{setSelectedRegion:function(e){this.setRegion(e);var code=e.code,t=this.$locale.getDefaultLanguageOfRegion(code),n=this.$locale.getNativeLanguagesOfRegion(code),r=this.$locale.getPreferredLanguageOf(n)||t;this.setLanguage(r),this.saveSettings(),this.hidePopup()},confirmSettings:function(){this.setRegion(this.detectedRegion),this.setLanguage(this.preferredLanguage),this.saveSettings(),this.hidePopup()}})},_=(n(1953),n(48)),C=n(1955),x=n(1956),L=n(1957),j=n(1958),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.popupIsActive?n("UIPopup",{staticClass:"settings-redirection-modal",attrs:{align:"center",role:"dialog","aria-labelledby":"description","data-prevent-popup-blur":"true"},nativeOn:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[n("template",{slot:"content"},[n("div",{staticClass:"popup-content"},[n("p",{staticClass:"small mr-3",attrs:{id:"description"}},[e._v("\n                "+e._s(e.translateIn(e.preferredLanguage,"popupText",{currentRegion:e.translateIn(e.preferredLanguage,"country."+e.$locale.regio.toUpperCase())}))+"\n            ")]),e._v(" "),n("div",{staticClass:"d-flex align-items-stretch"},[n("div",{staticClass:"flex-grow-1 mr-1"},[n("SettingsRegionDropdown",{ref:"dropdown",attrs:{"default-item":e.detectedRegion,options:e.regionSet},on:{change:e.setSelectedRegion}})],1),e._v(" "),n("div",[n("UIButton",{staticClass:"min-width",attrs:{variant:"primary","data-prevent-popup-blur":"true"},on:{click:e.confirmSettings}},[e._v(e._s(e.translateIn(e.preferredLanguage,"button.confirm")))])],1)])]),e._v(" "),n("div",{staticClass:"close-button",attrs:{role:"button","aria-label":"close"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.hidePopup.apply(null,arguments)}}},[n("UIIcon",{attrs:{name:["fal","times"],alt:"cancel"}})],1)])],2):e._e()}),[],!1,null,"b6a958ac",null);"function"==typeof C.default&&Object(C.default)(component),"function"==typeof x.default&&Object(x.default)(component),"function"==typeof L.default&&Object(L.default)(component),"function"==typeof j.default&&Object(j.default)(component);t.default=component.exports},458:function(e,t,n){"use strict";var r=n(28),o=n(0),c=(n(160),n(5),n(219));t.a={extends:c.a,data:function(){return{filesByLanguage:{},filesAreLoaded:!1}},methods:{fetchTranslationsForLanguage:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.filesAreLoaded=!1,n.next=3,t.$api.translations.getAllTranslations(e);case 3:r=n.sent,t.$set(t.filesByLanguage,e,r),t.filesAreLoaded=!0,t.$nextTick((function(){t.$forceUpdate()}));case 7:case"end":return n.stop()}}),n)})))()},fetchTranslationsForKey:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,l,d,f,h,v,m,y;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.language,c=e.key,t.filesAreLoaded=!1,n.next=4,t.$api.translations.getTranslationsByKey({language:o,key:c});case 4:for(l=n.sent,t.filesByLanguage[o]||t.$set(t.filesByLanguage,o,{}),t.filesByLanguage[o][c]||t.$set(t.filesByLanguage[o],c,{}),d=c,f=0,h=Object.entries(l);f<h.length;f++)v=Object(r.a)(h[f],2),m=v[0],y=v[1],t.$set(t.filesByLanguage[o][d],m,y);t.filesAreLoaded=!0,t.$nextTick((function(){t.$forceUpdate()}));case 11:case"end":return n.stop()}}),n)})))()}}}},460:function(e,t,n){"use strict";n(18),n(17),n(22),n(23);var r=n(0),o=n(28),c=n(95),l=n(4),d=(n(5),n(73),n(3),n(56),n(29),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(32),n(30),n(16),n(13),n(27),n(223),n(9),n(160),n(35),n(44),n(14),n(33),n(72)),f=n(458);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a={mixins:[f.a],data:function(){return{selectedRegion:this.$locale.regio,selectedLanguage:this.$locale.language,selectedCurrencyCode:this.$store.getters["currency/getSelectedCurrency"],regionByContinent:null}},computed:v(v({},Object(d.c)({allCurrencies:"locale/currencies",supportedCurrencies:"currency/getSupportedCurrencies",currencyCode:"currency/getSelectedCurrency"})),{},{selectedCurrency:{get:function(){var e=this;return this.allCurrencies.find((function(t){return t.code.toLowerCase()===e.selectedCurrencyCode.toLowerCase()}))},set:function(e){this.selectedCurrencyCode=e.code}},allLanguages:function(){return this.$nuxt.$locale.getLanguagesOfRegion(this.selectedRegion)},allRegions:function(){return Array.from(new Set(this.$locale.locales.map((function(e){return e.regio}))))},allTargetRegions:function(){return Array.from(new Set(this.$locale.locales.filter((function(e){return e.target})).map((function(e){return e.regio}))))},allContinents:function(){var e=this,t=[];this.$locale.locales.forEach((function(n){if(void 0!==n.continent||null!==n.continent){var r=t.find((function(t){return t.name===e.getShorthandContinent(n.continent)}));r||(r={name:e.getShorthandContinent(n.continent),regions:[]},t.push(r));var o=t.find((function(e){return e.name===r.name}));o.regions.push(n.regio),o.regions=Object(c.a)(new Set(o.regions))}}));var n=["eu","na","sa","oc","as","af",""];t.sort((function(e,t){return n.indexOf(e.name)-n.indexOf(t.name)}));var r=t.filter((function(t){return!!t.regions.find((function(t){return t===e.$locale.regio}))&&t}))[0];return t=t.filter((function(e){return e.name!==r.name})),(t=[r].concat(Object(c.a)(t))).forEach((function(e){return e.regions.sort()})),t},groupedRegions:function(){return this.$locale.locales.reduce((function(e,t){var n=e[t.continent];return e[t.continent]=(n||new Set).add(t.region),e}),{})},selectedRegionSetItem:function(){var e=this;return this.selectedRegion?this.regionSet.find((function(t){return t.code===e.selectedRegion.toLowerCase()})):this.defaultRegionSetItem},defaultRegionSetItem:function(){var e=this;return this.regionSet.find((function(t){return t.code===e.$locale.regio.toLowerCase()}))},regionSet:function(){var e=this,t=Array.from(new Set(this.$locale.locales.map((function(e){return e.regio.toLowerCase()})))),n=[];return t.forEach((function(t){n.push(e.$locale.locales.find((function(e){return e.regio.toUpperCase()===t.toUpperCase()})))})),n.map((function(t){var title,n="country.".concat(t.regio.toUpperCase());return title=e.preferredLanguage?e.translateIn(e.preferredLanguage,n):e.translate(n),{code:t.regio.toLowerCase(),title:title,tags:t.tags}}))},selectedCurrencySetItem:function(){var e=this;return this.selectedCurrencyCode?this.currencySet.find((function(t){return t.code===e.selectedCurrencyCode})):this.defaultCurrencySetItem},defaultCurrencySetItem:function(){var e=this;return this.currencySet.find((function(t){return t.code===e.$locale.currency}))},currencySet:function(){var e=this,t=this.$locale.getNativeLanguagesOfRegion(this.selectedRegion),n={};return t.forEach((function(t){if(e.filesByLanguage[t])for(var r=0,c=Object.entries(e.filesByLanguage[t]);r<c.length;r++){var l=Object(o.a)(c[r],2),d=l[0],f=l[1];n[d]||(n[d]=[]),n[d].push(f)}})),this.$locale.currencies.filter((function(t){return e.supportedCurrencies.includes(t.code)})).map((function(t){return v(v({},t),{},{name:e.filesByLanguage[e.selectedLanguage]?e.filesByLanguage[e.selectedLanguage][t.code]:"",tags:n[t.code]})}))}}),methods:v(v({},Object(d.b)({setCurrencyAction:"currency/setCurrency"})),{},{getShorthandContinent:function(e){switch(e){case"Europe":return"eu";case"North America":return"na";case"South America":return"sa";case"Oceania":return"oc";case"Asia":return"as";case"Africa":return"af";default:return""}},groupByContinents:function(){var e,t=(e="continent",function(t){return t.reduce((function(t,n){var r=n[e];return t[r]=(t[r]||[]).concat(n),t}),{})});this.regionByContinent=t(this.allRegions)},setRegion:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.code?this.selectedRegion=e.code:this.selectedRegion=e,this.allLanguages.includes(this.selectedLanguage)||(this.selectedLanguage=this.allLanguages[0]),this.selectedCurrency=this.$locale.getCurrencyOfRegion(this.selectedRegion)[0],t&&this.saveSettings()},setLanguage:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.selectedLanguage=e,t&&this.saveSettings()},setCurrency:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.selectedCurrencyCode=e.code,t&&this.saveSettings()},saveSettings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===(n=v({},e.$locale.reverseRoute(e.$route)))&&console.error("Undefined reversed settings route"),t.next=4,e.$api.currency.getCurrencyFormat(e.selectedLanguage+"-"+e.selectedRegion.toUpperCase(),e.selectedCurrencyCode);case 4:r=t.sent,e.$store.dispatch("currency/setFormatParts",r),e.selectedLanguage!==e.$locale.language||e.selectedRegion.toUpperCase()!==e.$locale.regio?(o=e.$locale.route(v(v({},n),{},{language:e.selectedLanguage,regio:e.selectedRegion,iso:e.selectedLanguage+"-"+e.selectedRegion.toUpperCase()})),e.$router.replace(v(v({},o),{},{query:v(v({},o.query),{},{currency:e.selectedCurrency.code})}))):e.$router.replace(v(v({},e.$route),{},{query:v(v({},e.$route.query),{},{currency:e.selectedCurrency.code})})),e.setCurrencyAction(e.selectedCurrency),e.$store.dispatch("session/setLocale",{region:e.selectedRegion,language:e.selectedLanguage,currency:e.selectedCurrencyCode.toLowerCase()});case 9:case"end":return t.stop()}}),t)})))()}})}},524:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/countries"),delete e.options._Ctor}},525:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/search"),delete e.options._Ctor}},526:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/settings"),delete e.options._Ctor}},527:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("components/settings/SettingsRegionDropdown"),delete e.options._Ctor}},578:function(e,t,n){var content=n(915);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("186c7206",content,!0,{sourceMap:!1})},580:function(e,t,n){var content=n(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("1d1e104d",content,!0,{sourceMap:!1})},914:function(e,t,n){"use strict";n(578)},915:function(e,t,n){var r=n(86)(!1);r.push([e.i,".settings-region-dropdown[data-v-ce2c5104]{color:#212528;text-align:left}",""]),e.exports=r},916:function(e,t,n){"use strict";var r=n(524),o=n.n(r);t.default=o.a},917:function(e,t,n){"use strict";var r=n(525),o=n.n(r);t.default=o.a},918:function(e,t,n){"use strict";var r=n(526),o=n.n(r);t.default=o.a},919:function(e,t,n){"use strict";var r=n(527),o=n.n(r);t.default=o.a},966:function(e,t,n){"use strict";n(580)},967:function(e,t,n){var r=n(86)(!1);r.push([e.i,'.x-dropdown[data-v-01e85eab]{z-index:1;position:absolute;top:100%;left:0;width:100%;height:100%;margin-top:1rem;line-height:normal}.x-dropdown .content[data-v-01e85eab]{position:absolute;padding:1rem;border-radius:3px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3)}.x-dropdown .content .title[data-v-01e85eab]{font-size:1.3rem;margin-top:0;color:#212528;font-weight:700}.x-dropdown.align-center .aligner[data-v-01e85eab]{left:50%}.x-dropdown.align-center .aligner>.content[data-v-01e85eab]{left:-12rem}.x-dropdown.align-right .aligner[data-v-01e85eab],.x-dropdown.align-right .aligner>.content[data-v-01e85eab]{right:0}.x-dropdown.align-center .notch[data-v-01e85eab]{left:25%}.x-dropdown.align-right .notch[data-v-01e85eab]{left:48%}.x-dropdown.align-left .notch[data-v-01e85eab]{left:20%}.x-dropdown.align-left .aligner[data-v-01e85eab]{left:0}.x-dropdown.align-left .aligner>.content[data-v-01e85eab]{left:-50%}.x-dropdown.align-left .aligner>.content .notch[data-v-01e85eab]{left:20%}.x-dropdown .notch[data-v-01e85eab]{position:absolute}.x-dropdown .notch[data-v-01e85eab]:before{content:"";position:absolute;height:1rem;width:1rem;top:-.6rem;left:-.5rem;border-left:1px solid #d7dfe1;border-top:1px solid #d7dfe1;background:#fff;transform:rotate(45deg);z-index:1}',""]),e.exports=r},971:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/countries"),delete e.options._Ctor}},972:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/settings"),delete e.options._Ctor}},973:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("data/buttons"),delete e.options._Ctor}},974:function(e,t){e.exports=function(e){e.options.__i18nFiles=e.options.__i18nFiles||[],e.options.__i18nFiles.push("components/settings/SettingsRedirectionPopup"),delete e.options._Ctor}},984:function(e,t,n){"use strict";var r=n(4),o=(n(73),n(3),n(30),n(18),n(17),n(16),n(22),n(13),n(23),n(2069)),c=n(528),l=n(460),d=n(458);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{UISearchDropdown:o.default,UIFlag:c.a},mixins:[l.a,d.a],props:{defaultItem:{type:String,required:!1},options:{type:Array,required:!0}},data:function(){return{selected:void 0}},computed:{selectedItem:function(){var e=this;return void 0===this.selected?this.items.find((function(t){return t.code===e.defaultItem})):this.selected},items:function(){return this.options.map((function(e){return h(h({},e),{},{value:e.code})}))}},methods:{setRegion:function(e){this.$emit("change",e)},emitBlur:function(e){this.$emit("blur",e)}}},m=(n(914),n(48)),y=n(916),O=n(917),w=n(918),_=n(919),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("UISearchDropdown",{staticClass:"settings-region-dropdown",attrs:{"default-item":e.selectedItem,items:e.items,placeholder:e.translate("search.region"),"search-index":["title","tags"]},on:{selected:e.setRegion},scopedSlots:e._u([{key:"label",fn:function(){return[n("span",{staticClass:"sr-only"},[e._v("\n            "+e._s(e.translate("settings.regio.title"))+"\n        ")])]},proxy:!0},{key:"button-content",fn:function(){return[e.selectedItem?n("span",[n("UIFlag",{staticClass:"mr-2 flag-dropshadow",attrs:{"aria-hidden":"true",code:e.selectedItem.code}}),e._v("\n            "+e._s(e.selectedItem.title)+"\n        ")],1):e._e()]},proxy:!0},{key:"popup-label",fn:function(){return[n("div",[e._v(e._s(e.translate("settings.regio.select")))])]},proxy:!0},{key:"option-content",fn:function(t){var r=t.item;return[n("div",{staticClass:"item"},[n("UIFlag",{staticClass:"mr-2 flag-dropshadow",attrs:{"aria-hidden":"true",code:r.code}}),e._v(" "),n("span",{staticClass:"option-title"},[e._v(e._s(r.title))])],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})}),[],!1,null,"ce2c5104",null);"function"==typeof y.default&&Object(y.default)(component),"function"==typeof O.default&&Object(O.default)(component),"function"==typeof w.default&&Object(w.default)(component),"function"==typeof _.default&&Object(_.default)(component);t.a=component.exports}}]);
//# sourceMappingURL=f315987.js.map
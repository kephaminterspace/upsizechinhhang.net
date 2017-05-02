if (self.CavalryLogger) { CavalryLogger.start_js(["Wihu\/"]); }

__d("ChatPerfEvent",[],(function a(b,c,d,e,f,g){f.exports={ASYNC_REQUEST:"async_request",SIDEBAR_FROM_CLIENT_TTI:"sidebar_from_client_tti",SIDEBAR_FROM_SERVER_TTI:"sidebar_from_server_tti",SIDEBAR_DISPLAY_DONE:"sidebar_display_done",TTI:"tti",CHAT_CONVERSATION_TTI:"chat_conversation_tti",CHAT_INIT_STORES:"chat_init_stores",CHAT_INIT_DATA:"chat_init_data",CHAT_INIT_UI:"chat_init_ui",CHAT_INIT_SOUND:"chat_init_sound",CHAT_DISPLAY_DONE:"chat_display_done"};}),null);
__d("ChatReliabilityEvents",[],(function a(b,c,d,e,f,g){f.exports={ERROR:"error",CHANNEL_DISCONNECT:"channel_disconnect",CHANNEL_CONNECT:"channel_connect",CHANNEL_INIT:"channel_init",CHANNEL_NOCONFIG:"channel_noconfig",CHANNEL_HISTORY_INVALID:"channel_history_invalid",CHANNEL_STALLED:"channel_stalled",MESSAGE_RECEIVED:"msg_received"};}),null);
__d("MercuryParticipantTypes",[],(function a(b,c,d,e,f,g){f.exports={USER:"user",THREAD:"thread",EVENT:"event",PAGE:"page",FRIEND:"friend",FB4C:"fb4c",NON_FRIEND:"non_friend"};}),null);
__d('CallbackManagerController',['ErrorUtils'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$CallbackManagerController1=[];this.$CallbackManagerController2=[undefined];this.$CallbackManagerController3=i;}h.prototype.executeOrEnqueue=function(i,j,k){'use strict';k=k||{};var l=this.$CallbackManagerController4(j,i,k);if(l)return 0;this.$CallbackManagerController2.push({fn:j,request:i,options:k});var m=this.$CallbackManagerController2.length-1;this.$CallbackManagerController1.push(m);return m;};h.prototype.unsubscribe=function(i){'use strict';delete this.$CallbackManagerController2[i];};h.prototype.reset=function(){'use strict';this.$CallbackManagerController2=[];};h.prototype.getRequest=function(i){'use strict';return this.$CallbackManagerController2[i];};h.prototype.runPossibleCallbacks=function(){'use strict';var i=this.$CallbackManagerController1;this.$CallbackManagerController1=[];var j=[];i.forEach(function(k){var l=this.$CallbackManagerController2[k];if(!l)return;if(this.$CallbackManagerController3(l.request,l.options)){j.push(k);}else this.$CallbackManagerController1.push(k);}.bind(this));j.forEach(function(k){var l=this.$CallbackManagerController2[k];delete this.$CallbackManagerController2[k];this.$CallbackManagerController4(l.fn,l.request,l.options);}.bind(this));};h.prototype.$CallbackManagerController4=function(i,j,k){'use strict';var l=this.$CallbackManagerController3(j,k);if(l){var m={ids:j};c('ErrorUtils').applyWithGuard(i,m,l);}return !!l;};f.exports=h;}),null);
__d('KeyedCallbackManager',['CallbackManagerController','ErrorUtils'],(function a(b,c,d,e,f,g){function h(){'use strict';this.$KeyedCallbackManager1={};this.$KeyedCallbackManager2=new (c('CallbackManagerController'))(this.$KeyedCallbackManager3.bind(this));}h.prototype.executeOrEnqueue=function(i,j){'use strict';if(!(i instanceof Array)){var k=i,l=j;i=[i];j=function m(n){l(n[k]);};}i=i.filter(function(m){var n=m!==null&&m!==undefined;if(!n)c('ErrorUtils').applyWithGuard(function(){throw new Error('KeyedCallbackManager.executeOrEnqueue: key '+JSON.stringify(m)+' is invalid');});return n;});return this.$KeyedCallbackManager2.executeOrEnqueue(i,j);};h.prototype.unsubscribe=function(i){'use strict';this.$KeyedCallbackManager2.unsubscribe(i);};h.prototype.reset=function(){'use strict';this.$KeyedCallbackManager2.reset();this.$KeyedCallbackManager1={};};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$KeyedCallbackManager2.getRequest(i),k=[];if(j)k=j.request.filter(function(l){return !this.$KeyedCallbackManager1[l];}.bind(this));return k;};h.prototype.getUnavailableResourcesFromRequest=function(i){'use strict';var j=Array.isArray(i)?i:[i];return j.filter(function(k){if(k!==null&&k!==undefined)return !this.$KeyedCallbackManager1[k];},this);};h.prototype.addResourcesAndExecute=function(i){'use strict';Object.assign(this.$KeyedCallbackManager1,i);this.$KeyedCallbackManager2.runPossibleCallbacks();};h.prototype.setResource=function(i,j){'use strict';this.$KeyedCallbackManager1[i]=j;this.$KeyedCallbackManager2.runPossibleCallbacks();};h.prototype.getResource=function(i){'use strict';return this.$KeyedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$KeyedCallbackManager1;};h.prototype.dumpResources=function(){'use strict';var i={};for(var j in this.$KeyedCallbackManager1){var k=this.$KeyedCallbackManager1[j];if(typeof k==='object')k=babelHelpers['extends']({},k);i[j]=k;}return i;};h.prototype.$KeyedCallbackManager3=function(i){'use strict';var j={};for(var k=0;k<i.length;k++){var l=i[k],m=this.$KeyedCallbackManager1[l];if(typeof m=='undefined')return false;j[l]=m;}return [j];};f.exports=h;}),null);
__d('BaseAsyncLoader',['KeyedCallbackManager','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h={};function i(k,l,m){var n=new (c('KeyedCallbackManager'))(),o=false,p=[];function q(){if(!p.length||o)return;o=true;c('setTimeoutAcrossTransitions')(s,0);}function r(v){o=false;v.forEach(n.unsubscribe.bind(n));q();}function s(){var v={},w=[];p=p.filter(function(y){var z=n.getUnavailableResources(y);if(z.length){z.forEach(function(aa){v[aa]=true;});w.push(y);return true;}return false;});var x=Object.keys(v);if(x.length){m(k,x,w,t.bind(null,w),u.bind(null,w));}else o=false;}function t(v,w){var x=w.payload[l]||w.payload;n.addResourcesAndExecute(x);r(v);}function u(v){r(v);}return {get:function v(w,x){var y=n.executeOrEnqueue(w,x),z=n.getUnavailableResources(y);if(z.length){p.push(y);q();}},getCachedKeys:function v(){return Object.keys(n.getAllResources());},getNow:function v(w){return n.getResource(w)||null;},set:function v(w){n.addResourcesAndExecute(w);}};}function j(k,l){throw new Error('BaseAsyncLoader can\'t be instantiated');}Object.assign(j.prototype,{_getLoader:function k(){if(!h[this._endpoint])h[this._endpoint]=i(this._endpoint,this._type,this.send);return h[this._endpoint];},get:function k(l,m){return this._getLoader().get(l,m);},getCachedKeys:function k(){return this._getLoader().getCachedKeys();},getNow:function k(l){return this._getLoader().getNow(l);},reset:function k(){h[this._endpoint]=null;},set:function k(l){this._getLoader().set(l);}});f.exports=j;}),null);
__d('LogHistory',['CircularBuffer'],(function a(b,c,d,e,f,g){var h=500,i={},j=new (c('CircularBuffer'))(h);function k(s,t,event,u){if(typeof u[0]!=='string'||u.length!==1)return;j.write({date:Date.now(),level:s,category:t,event:event,args:u[0]});}function l(s){'use strict';this.category=s;}l.prototype.debug=function(event){'use strict';for(var s=arguments.length,t=Array(s>1?s-1:0),u=1;u<s;u++)t[u-1]=arguments[u];k('debug',this.category,event,t);return this;};l.prototype.log=function(event){'use strict';for(var s=arguments.length,t=Array(s>1?s-1:0),u=1;u<s;u++)t[u-1]=arguments[u];k('log',this.category,event,t);return this;};l.prototype.warn=function(event){'use strict';for(var s=arguments.length,t=Array(s>1?s-1:0),u=1;u<s;u++)t[u-1]=arguments[u];k('warn',this.category,event,t);return this;};l.prototype.error=function(event){'use strict';for(var s=arguments.length,t=Array(s>1?s-1:0),u=1;u<s;u++)t[u-1]=arguments[u];k('error',this.category,event,t);return this;};function m(s){if(!i[s])i[s]=new l(s);return i[s];}function n(){return j.read();}function o(){j.clear();}function p(s){}function q(s){return s.map(function(t){var u=/\d\d:\d\d:\d\d/.exec(new Date(t.date));return [u&&u[0],t.level,t.category,t.event,t.args].join(' | ');}).join('\n');}var r={MAX:h,getInstance:m,getEntries:n,clearEntries:o,toConsole:p,formatEntries:q};f.exports=r;}),null);
__d('AjaxLoader',['AsyncRequest','BaseAsyncLoader','LogHistory'],(function a(b,c,d,e,f,g){var h=c('LogHistory').getInstance('ajax_loader');function i(j,k){this._endpoint=j;this._type=k;}Object.assign(i.prototype,c('BaseAsyncLoader').prototype);i.prototype.send=function(j,k,l,m,n){new (c('AsyncRequest'))().setURI(j).setData({ids:k}).setMethod('POST').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(o){m(o);}).setErrorHandler(function(o){n();h.error('fetch_error',{error_type:o.errorSummary,error_text:o.errorDescription});}).send();};f.exports=i;}),null);
__d('ChatQuietLinks',['DataStore','DOM','Event','Parent','UserAgent_DEPRECATED','getOrCreateDOMID'],(function a(b,c,d,e,f,g){var h={},i={silenceLinks:function m(n){j(n,this.removeEmptyHrefs.bind(this));},nukeLinks:function m(n){j(n,this.removeAllHrefs.bind(this));},removeEmptyHrefs:function m(n){k(n,function(o){return !o||o==='#';});},removeAllHrefs:function m(n){k(n);}};function j(m,n){var o=!!c('UserAgent_DEPRECATED').chrome(),p=!!c('UserAgent_DEPRECATED').chrome()||c('UserAgent_DEPRECATED').ie()>=9||c('UserAgent_DEPRECATED').firefox()>=4;if(h[c('getOrCreateDOMID')(m)])return;h[c('getOrCreateDOMID')(m)]=true;if(!p)return;if(!o){n&&n(m);return;}c('Event').listen(m,'mouseover',function q(r){var s=c('Parent').byTag(r.getTarget(),'a');if(s){var t=s.getAttribute('href');if(l(t)){c('DataStore').set(s,'stashedHref',s.getAttribute('href'));s.removeAttribute('href');}}});c('Event').listen(m,'mouseout',function q(r){var s=c('Parent').byTag(r.getTarget(),'a'),t=s&&c('DataStore').remove(s,'stashedHref');if(l(t))s.setAttribute('href',t);});c('Event').listen(m,'mousedown',function(q){if(!q.isDefaultRequested())return true;var r=c('Parent').byTag(q.getTarget(),'a'),s=r&&c('DataStore').get(r,'stashedHref');if(l(s))r.setAttribute('href',s);});}function k(m,n){var o=c('DOM').scry(m,'a');if(n)o=o.filter(function(p){return n(p.getAttribute('href'));});o.forEach(function(p){p.removeAttribute('href');if(!p.tabIndex)p.setAttribute('tabindex',0);});}function l(m){return m&&m!=='#';}f.exports=i;}),null);
__d('PresenceUtil',['CurrentUser','randomInt'],(function a(b,c,d,e,f,g){var h=c('randomInt')(0,4294967295)+1;function i(){return h;}function j(){return c('CurrentUser').isLoggedInNow();}f.exports={getSessionID:i,hasUserCookie:j};}),null);
__d('PresencePrivacy',['Arbiter','AsyncRequest','ChannelConstants','CurrentUser','PresencePrivacyInitialData','JSLogger','PresenceUtil'],(function a(b,c,d,e,f,g){var h='/ajax/chat/privacy/settings.php',i='/ajax/chat/privacy/online_policy.php',j='/ajax/chat/privacy/visibility.php',k='friend_visibility',l='visibility',m='online_policy',n=babelHelpers['extends']({},c('PresencePrivacyInitialData').privacyData),o=c('PresencePrivacyInitialData').visibility,p=babelHelpers['extends']({},c('PresencePrivacyInitialData').privacyData),q=o,r=c('PresencePrivacyInitialData').onlinePolicy,s=r,t=[],u=false;function v(){return c('JSLogger').create('blackbird');}var w=Object.assign(new (c('Arbiter'))(),{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1});function x(ja){var ka;for(ka in ja){var la=ja[ka];if(ka==c('CurrentUser').getID()){v().error('set_viewer_visibility');throw new Error("Invalid to set current user's visibility");}switch(la){case w.WHITELISTED:case w.BLACKLISTED:case w.UNLISTED:break;default:v().error('set_invalid_friend_visibility',{id:ka,value:la});throw new Error("Invalid state: "+la);}}for(ka in ja)n[ka]=ja[ka];w.inform('privacy-changed');}function y(ja,ka){var la={};la[ja]=ka;x(la);}function z(ja){switch(ja){case w.ONLINE:case w.OFFLINE:break;default:v().error('set_invalid_visibility',{value:ja});throw new Error("Invalid visibility: "+ja);}o=ja;w.inform('privacy-changed');w.inform('privacy-user-presence-changed');}function aa(ja){switch(ja){case w.ONLINE_TO_WHITELIST:case w.ONLINE_TO_BLACKLIST:break;default:throw new Error("Invalid default online policy: "+ja);}r=ja;w.inform('privacy-user-presence-changed');w.inform('privacy-changed');}function ba(ja,ka){u=true;ja.send();}function ca(ja,ka){t.push({request:ja,data:ka});if(!u){var la=t.shift();ba(la.request,la.data);}}function da(ja,ka){var la=ja.type;if(la===k){w.inform('privacy-availability-changed');for(var ma in ja.settings)p[ma]=ja.settings[ma];}else{if(la===l){q=ja.visibility;}else if(la===m)s=ja.online_policy;w.inform('privacy-user-presence-response');}v().log('set_update_response',{data:ja,response:ka});}function ea(ja,ka){if(o!==q)z(q);if(r!==s)aa(s);Object.assign(n,p);w.inform('privacy-changed');t=[];v().log('set_error_response',{data:ja,response:ka});}function fa(ja){u=false;if(t.length>0){var ka=t.shift();ba(ka.request,ka.data);}}function ga(ja,ka){if(c('PresenceUtil')!=null){var la=ja.getData();la.window_id=c('PresenceUtil').getSessionID();ja.setData(la);}ja.setHandler(da.bind(this,ka)).setErrorHandler(ea.bind(this,ka)).setTransportErrorHandler(ea.bind(this,ka)).setFinallyHandler(fa.bind(this)).setAllowCrossPageTransition(true);return ja;}function ha(ja,ka,la){return ga(new (c('AsyncRequest'))(ja).setData(ka),la);}function ia(ja,ka){var la=ka.obj;if(la.viewer_id!=c('CurrentUser').getID()){v().error('invalid_viewer_for_channel_message',{type:ja,data:ka});throw new Error("Viewer got from the channel is not the real viewer");}if(la.window_id===c('PresenceUtil').getSessionID())return;var ma=la.data;if(la.event=='access_control_entry'){ma.target_ids.forEach(function(oa){y(oa,ma.setting);p[oa]=ma.setting;});}else{if(la.event=='visibility_update'){var na=!!ma.visibility?w.ONLINE:w.OFFLINE;z(na);q=na;}else if(la.event=='online_policy_update'){aa(ma.online_policy);s=ma.online_policy;}w.inform('privacy-user-presence-response');}v().log('channel_message_received',{data:ka.obj});}Object.assign(w,{WHITELISTED:1,BLACKLISTED:-1,UNLISTED:0,ONLINE:1,OFFLINE:0,ONLINE_TO_WHITELIST:0,ONLINE_TO_BLACKLIST:1,init:function ja(ka,la,ma){},setVisibility:function ja(ka){q=o;z(ka);var la={visibility:ka},ma={type:l,visibility:ka},na=ha(j,la,ma);ca(na,ma);v().log('set_visibility',{data:la});return ka;},getVisibility:function ja(){return o;},setOnlinePolicy:function ja(ka){s=r;aa(ka);var la={online_policy:ka},ma={type:m,online_policy:ka},na=ha(i,la,ma);ca(na,ma);v().log('set_online_policy',{data:la});return ka;},getOnlinePolicy:function ja(){return r;},getFriendVisibility:function ja(ka){return n[ka]||w.UNLISTED;},isUserOffline:function ja(){return this.getVisibility()===w.OFFLINE;},allows:function ja(ka){if(this.isUserOffline())return false;var la=this.getOnlinePolicy();return la===w.ONLINE_TO_WHITELIST?n[ka]==w.WHITELISTED:n[ka]!=w.BLACKLISTED;},setFriendsVisibility:function ja(ka,la){if(ka.length>0){var ma={};for(var na=0;na<ka.length;na++){var oa=ka[na];p[oa]=n[oa];ma[oa]=la;}x(ma);var pa=la;if(pa==w.UNLISTED)pa=p[ka[0]];var qa={users:ka,setting:la,setting_type:pa},ra={type:k,settings:ma},sa=ha(h,qa,ra);ca(sa,ra);v().log('set_friend_visibility',{data:qa});}return la;},setFriendVisibilityMap:function ja(ka,la){for(var ma in ka)p[ma]=n[ma];x(ka);var na={type:k,settings:ka};ca(ga(la,na),na);v().log('set_friend_visibility_from_map',{data:ka});},allow:function ja(ka){if(this.allows(ka)){v().error('allow_already_allowed');throw new Error("allow() should only be called for users that "+"are not already allowed");}if(this.getVisibility()===w.OFFLINE){v().error('allow_called_while_offline');throw new Error("allow() should only be called when the user is already online");}var la=this.getOnlinePolicy()===w.ONLINE_TO_WHITELIST?w.WHITELISTED:w.UNLISTED;return this.setFriendsVisibility([ka],la);},disallow:function ja(ka){if(!this.allows(ka)){v().error('disallow_already_disallowed');throw new Error("disallow() should only be called for users that "+"are not already disallowed");}if(this.getVisibility()===w.OFFLINE){v().error('disallow_called_while_offline');throw new Error("disallow() should only be called when the user is already online");}var la=this.getOnlinePolicy()===w.ONLINE_TO_BLACKLIST?w.BLACKLISTED:w.UNLISTED;return this.setFriendsVisibility([ka],la);},getBlacklist:function ja(){var ka=[];for(var la in n)if(n[la]===w.BLACKLISTED)ka.push(la);return ka;},getWhitelist:function ja(){var ka=[];for(var la in n)if(n[la]===w.WHITELISTED)ka.push(la);return ka;},getMapForTest:function ja(){return n;},setMapForTest:function ja(ka){n=ka;}});w.inform('privacy-changed');w.inform('privacy-user-presence-changed',c('Arbiter').BEHAVIOR_STATE);v().log('initialized',{visibility:o,policy:r});c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ja,ka){ka.presence_privacy={initial:c('PresencePrivacyInitialData').privacyData,current:n};});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('privacy_changed'),ia.bind(this));c('Arbiter').subscribe(c('ChannelConstants').ON_CONFIG,function(ja,ka){var la=ka.getConfig('visibility',null);if(la!==null&&typeof la!=='undefined'){var ma=la?w.ONLINE:w.OFFLINE;z(ma);v().log('config_visibility',{vis:ma});}}.bind(this));f.exports=w;}),null);
__d('ChatVisibility',['Arbiter','JSLogger','PresencePrivacy'],(function a(b,c,d,e,f,g){var h={isOnline:function i(){return c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE;},hasBlackbirdEnabled:function i(){return this.isVisibleToMostFriends()||this.isVisibleToSomeFriends();},isVisibleToMostFriends:function i(){return c('PresencePrivacy').getOnlinePolicy()===c('PresencePrivacy').ONLINE_TO_BLACKLIST&&c('PresencePrivacy').getBlacklist().length>0;},isVisibleToSomeFriends:function i(){return c('PresencePrivacy').getOnlinePolicy()===c('PresencePrivacy').ONLINE_TO_WHITELIST&&c('PresencePrivacy').getWhitelist().length>0;},goOnline:function i(j){if(c('PresencePrivacy').getVisibility()===c('PresencePrivacy').OFFLINE){c('JSLogger').create('blackbird').log('chat_go_online');c('PresencePrivacy').setVisibility(c('PresencePrivacy').ONLINE);c('Arbiter').inform('chat-visibility/go-online');}j&&j();},goOffline:function i(j){if(c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE){c('JSLogger').create('blackbird').log('chat_go_offline');c('PresencePrivacy').setVisibility(c('PresencePrivacy').OFFLINE);c('Arbiter').inform('chat-visibility/go-offline');}j&&j();},toggleVisibility:function i(){if(h.isOnline()){h.goOffline();}else h.goOnline();}};f.exports=h;}),null);
__d("XChatUserInfoAllAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/chat\/user_info_all\/",{viewer:{type:"Int",required:true}});}),null);
__d('ShortProfilesBootstrapper',['Promise','AsyncRequest','BanzaiODS','CurrentUser','JSLogger','XChatUserInfoAllAsyncController'],(function a(b,c,d,e,f,g){'use strict';var h=5,i=10000,j=c('XChatUserInfoAllAsyncController').getURIBuilder().setInt('viewer',c('CurrentUser').getID()).getURI(),k=c('JSLogger').create('short_profiles');function l(m){this.$ShortProfilesBootstrapper1=m;this.$ShortProfilesBootstrapper2=new (c('Promise'))(function(n,o){this.$ShortProfilesBootstrapper3=n;this.$ShortProfilesBootstrapper4=o;}.bind(this));this.$ShortProfilesBootstrapper5=false;this.$ShortProfilesBootstrapper6=null;this.$ShortProfilesBootstrapper7=0;this.$ShortProfilesBootstrapper8=0;this.$ShortProfilesBootstrapper9=0;this.$ShortProfilesBootstrapper10=false;this.$ShortProfilesBootstrapper11=false;}l.prototype.fetchAll=function(){this.$ShortProfilesBootstrapper12();if(this.$ShortProfilesBootstrapper5||this.$ShortProfilesBootstrapper6)return this.$ShortProfilesBootstrapper2;if(this.$ShortProfilesBootstrapper7>=h){this.$ShortProfilesBootstrapper13();return this.$ShortProfilesBootstrapper2;}this.$ShortProfilesBootstrapper7++;this.$ShortProfilesBootstrapper14();this.$ShortProfilesBootstrapper6=new (c('AsyncRequest'))(j).setHandler(function(m){this.$ShortProfilesBootstrapper6=null;this.$ShortProfilesBootstrapper5=true;this.$ShortProfilesBootstrapper15();this.$ShortProfilesBootstrapper1(m.payload);this.$ShortProfilesBootstrapper3();}.bind(this)).setErrorHandler(function(){this.$ShortProfilesBootstrapper6=null;this.$ShortProfilesBootstrapper8++;this.$ShortProfilesBootstrapper16();}.bind(this)).setTimeoutHandler(i,function(){this.$ShortProfilesBootstrapper6=null;this.$ShortProfilesBootstrapper9++;this.$ShortProfilesBootstrapper17();this.fetchAll();}.bind(this)).setAllowCrossPageTransition(true);this.$ShortProfilesBootstrapper6.send();return this.$ShortProfilesBootstrapper2;};l.prototype.isBootstrapped=function(){return this.$ShortProfilesBootstrapper5;};l.prototype.isBootstrapping=function(){return !!this.$ShortProfilesBootstrapper6;};l.prototype.getAttemptCount=function(){return this.$ShortProfilesBootstrapper7;};l.prototype.getErrorCount=function(){return this.$ShortProfilesBootstrapper8;};l.prototype.getTimeoutCount=function(){return this.$ShortProfilesBootstrapper9;};l.prototype.$ShortProfilesBootstrapper12=function(){if(!this.$ShortProfilesBootstrapper10){k.log('bootstrap_start');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.starts');this.$ShortProfilesBootstrapper10=true;}};l.prototype.$ShortProfilesBootstrapper14=function(){k.log('bootstrap_attempt');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.attempts');};l.prototype.$ShortProfilesBootstrapper15=function(){k.log('bootstrap_success');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.successes');if(this.$ShortProfilesBootstrapper7>1)c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.successes_after_retries');};l.prototype.$ShortProfilesBootstrapper16=function(){k.log('bootstrap_error');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.errors');};l.prototype.$ShortProfilesBootstrapper17=function(){k.log('bootstrap_timeout');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.timeouts');};l.prototype.$ShortProfilesBootstrapper13=function(){if(!this.$ShortProfilesBootstrapper11){k.log('bootstrap_giveup');c('BanzaiODS').bumpEntityKey('chat.web','typeahead.bootstrap.giveups');this.$ShortProfilesBootstrapper11=true;this.$ShortProfilesBootstrapper4();}};f.exports=l;}),null);
__d("XChatUserInfoAsyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/chat\/user_info\/",{ids:{type:"IntVector",defaultValue:[]}});}),null);
__d('ShortProfiles',['AjaxLoader','Arbiter','JSLogger','ShortProfilesBootstrapper','XChatUserInfoAsyncController','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';var h=null,i=new (c('AjaxLoader'))(c('XChatUserInfoAsyncController').getURIBuilder().getURI().toString(),'profiles'),j={get:function k(l,m){this.getMulti([l],function(n){return m(n[l],l);});},getMulti:function k(l,m){i.get(l,m||c('emptyFunction'));},getNow:function k(l){return i.getNow(l)||null;},getMultiNow:function k(l){var m={};l.forEach(function(n){return m[n]=j.getNow(n);});return m;},getCachedProfileIDs:function k(){return i.getCachedKeys();},hasAll:function k(){return !!h&&h.isBootstrapped();},fetchAll:function k(){if(!h)h=new (c('ShortProfilesBootstrapper'))(function(l){i.set(l);});return h.fetchAll();},set:function k(l,m){var n={};n[l]=m;this.setMulti(n);},setMulti:function k(l){i.set(l);}};c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(k,l){var m=j.getCachedProfileIDs(),n=c('JSLogger').getEntries(function(o){return (o.cat=='short_profiles'||o.cat=='chat_typeahead');});l.chat_typeahead={bootstrapped:h&&h.isBootstrapped(),bootstrapping:h&&h.isBootstrapping(),bootstrap_attempts:h&&h.getAttemptCount(),bootstrap_errors:h&&h.getErrorCount(),bootstrap_timeouts:h&&h.getTimeoutCount(),entries:m,entry_count:m.length,history:n};});f.exports=j;}),null);
__d('ChatReliabilityTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ChatReliabilityLoggerConfig',this.$ChatReliabilityTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ChatReliabilityTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ChatReliabilityTypedLogger1=babelHelpers['extends']({},this.$ChatReliabilityTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$ChatReliabilityTypedLogger1.event=j;return this;};h.prototype.setEventData=function(j){this.$ChatReliabilityTypedLogger1.event_data=j;return this;};var i={event:true,event_data:true};f.exports=h;}),null);
__d('ChatReliabilityInstrumentation',['ChatReliabilityEvents','ChatReliabilityTypedLogger','MercuryConfig'],(function a(b,c,d,e,f,g){'use strict';var h=function j(event,k){if(!c('MercuryConfig').EnableReliabilityLogging)return;new (c('ChatReliabilityTypedLogger'))().setEvent(event).setEventData(k).log();},i={logERROR:function j(k){h(c('ChatReliabilityEvents').ERROR,k);},logCHANNEL_DISCONNECT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_DISCONNECT,k);},logCHANNEL_CONNECT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_CONNECT,k);},logCHANNEL_HISTORY_INVALID:function j(k){h(c('ChatReliabilityEvents').CHANNEL_HISTORY_INVALID,k);},logMESSAGE_RECEIVED:function j(k){h(c('ChatReliabilityEvents').MESSAGE_RECEIVED,k);},logCHANNEL_STALLED:function j(k){h(c('ChatReliabilityEvents').CHANNEL_STALLED,k);},logCHANNEL_INIT:function j(k){h(c('ChatReliabilityEvents').CHANNEL_INIT,k);},logCHANNEL_NOCONFIG:function j(k){h(c('ChatReliabilityEvents').CHANNEL_NOCONFIG,k);}};f.exports=i;}),null);
__d('FBRTCSupport',['ChannelConstants','RTCConfig','UserAgent'],(function a(b,c,d,e,f,g){var h={isSendWebrtcSupported:function i(){return c('RTCConfig').SendNewVCGK;},isReceiveWebrtcSupported:function i(){return c('RTCConfig').ReceiveNewVCGK;},isVideoInteropSupported:function i(){return c('RTCConfig').VideoInteropGK;},isVideoCallBlockingSupported:function i(){return c('RTCConfig').VideoCallBlockingGK;},isWebrtcSupported:function i(){return (c('UserAgent').isBrowser('Chrome >= 28')||c('UserAgent').isBrowser('Firefox >= 25')||c('RTCConfig').RtcUseWebRTCForEdge&&c('UserAgent').isBrowser('Edge >= 15.15042')||c('UserAgent').isBrowser('Opera >= 20'));},isGroupCallWebtrcSupported:function i(){return (c('UserAgent').isBrowser('Chrome >= 28')||c('UserAgent').isBrowser('Opera >= 20'));},isCollabSupported:function i(){return c('RTCConfig').CollabWhitelistedBrowserGK||c('UserAgent').isBrowser('Chrome >= 48');},isOSSupported:function i(){return !c('UserAgent').isPlatform('Android')&&!c('UserAgent').isPlatform('iOS');},getCapabilities:function i(){var j=0;if(this.isReceiveWebrtcSupported())j=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;return j;}};f.exports=h;}),null);
__d('MercuryLoggingHelper',[],(function a(b,c,d,e,f,g){function h(j){return Array.from(j).slice(0,6).join('');}var i={obfuscateThread:function j(k){var l=babelHelpers['extends']({},k);if(k&&k.snippet&&k.snippet.length>9)l.snippet=h(k.snippet)+'...';return l;},obfuscateMessage:function j(k){var l=babelHelpers['extends']({},k);if(k&&k.body&&k.body.length>9)l.body=h(k.body)+'...';return l;}};f.exports=i;}),null);
__d('Dcode',[],(function a(b,c,d,e,f,g){var h,i={},j={_:'%',A:'%2',B:'000',C:'%7d',D:'%7b%22',E:'%2c%22',F:'%22%3a',G:'%2c%22ut%22%3a1',H:'%2c%22bls%22%3a',I:'%2c%22n%22%3a%22%',J:'%22%3a%7b%22i%22%3a0%7d',K:'%2c%22pt%22%3a0%2c%22vis%22%3a',L:'%2c%22ch%22%3a%7b%22h%22%3a%22',M:'%7b%22v%22%3a2%2c%22time%22%3a1',N:'.channel%22%2c%22sub%22%3a%5b',O:'%2c%22sb%22%3a1%2c%22t%22%3a%5b',P:'%2c%22ud%22%3a100%2c%22lc%22%3a0',Q:'%5d%2c%22f%22%3anull%2c%22uct%22%3a',R:'.channel%22%2c%22sub%22%3a%5b1%5d',S:'%22%2c%22m%22%3a0%7d%2c%7b%22i%22%3a',T:'%2c%22blc%22%3a1%2c%22snd%22%3a1%2c%22ct%22%3a',U:'%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',V:'%2c%22blc%22%3a0%2c%22snd%22%3a0%2c%22ct%22%3a',W:'%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a',X:'%2c%22ri%22%3a0%7d%2c%22state%22%3a%7b%22p%22%3a0%2c%22ut%22%3a1',Y:'%2c%22pt%22%3a0%2c%22vis%22%3a1%2c%22bls%22%3a0%2c%22blc%22%3a0%2c%22snd%22%3a1%2c%22ct%22%3a',Z:'%2c%22sb%22%3a1%2c%22t%22%3a%5b%5d%2c%22f%22%3anull%2c%22uct%22%3a0%2c%22s%22%3a0%2c%22blo%22%3a0%7d%2c%22bl%22%3a%7b%22ac%22%3a'};(function(){var l=[];for(var m in j){i[j[m]]=m;l.push(j[m]);}l.reverse();h=new RegExp(l.join("|"),'g');})();var k={encode:function l(m){return encodeURIComponent(m).replace(/([_A-Z])|%../g,function(n,o){return o?'%'+o.charCodeAt(0).toString(16):n;}).toLowerCase().replace(h,function(n){return i[n];});},decode:function l(m){return decodeURIComponent(m.replace(/[_A-Z]/g,function(n){return j[n];}));}};f.exports=k;}),null);
__d('PresenceCookieManager',['Cookie','CurrentUser','Dcode','ErrorUtils','JSLogger','PresenceInitialData','PresenceUtil','URI'],(function a(b,c,d,e,f,g){var h=c('PresenceInitialData').cookieVersion,i='presence',j={},k=null,l=null,m=c('JSLogger').create('presence_cookie');function n(){try{var r=c('Cookie').get(i);if(k!==r){k=r;l=null;if(r&&r.charAt(0)=='E')r=c('Dcode').decode(r.substring(1));if(r)l=JSON.parse(r);}if(l){if(l.user&&l.user!==c('CurrentUser').getID())return null;if(l.v!==h)return null;return l;}}catch(q){m.warn('getcookie_error',q);}return null;}function o(){return parseInt(Date.now()/1000,10);}var p={register:function q(r,s){j[r]=s;},store:function q(){var r=n();if(r&&r.v&&h<r.v){m.debug('stale_cookie',h);return;}var s={v:h,time:o(),user:c('CurrentUser').getID()};for(var t in j)s[t]=c('ErrorUtils').applyWithGuard(j[t],j,[r&&r[t]],function(w){w.presence_subcookie=t;});var u='E'+c('Dcode').encode(JSON.stringify(s));if(c('PresenceUtil').hasUserCookie()){var v=u.length;if(v>1024)m.warn('big_cookie',v);c('Cookie').set(i,u);}},clear:function q(){c('Cookie').clear(i);},getSubCookie:function q(r){var s=n();if(!s)return null;return s[r];}};f.exports=p;}),null);
__d('PresenceState',['Arbiter','ErrorUtils','JSLogger','PresenceCookieManager','debounceAcrossTransitions','setIntervalAcrossTransitions','PresenceInitialData'],(function a(b,c,d,e,f,g){var h=c('PresenceInitialData').cookiePollInterval||2000,i=c('PresenceInitialData').shouldSuppress||false,j=[],k=[],l=null,m=null,n=0,o=null,p=0,q=['sb2','t2','lm2','uct2','tr','tw','at','wml'],r=c('JSLogger').create('presence_state');function s(){return c('PresenceCookieManager').getSubCookie('state');}function t(){n=Date.now();c('PresenceCookieManager').store();x(m);}var u=c('debounceAcrossTransitions')(t,0);function v(ca){if(typeof ca=='undefined'||isNaN(ca)||ca==Number.POSITIVE_INFINITY||ca==Number.NEGATIVE_INFINITY)ca=0;return ca;}function w(ca){var da={};if(ca){q.forEach(function(ga){da[ga]=ca[ga];});if(n<ca.ut)r.error('new_cookie',{cookie_time:ca.ut,local_time:n});}da.ut=n;for(var ea=0,fa=j.length;ea<fa;ea++)c('ErrorUtils').applyWithGuard(j[ea],null,[da]);m=da;return m;}function x(ca){p++;n=v(ca.ut);if(!l)l=c('setIntervalAcrossTransitions')(aa,h);m=ca;if(o===null)o=ca;for(var da=0,ea=k.length;da<ea;da++)c('ErrorUtils').applyWithGuard(k[da],null,[ca]);p--;}function y(ca){if(ca&&ca.ut)if(n<ca.ut){return true;}else if(ca.ut<n)r.error('old_cookie',{cookie_time:ca.ut,local_time:n});return false;}function z(){var ca=s();if(y(ca))m=ca;return m;}function aa(){var ca=s();if(y(ca))x(ca);}c('PresenceCookieManager').register('state',w);c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ca,da){da.presence_state={initial:babelHelpers['extends']({},o),state:babelHelpers['extends']({},m),update_time:n,sync_paused:p,poll_time:h};});(function(){var ca=z();if(ca){x(ca);}else{r.debug('no_cookie_initial');x(w());return;}})();var ba={doSync:function ca(da){if(p)return;if(da){t();}else u();},registerStateStorer:function ca(da){j.push(da);},registerStateLoader:function ca(da){k.push(da);},get:function ca(){return z();},getInitial:function ca(){return o;},shouldSuppress:function ca(){return i;},verifyNumber:v};f.exports=ba;}),null);
__d('Scrollable',['Event','Parent','Scroll','UserAgent_DEPRECATED'],(function a(b,c,d,e,f,g){var h=function k(event){var l=c('Parent').byClass(event.getTarget(),'scrollable');if(!l)return;if(typeof event.axis!=='undefined'&&event.axis===event.HORIZONTAL_AXIS||event.wheelDeltaX&&!event.wheelDeltaY||event.deltaX&&!event.deltaY)return;var m=event.wheelDelta||-event.deltaY||-event.detail,n=l.scrollHeight,o=l.clientHeight;if(n>o){var p=c('Scroll').getTop(l);if(m>0&&p===0||m<0&&p>=n-o-1){event.prevent();}else if(c('UserAgent_DEPRECATED').ie()<9)if(l.currentStyle){var q=l.currentStyle.fontSize;if(q.indexOf('px')<0){var r=document.createElement('div');r.style.fontSize=q;r.style.height='1em';q=r.style.pixelHeight;}else q=parseInt(q,10);c('Scroll').setTop(l,p-Math.round(m/120*q));event.prevent();}}},i=document.documentElement;if(c('UserAgent_DEPRECATED').firefox()){var j='WheelEvent' in window?'wheel':'DOMMouseScroll';i.addEventListener(j,h,false);}else c('Event').listen(i,'mousewheel',h);}),null);
__d('MercuryIDs',[],(function a(b,c,d,e,f,g){'use strict';var h={isValid:function i(j){if(!j||typeof j!=='string')return false;return /^\w{3,12}:.+/.test(j);},isValidThreadID:function i(j){if(!h.isValid(j))return false;var k=h.tokenize(j);switch(k.type){case 'user':case 'group':case 'support':case 'thread':case 'root':case 'pending':return true;default:return false;}},tokenize:function i(j){if(!j||!h.isValid(j))throw new Error('bad_id_format '+String(j));var k=j.indexOf(':');return {type:j.substr(0,k),value:j.substr(k+1)};},getUserIDFromParticipantID:function i(j){if(!h.isValid(j))throw new Error('bad_id_format '+j);var k=h.tokenize(j),l=k.type,m=k.value;return l==='fbid'?m:null;},getParticipantIDFromUserID:function i(j){if(isNaN(j))throw new Error('Not a user ID: '+j);return 'fbid:'+j;},getUserIDFromThreadID:function i(j){if(!this.isCanonical(j))return null;return this.tokenize(j).value;},getThreadIDFromUserID:function i(j){return 'user:'+j;},getThreadIDFromThreadFBID:function i(j){return 'thread:'+j;},getThreadIDFromSupportInboxItemID:function i(j){return 'support:'+j;},getThreadFBIDFromThreadID:function i(j){return this.tokenize(j).value;},getThreadIDFromParticipantID:function i(j){var k=this.getUserIDFromParticipantID(j);return k?this.getThreadIDFromUserID(k):null;},getParticipantIDFromFromThreadID:function i(j){var k=this.getUserIDFromThreadID(j);return k?this.getParticipantIDFromUserID(k):null;},getSupportInboxItemIDFromThreadID:function i(j){return this.tokenize(j).value;},isCanonical:function i(j){return this.isValid(j)&&this.tokenize(j).type==='user';},isGroupChat:function i(j){return this.isValid(j)&&this.tokenize(j).type!=='user';},isLocalThread:function i(j){return this.isValid(j)&&this.tokenize(j).type==='root';}};f.exports=h;}),null);
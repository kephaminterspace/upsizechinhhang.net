if (self.CavalryLogger) { CavalryLogger.start_js(["24T2S"]); }

__d("EmbeddedPostPluginActions",[],(function a(b,c,d,e,f,g){f.exports={EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"};}),null);
__d("EmbeddedPostPluginActionTypes",[],(function a(b,c,d,e,f,g){f.exports={CLICK:"click"};}),null);
__d("FBFeedLocations",[],(function a(b,c,d,e,f,g){f.exports={NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,SPACES_FEED:41,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,POLITICIANS_FEED:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84,PAGE_TIMELINE_PERMALINK:86,OFFERS_WALLET:87,INSTREAM_VIDEO_IN_LIVE:88,SPOTLIGHT:89,SEARCH_DERP:90,SOCIAL_BALLOT:91,GROUP_SUGGESTIONS_WITH_STORY:92,SOCIAL_BALLOT_PERMALINK:93,LOCAL_SERP:94,FUNDRAISER_SELF_DONATION_FEED:95,CONVERSATION_NUB:97,GROUP_TOP_SALE_STORIES:98,GROUP_LEARNING_COURSE_UNIT_FEED:99,SUPPORT_INBOX_READ_TIME_BLOCK:100,PAGE_POSTS_CARD:101,CRISIS_POST:102,SUPPORT_INBOX_GROUP_RESPONSIBLE:103,PAGE_POST_DIALOG:104,CRISIS_DIALOG_POST:105,PAGE_LIVE_VIDEOS_CARD:106,PAGE_POSTS_CARD_COMPACT:107,GROUP_MEMBER_BIO_FEED:108,LIVE_COMMENT_ATTACHMENT:109,GROUP_COMPOSER:110,GROUP_INBOX_GROUP:111,GROUP_INBOX_AGGREGATED:112,ENDORSEMENTS:113,EVENTS_DASHBOARD:114,CURATED_COLLECTIONS_PAGE:115,OYML:116,COLLEGE_HOMEPAGE:117,GROUP_LIVE_VIDEOS_CARD:118,COLLEGE_HIGHLIGHTS:119,VIDEO_PERMALINK:120,JOB_CAROUSEL_NETEGO:121,TOPIC_PAGE:122,USER_SCHEDULED_POSTS:123,GOODWILL_THROWBACK_ATTACHMENT_PREVIEW:124,INSTREAM_VIDEO_IN_WASLIVE:125,INSTREAM_VIDEO_IN_NONLIVE:126,SIGNAL_APP:127,ALBUM_FEED:128};}),null);
__d('NonBlockingIFrame',['Promise','DOM','TimeSlice'],(function a(b,c,d,e,f,g){var h={},i,j;function k(){var n=arguments.length<=0||arguments[0]===undefined?h:arguments[0],o=arguments.length<=1||arguments[1]===undefined?document.body:arguments[1],p,q={className:'nonBlockingIframe',width:0,height:0,frameborder:0,scrolling:'no','aria-hidden':'true'};if(n!==h)q.src=n;p=c('DOM').create('iframe',q);p.style.left='-1000px';p.style.position='absolute';c('DOM').appendContent(o,p);if(n===h){p.contentDocument.open();p.contentDocument.close();}return p;}function l(){return new (c('Promise'))(function(n){if(!i)i=k();if(i.contentDocument.readyState==='complete'){n(i);}else{if(!j)j=new (c('Promise'))(function(o){i.contentWindow.onload=c('TimeSlice').guard(function(){o(i);},'NonBlockingIFrame window.onload');});n(j);}});}var m={loadImage:function n(o){return l().then(function(p){return new (c('Promise'))(function(q,r){var s=p.contentWindow.Image,t=new s();t.onload=c('TimeSlice').guard(function(){q(t);},'NonBlockingIFrame image.onload');t.onerror=c('TimeSlice').guard(function(){r(t);},'NonBlockingIFrame image.onerror');t.onabort=c('TimeSlice').guard(function(){r(t);},'NonBlockingIFrame image.onabort');t.src=o;});});},loadIFrame:function n(){var o=arguments.length<=0||arguments[0]===undefined?h:arguments[0];return l().then(function(p){var q=p.contentDocument.body;return k(o,q);});}};f.exports=m;}),null);
__d('isAdsExcelAddinURI',[],(function a(b,c,d,e,f,g){var h=new RegExp('(^|\\.)fbaddins\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return (i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain()));}f.exports=j;}),null);
__d('isValidURI',[],(function a(b,c,d,e,f,g){var h=new RegExp('((^|\\.)atlassolutions\\.com$)|'+'((^|\\.)instagram\\.com$)|'+'((^|\\.)wit\\.ai$)|'+'((^|\\.)accountkit\\.com$)','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return (i.includes(k.getProtocol())&&h.test(k.getDomain()));}f.exports=j;}),null);
__d('AsyncSignal',['Promise','ErrorUtils','NonBlockingIFrame','Run','QueryString','TrackingConfig','URI','WebSpeedExperiments','ZeroRewrites','isValidURI','isAdsExcelAddinURI','isFacebookURI','isMessengerDotComURI','getAsyncParams','memoize'],(function a(b,c,d,e,f,g){var h;function i(j,k){this.data=k||{};this.uri=j.toString();if(c('TrackingConfig').domain&&this.uri.charAt(0)=='/')this.uri=c('TrackingConfig').domain+this.uri;}i.prototype.setHandler=function(j){this.handler=j;return this;};i.prototype.setTimeout=function(j){this.timeout=j;return this;};i.prototype.send=function(){var j=this.handler,k=this.data;k.asyncSignal=(Math.random()*10000|0)+1;var l=c('ZeroRewrites').rewriteURI(new (c('URI'))(this.uri)),m=c('isFacebookURI')(l)||c('isMessengerDotComURI')(l)||c('isAdsExcelAddinURI')(l)||c('isValidURI')(l);if(m){Object.assign(k,c('getAsyncParams')('POST'));}else throw new Error("'"+this.uri+"' "+"is an external URL, you should not send async signals to offsite links.");var n=c('QueryString').appendToUrl(this.uri,k),o;if(c('WebSpeedExperiments').non_blocking_logger){o=c('NonBlockingIFrame').loadImage(n);}else{if(!h)h=new (c('Promise'))(function(r){c('Run').onAfterLoad(r);});o=h.then(function(){return new (c('Promise'))(function(r,s){var t=new Image();t.onload=r;t.onerror=t.onabort=s;t.src=n;});});}if(j){var p=false,q=c('memoize')(function(){c('ErrorUtils').applyWithGuard(j,null,[p]);});o.then(function(){p=true;q();},q).done();if(this.timeout)setTimeout(q,this.timeout);}return this;};f.exports=i;}),null);
__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],(function a(b,c,d,e,f,g){var h={swap:function i(j,k){var l=c('UserAgent_DEPRECATED').ie()<=8;if(l){var m=c('DOM').create('wbr',{},null);c('DOM').appendContent(j,m);}j.href=k;if(l)c('DOM').remove(m);},referrer_log:function i(j,k,l){var m=c('$')('meta_referrer');m.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;h.swap(j,k);setTimeout(function(){m.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;new (c('AsyncSignal'))(l,{}).send();},100);}};f.exports=h;}),null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],(function a(b,c,d,e,f,g){b.LinkshimAsyncLink=c('LinkshimAsyncLink');}),3);
__d('AttachmentRelatedShareConstants',[],(function a(b,c,d,e,f,g){var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',FBVIDEO_VIEW:'fbvideo_view',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join',PRODUCT_CLICK:'product_click',MAP_CLICK:'map_click',ACTION_BUTTON_CLICK:'action_button_click'};f.exports=h;}),null);
__d('collectDataAttributes',['DataAttributeUtils','getContextualParent'],(function a(b,c,d,e,f,g){var h='normal';function i(j,k,l){var m={},n=[],o=k.length,p;for(p=0;p<o;++p){m[k[p]]={};n.push('data-'+k[p]);}if(l){m[h]={};for(p=0;p<(l||[]).length;++p)n.push(l[p]);}var q={tn:'',"tn-debug":','};while(j){if(j.getAttribute)for(p=0;p<n.length;++p){var r=n[p],s=c('DataAttributeUtils').getDataAttribute(j,r);if(s){if(p>=o){if(m[h][r]===undefined)m[h][r]=s;continue;}var t=JSON.parse(s);for(var u in t)if(q[u]!==undefined){if(m[k[p]][u]===undefined)m[k[p]][u]=[];m[k[p]][u].push(t[u]);}else if(m[k[p]][u]===undefined)m[k[p]][u]=t[u];}}j=c('getContextualParent')(j);}for(var v in m)for(var w in q)if(m[v][w]!==undefined)m[v][w]=m[v][w].join(q[w]);return m;}f.exports=i;}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};}),null);
__d('LitestandMessages',[],(function a(b,c,d,e,f,g){var h={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',STORIES_REQUESTED:'LitestandMessages/StoriesRequested',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_REQUESTED:'LitestandMessages/NewerStoriesRequested',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_CONTAINER_CREATED:'LitestandMessages/NewStoriesContainer',RHC_RELOADED:'LitestandMessages/RHCReloaded',STREAM_LOAD_ERROR:'LitestandMessages/StreamLoadError',DUPLICATE_CURSOR_ERROR:'LitestandMessages/DuplicateCursorError',STREAM_LOAD_RETRY:'LitestandMessages/StreamLoadRetry'};f.exports=h;}),null);
__d('ServerTime',['InitialServerTime'],(function a(b,c,d,e,f,g){k(c('InitialServerTime').serverTime);var h;function i(){return Date.now()-h;}function j(){return h;}function k(l){h=Date.now()-l;}f.exports={getMillis:i,getOffsetMillis:j,update:k,get:i,getSkew:j};}),null);
__d('LiveTimer',['fbt','csx','cx','CSS','DOM','ServerTime','TimeSlice','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i,j){var k=1000,l=60,m=3600,n=43200,o=86400,p=60,q=60000,r={restart:function s(t){c('ServerTime').update(t*1000);this.updateTimeStamps();},getApproximateServerTime:function s(){return c('ServerTime').get();},getServerTimeOffset:function s(){return -1*c('ServerTime').getSkew();},updateTimeStamps:function s(){this.timestamps=c('DOM').scry(document.body,'abbr.livetimestamp');this.startLoop(q);},addTimeStamps:function s(t){if(!t)return;this.timestamps=this.timestamps||[];if(c('DOM').isNodeOfType(t,'abbr')&&c('CSS').hasClass(t,'livetimestamp')){this.timestamps.push(t);}else{var u=c('DOM').scry(t,'abbr.livetimestamp');for(var v=0;v<u.length;++v)this.timestamps.push(u[v]);}this.startLoop(0);},removeTimestamp:function s(t){if(!this.timestamps||!t)return;var u=this.timestamps.indexOf(t);if(u>-1)this.timestamps.splice(u,1);},startLoop:function s(t){this.stop();this.createTimeout(t);},createTimeout:function s(t){this.timeout=c('setTimeoutAcrossTransitions')(c('TimeSlice').guard(function(){this.loop();}.bind(this),'LiveTimer.loop',{isContinuation:false}),t);},stop:function s(){clearTimeout(this.timeout);},loop:function s(t){if(t)this.updateTimeStamps();var u=Math.floor(c('ServerTime').get()/k),v=-1;this.timestamps&&this.timestamps.forEach(function(x){var y=x.getAttribute('data-utime'),z=x.getAttribute('data-shorten'),aa=x.getAttribute('data-minimize'),ba=this.renderRelativeTime(u,y,z,aa);if(ba.text){var ca={'class':"timestampContent"},da=c('DOM').scry(x,".timestampContent")[0],ea=da&&da.getAttribute('id');if(ea)ca.id=ea;c('DOM').setContent(x,c('DOM').create('span',ca,ba.text));}if(ba.next!=-1&&(ba.next<v||v==-1))v=ba.next;}.bind(this));if(v!=-1){var w=Math.max(q,v*k);this.createTimeout(w);}},renderRelativeTime:function s(t,u,v,w){var x={text:"",next:-1};if(t-u>o)return x;var y=t-u,z=Math.floor(y/l),aa=Math.floor(z/p);if(z<1){if(w){x.text=h._("1 ph\u00fat");x.next=20-y%20;}else if(v){x.text=h._("V\u1eeba xong");x.next=20-y%20;}else{x.text=h._("v\u00e0i gi\u00e2y tr\u01b0\u1edbc");x.next=l-y%l;}return x;}if(aa<1){if(w){x.text=h._({"*":"{number} tri\u1ec7u"},[h.param('number',z,[0])]);}else if(v&&z==1){x.text=h._("1 ph\u00fat");}else if(v){x.text=h._({"*":"{number} ph\u00fat"},[h.param('number',z,[0])]);}else x.text=z==1?h._("kho\u1ea3ng m\u1ed9t ph\u00fat tr\u01b0\u1edbc"):h._({"*":"{number} ph\u00fat tr\u01b0\u1edbc"},[h.param('number',z,[0])]);x.next=l-y%l;return x;}if(aa<11)x.next=m-y%m;if(w){x.text=h._({"*":"{number}h"},[h.param('number',aa,[0])]);}else if(v&&aa==1){x.text=h._("1 gi\u1edd");}else if(v){x.text=h._({"*":"{number} gi\u1edd"},[h.param('number',aa,[0])]);}else x.text=aa==1?h._("kho\u1ea3ng m\u1ed9t gi\u1edd tr\u01b0\u1edbc"):h._({"*":"{number} gi\u1edd tr\u01b0\u1edbc"},[h.param('number',aa,[0])]);return x;},renderRelativeTimeToServer:function s(t,u,v){return this.renderRelativeTime(Math.floor(c('ServerTime').get()/k),t,u,v);}};f.exports=r;f.exports.CONSTS={MS_IN_SEC:k,SEC_IN_MIN:l,SEC_IN_HOUR:m,SEC_IN_12_HOUR:n,SEC_IN_24_HOUR:o,MIN_IN_HOUR:p,HEARTBEAT:q};}),null);
__d('tidyEvent',['Run'],(function a(b,c,d,e,f,g){var h=[];function i(){while(h.length){var l=h.shift();l&&l.remove?l.remove():l.unsubscribe();}}function j(l){var m;function n(){if(!m)return;m.apply(l,arguments);m=null;l=null;}if(l.remove){m=l.remove;l.remove=n;}else{m=l.unsubscribe;l.unsubscribe=n;}return l;}function k(l){if(!h.length)c('Run').onLeave(i);if(Array.isArray(l)){for(var m=0;m<l.length;m++)h.push(j(l[m]));}else h.push(j(l));return l;}f.exports=k;}),null);
__d('AsyncFormRequestUtils',['Arbiter'],(function a(b,c,d,e,f,g){var h={subscribe:function i(j,k,l){c('Arbiter').subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=h;}),null);
__d('PluginTabLoadMore',['CSS','Event'],(function a(b,c,d,e,f,g){'use strict';var h={noMoreContent:function i(){c('Event').fire(this.root,'noMoreContent');c('CSS').hide(this.spinner);},setCursor:function i(j){c('Event').fire(this.root,'setCursor',j);},init:function i(j,k){this.root=j;this.spinner=k;}};f.exports=h;}),null);
__d("XPostPluginLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/platform\/plugin\/post\/logging\/",{});}),null);
__d('PluginFeedFooterActionLogger',['AsyncRequest','DOM','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes','Event','XPostPluginLoggingController'],(function a(b,c,d,e,f,g){var h={initializeClickLoggers:function i(j,k,l,m,n,o,p,q,r){var s=function t(u,v){try{var x=c('DOM').find(j,'.'+u);c('Event').listen(x,'click',function(y){new (c('AsyncRequest'))().setURI(c('XPostPluginLoggingController').getURIBuilder().getURI()).setData({action:v,action_type:c('EmbeddedPostPluginActionTypes').CLICK,source:o,story_token:p,referer_url:q,is_sdk:r}).send();});}catch(w){}};s(k,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);s(l,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);s(m,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);s(n,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);}};f.exports=h;}),null);
__d('randomInt',['invariant'],(function a(b,c,d,e,f,g,h){function i(j,k){var l=arguments.length;l>0&&l<=2||h(0);if(l===1){k=j;j=0;}k=k;k>j||h(0);var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;}),null);
__d('ClientIDs',['randomInt'],(function a(b,c,d,e,f,g){var h={},i={getNewClientID:function j(){var k=Date.now(),l=k+':'+(c('randomInt')(0,4294967295)+1);h[l]=true;return l;},isExistingClientID:function j(k){return !!h[k];}};f.exports=i;}),null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],(function a(b,c,d,e,f,g){window.resetConfirmStoryLike=function(i){c('CSS').show(c('DOM').find(document,'#likeStory_'+i));c('DOM').remove(c('DOM').find(document,'#confirmStory_'+i));};var h={addClientId:function i(j){j.setAttribute('value',c('ClientIDs').getNewClientID());},loggedOutLikeButton:function i(j,k,l){var m='';if(k===c('FBFeedLocations').EMBED){m='post';}else if(k===c('FBFeedLocations').PAGE_PLUGIN){m='page';}else throw new Error('Invalid FBFeedLocation type.');var n=new (c('PluginOptin'))(m).addReturnParams({act:'like_'+j});c('DOMEventListener').add(l,'click',n.start.bind(n));},init:function i(j,k,l,m,n){var o=function r(s){if(s.type==='keypress')if(s.keyCode===c('Keys').RETURN||s.keyCode===c('Keys').SPACE){c('FormSubmit').send(n);}else return;c('FormSubmit').send(n);};c('DOMEventListener').add(k,'click',o);c('DOMEventListener').add(l,'click',o);c('DOMEventListener').add(k,'keypress',o);c('DOMEventListener').add(l,'keypress',o);var p=m.getAttribute('value')==='1';c('AsyncFormRequestUtils').subscribe(n,'send',function(r){var s=m.getAttribute('value')==='1';c('CSS').conditionShow(l,s);c('CSS').conditionShow(k,!s);c('Arbiter').inform('embeddedUfiToggle',{isLike:s,storyToken:j});m.setAttribute('value',s?'':'1');});c('AsyncFormRequestUtils').subscribe(n,'response',function(r){var s=r.response.payload;if(s&&!s.success){var t=s.isLike;c('CSS').conditionShow(k,t);c('CSS').conditionShow(l,!t);c('Arbiter').inform('revertLike',{isLike:t,storyToken:j});m.setAttribute('value',t?'1':'');}});var q=new (c('URI'))(window.location.search).getQueryData();if(p&&q.act==='like_'+j)c('FormSubmit').send(n);}};f.exports=h;}),null);
__d('DeferredComponent.react',['React','createCancelableFunction'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(l,m){'use strict';i.constructor.call(this,l,m);this.$DeferredComponent1=function(n){this.setState({ComponentClass:n},function(){this.props.onComponentLoad&&this.props.onComponentLoad(n);}.bind(this));}.bind(this);this.state={ComponentClass:null,cancelableModulesLoaded:c('createCancelableFunction')(this.$DeferredComponent1)};}k.prototype.componentWillMount=function(){'use strict';this.props.deferredComponent(this.state.cancelableModulesLoaded);};k.prototype.componentWillUnmount=function(){'use strict';this.state.cancelableModulesLoaded.cancel();};k.prototype.render=function(){'use strict';var l=this.state.ComponentClass;if(!l||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var m=this.props,n=m.deferredPlaceholder,o=m.deferredComponent,p=m.onComponentLoad,q=m.deferredForcePlaceholder,r=babelHelpers.objectWithoutProperties(m,['deferredPlaceholder','deferredComponent','onComponentLoad','deferredForcePlaceholder']);return c('React').createElement(l,r);};k.propTypes={deferredPlaceholder:j.element.isRequired,deferredComponent:j.func.isRequired,onComponentLoad:j.func,deferredForcePlaceholder:j.bool};f.exports=k;}),null);
__d('JSResource',['JSResourceReference'],(function a(b,c,d,e,f,g){var h=function i(j){return new (c('JSResourceReference'))(j);};h.Reference=c('JSResourceReference');h.loadAll=c('JSResourceReference').loadAll;f.exports=h;}),null);
__d('BootloadedComponent.react',['DeferredComponent.react','JSResource','React'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$BootloadedComponent1=function(q){c('JSResource').loadAll([this.props.bootloadLoader],q);}.bind(this),m;}k.prototype.render=function(){'use strict';var l=this.props,m=l.bootloadLoader,n=l.bootloadPlaceholder,o=l.bootloadForcePlaceholder,p=babelHelpers.objectWithoutProperties(l,['bootloadLoader','bootloadPlaceholder','bootloadForcePlaceholder']);return c('React').createElement(c('DeferredComponent.react'),babelHelpers['extends']({deferredPlaceholder:n,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:o},p));};f.exports=Object.assign(k,{propTypes:{bootloadPlaceholder:j.element.isRequired,bootloadLoader:j.instanceOf(c('JSResource').Reference).isRequired,bootloadForcePlaceholder:j.bool},create:function l(m){var n,o;n=babelHelpers.inherits(p,c('React').Component);o=n&&n.prototype;p.prototype.render=function(){'use strict';var q=this.props,r=q.bootloadLoader,s=babelHelpers.objectWithoutProperties(q,['bootloadLoader']);return (c('React').createElement(k,babelHelpers['extends']({bootloadLoader:m,bootloadPlaceholder:c('React').createElement('div',null)},s)));};function p(){'use strict';n.apply(this,arguments);}p.displayName='BootloadedComponent('+m.getModuleId()+')';return p;}});}),null);
__d('FbFeedAccessible',['csx','fbt','invariant','AccessibilityConfig','Arbiter','ARIA','BootloadedComponent.react','CSS','DataAttributeUtils','DOMQuery','JSResource','LitestandMessages','React','ReactDOM','SubscriptionsHandler','ge','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i,j){var k='Accessibility/StoriesRequested',l='Accessibility/StoriesLoaded',m='Accessibility/StoryContentInserted',n='Accessibility/SubstreamInserted',o=void 0,p=void 0,q={init:function r(s){o=s;if(c('AccessibilityConfig').a11yNewsfeedStoryEnumeration){var t=new (c('SubscriptionsHandler'))();t.addSubscriptions(c('Arbiter').subscribe(c('LitestandMessages').STORIES_REQUESTED,this._onStoriesRequested.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(c('LitestandMessages').NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),c('Arbiter').subscribe(l,this._processStoriesLoaded.bind(this)),c('Arbiter').subscribe(k,this._processStoriesRequested.bind(this)),c('Arbiter').subscribe(m,this._processStoryContentInserted.bind(this)),c('Arbiter').subscribe(n,this._processInsertedSubstream.bind(this)));this._enumerateStories();}},informStoryContentInserted:function r(s){c('Arbiter').inform(m,s);this.setAriaLabelledBy(s);},setAriaLabelledBy:function r(s){var t=c('ge')(s),u;if(t&&this._isStory(t)){if(t.getAttribute('aria-labelledby'))return;u=this._filterForElement(t,["._4gns","._5pbw",".timestampContent","._5pbx"]);if(u.length>0)t.setAttribute('aria-labelledby',u.map(function(v){return c('getOrCreateDOMID')(v);}).join(' '));}},_getStories:function r(s){return c('DOMQuery').scry(s||o,"._5jmm");},_onInsertedSubstream:function r(s,t){if(t&&t.substream_id)c('Arbiter').inform(n,t.substream_id);},_onStoriesRequested:function r(){c('Arbiter').inform(k);},_setEnumerationText:function r(s,t,u){var v=c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('FbFeedPager.react').__setRef('FbFeedAccessible'),bootloadPlaceholder:c('React').createElement('div',null),position:t,total:u,'aria-hidden':'true'});c('ReactDOM').render(v,s);},_enumerateStories:function r(){var s=this._getStories(o);p=s.length;s.forEach(function(t,u){this._enumerateStory(t,u+=1);}.bind(this));},_enumerateSubstream:function r(s){var t=this._getStories();p=t.length;var u=this._getStories(c('ge')(s)),v=u.length||0;for(var w=0;w<v;w++)this._registerStoryEnumerationPosition(u[w],p-v+(w+1),w+1);},_enumerateStory:function r(s,t){this._isStory(s)||j(0);if(t>0){var u=c('DOMQuery').scry(s,"._4gns");if(u&&u[0])this._setEnumerationText(u[0],t,p);}},_processStoriesLoaded:function r(){c('ARIA').notify(i._("\u0110\u00e3 t\u1ea3i th\u00eam tin."));},_processStoriesRequested:function r(){c('ARIA').notify(i._("\u0110\u00e3 y\u00eau c\u1ea7u th\u00eam tin."));},_processInsertedSubstream:function r(s,t){this._enumerateSubstream(t);this._enumerateStories();},_processStoryContentInserted:function r(s,t){var u=void 0,v=c('ge')(t);if(v)u=JSON.parse(c('DataAttributeUtils').getDataFt(v));if(u&&u.ordinal_position){var w=u.ordinal_position.split(':'),x=w[0],y=w[1];x=parseInt(x,10);y=parseInt(y,10);this._enumerateStory(v,x);if(y===1)c('Arbiter').inform(l);}},_registerStoryEnumerationPosition:function r(s,t,u){var v=JSON.parse(c('DataAttributeUtils').getDataFt(s));if(v){v.ordinal_position=t+':'+u;c('DataAttributeUtils').setDataFt(s,JSON.stringify(v));}},_isStory:function r(s){return c('CSS').matchesSelector(s,"._5jmm");},_filterForElement:function r(s,t){return t.map(function(u){return c('DOMQuery').scry(s||document,u)[0];}).filter(function(u){return !!u;});}};f.exports=q;}),null);
__d('clearInterval',['TimerStorage','TimeSliceRefCountingWrapper'],(function a(b,c,d,e,f,g){var h=b.clearTimeout.nativeBackup||b.clearTimeout;f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];var l=j[0];c('TimerStorage').unset(c('TimerStorage').INTERVAL,l);if(l!=null&&c('TimeSliceRefCountingWrapper').isValidCancellationToken(l))c('TimeSliceRefCountingWrapper').cancelTimeSlice(l);return Function.prototype.apply.call(h,b,j);};}),null);
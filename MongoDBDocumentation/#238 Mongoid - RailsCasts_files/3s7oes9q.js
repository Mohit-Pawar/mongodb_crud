/*! SublimeVideo settings  | (c) 2013 Jilion SA | http://sublimevideo.net
*/(function(){ sublime_.define("settings",[],function(){var e,t,i;return t={},e={},i={license:{"hosts":["railscasts.com"],"stagingHosts":[],"devHosts":["127.0.0.1","localhost","railscasts.dev"],"path":null,"wildcard":null,"stage":"beta"},app:{"stats":{"settings":{"enable":true,"realtime":true},"allowedSettings":{"enable":{"values":[true]},"realtime":{"values":[true]}}}},kits:{"1":{"skin":{"module":"sublime/sublime_skin"},"plugins":{"videoPlayer":{"plugins":{"logo":{"settings":{"enable":false,"type":"sv","visibility":"autohide","position":"bottom-right","imageUrl":null,"linkUrl":null},"allowedSettings":{"enable":{"values":[true,false]},"type":{"values":["sv","custom"]},"visibility":{"values":["autohide","visible"]},"position":{"values":["top-left","top-right","bottom-left","bottom-right"]},"imageUrl":{"values":null},"linkUrl":{"values":null}},"id":"sa.sh.sp","module":"sublime/video/plugins/logo/logo"},"controls":{"settings":{"enable":true,"visibility":"autohide"},"allowedSettings":{"enable":{"values":[true,false]},"visibility":{"values":["autohide","visible"]}},"id":"sa.sh.sq","module":"sublime/video/plugins/controls/controls"},"initial":{"settings":{"overlayEnable":true,"overlayVisibility":"autofade","overlayColor":"#000"},"allowedSettings":{"overlayEnable":{"values":[true,false]},"overlayVisibility":{"values":["autofade","visible"]},"overlayColor":{"values":["#000"]}},"id":"sa.sh.sv","module":"sublime/video/plugins/poster/start_controller"},"sharing":{"settings":{"enable":true,"icon":"default","url":null,"buttons":["twitter","facebook"],"image":"auto","text":null,"twitterText":null,"twitterVia":null,"linkEnable":true},"allowedSettings":{"enable":{"values":[true,false]},"icon":{"values":["default","alt"]},"url":{"values":null},"buttons":{},"image":{"values":["auto","poster"]},"text":{},"twitterText":{},"twitterVia":{},"linkEnable":{"values":[true,false]}},"id":"sa.sh.ua","module":"sublime/video/plugins/social_sharing/social_sharing"},"cuezones":{"settings":{"enable":true},"allowedSettings":{"enable":{"values":[true,false]}},"id":"sa.sh.ud","module":"sublime/video/plugins/cuepoints/cue_zones"},"embed":{"settings":{"enable":true,"type":"manual","size":"640"},"allowedSettings":{"enable":{"values":[true,false]},"type":{"values":["manual","auto"]},"size":{}},"id":"sa.sh.ub","module":"sublime/video/plugins/embed/embed"},"googleAnalytics":{"settings":{"enable":false,"account":null},"allowedSettings":{"enable":{"values":[true,false]},"account":{"values":null}},"id":"sa.sh.uf","module":"sublime/video/plugins/google_analytics/google_analytics"}},"settings":{"volumeEnable":true,"fullmodeEnable":true,"fullmodePriority":"screen","onEnd":"nothing"},"allowedSettings":{"volumeEnable":{"values":[true,false]},"fullmodeEnable":{"values":[true,false]},"fullmodePriority":{"values":["screen","window"]},"onEnd":{"values":["nothing","replay","stop"]}},"id":"sa.sh.si","module":"sublime/video/video_app_plugin"},"lightbox":{"settings":{"onOpen":"play","overlayColor":"#000","overlayOpacity":0.7,"closeButtonEnable":true,"closeButtonVisibility":"autohide","closeButtonPosition":"left"},"allowedSettings":{"onOpen":{"values":["nothing","play"]},"overlayColor":{"values":["#000"]},"overlayOpacity":{"range":[0.1,1]},"closeButtonEnable":{"values":[true,false]},"closeButtonVisibility":{"values":["autohide","visible"]},"closeButtonPosition":{"values":["left","right"]}},"id":"sa.sl.sm","module":"sublime/lightbox/lightbox_app_plugin"},"imageViewer":{"settings":{},"allowedSettings":{},"id":"sa.sn.so","module":"sublime/image/image_app_plugin"}}}},defaultKit:"1"},t.exports=i,t.exports||e});;sublime_.component('settings');})();
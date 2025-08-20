System.register("chunks:///_virtual/KKCoTheBundle",["./KKCoTheLayer.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/KKCoTheLayer.ts",["cc","./LayerBase.ts","./kk.ts","./KKGameUIConf.ts","./KKUtils.ts"],(function(e){var c,t,n,o,a,s;return{setters:[function(e){c=e.cclegacy,t=e._decorator},function(e){n=e.LayerBase},function(e){o=e.default},function(e){a=e.KKLayerConf},function(e){s=e.default}],execute:function(){var r;c._RF.push({},"08fc5PTZc9MEJQ4c8O2xLLE","KKCoTheLayer",void 0);const{ccclass:u,property:i}=t;e("KKCoTheLayer",u("KKCoTheLayer")(r=class extends n{onEnable(){s.showCommonPopup({title:"THÔNG BÁO",desc:"Giang hồ cờ cuộc còn dang dở, cao thủ hãy tạm lui một bước.\n\nMời chư vị quay lại sau, thỏa chí anh hùng!",btnTxtCls:"Trở Về",closeCall:()=>{o.uiMgr.goLayerAsync(a.Home)}})}onBtnClick(e,c){switch(c){case"close":o.uiMgr.goLayerAsync(a.Home)}}})||r);c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/KKCoTheBundle', 'chunks:///_virtual/KKCoTheBundle'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
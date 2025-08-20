System.register("chunks:///_virtual/KKLoadBundle",["./KKLoadLayer.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/KKLoadLayer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./LayerBase.ts","./kk.ts","./KKGameUIConf.ts","./AsyncHelper.ts","./AsyncQueue.ts","./SkinManager.ts"],(function(e){var n,t,a,i,s,o,r,l,u,c,g,d,h,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){a=e.cclegacy,i=e.Sprite,s=e.Label,o=e._decorator,r=e.assetManager},function(e){l=e.LayerBase},function(e){u=e.default},function(e){c=e.KKLayerConf,g=e.KKBundleConf},function(e){d=e.default},function(e){h=e.AsyncQueue},function(e){p=e.GameType}],execute:function(){var f,y,b,m,L,K,k;a._RF.push({},"3bafdJhadZD76O+gnSXPCVd","KKLoadLayer",void 0);const{ccclass:A,property:C}=o;e("KKLoadLayer",(f=A("KKLoadLayer"),y=C(i),b=C(s),f((K=n((L=class extends l{constructor(...e){super(...e),t(this,"pb",K,this),t(this,"lb",k,this)}onLoad(){}start(){const e=new h,n=[g.Audios,g.Common,g.Home,g.CoTuong,g.Banqi],t=[{bundle:g.Audios,message:"Đang tải tệp âm thanh"},{bundle:g.Common,message:"Đang tải giao diện"},{bundle:g.Home,message:"Đang tải trang chủ"},{bundle:g.CoTuong,message:"Thiết lập giao diện cờ tướng"},{bundle:g.Banqi,message:"Thiết lập giao diện cờ up"}],a=n.length+t.length+1;let i=0;const s=(e=0,n="")=>{const t=(i+e)/a;this.pb.fillRange=t,this.lb.string=`Đang triển khai trận cờ ${Math.floor(100*t)}%`};n.forEach((n=>{e.push((e=>{s(0,`Đang tải bundle: ${n}`),d.loadBundleAsync(n).then((()=>{i++,s(0,`Đã tải bundle: ${n}`),e()}))}))})),t.forEach((n=>{e.push((e=>{d.loadDirAsync(r.getBundle(n.bundle),"/",((e,t)=>{s(e/t,n.message)})).then((()=>{i++,s(0,`${n.message}`),e()}))}))})),e.push((e=>{s(0,"Đang tải skin"),u.skinsMgr.getSkinManager(p.COTUONG).loadAllSkinAssets().then((()=>{u.skinsMgr.getSkinManager(p.COTUONG).getListSkin(),i++,s(0,"Tải skin xong"),e()}))})),e.complete=()=>{s(0,"Tải hoàn tất"),this.handleDone()},e.play()}handleDone(){u.uiMgr.preLoadLayerAsync(c.Auth).then((()=>{u.uiMgr.goLayerAsync(c.Auth)}))}}).prototype,"pb",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=n(L.prototype,"lb",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=L))||m));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/KKLoadBundle', 'chunks:///_virtual/KKLoadBundle'); 
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
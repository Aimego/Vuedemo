webpackJsonp([4],{o9cx:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t("fZjL"),a=t.n(i),n={name:"Use",data:function(){return{isUse:0!=a()(this.$store.state.use).length}},methods:{Myuse:function(){this.$router.push("/login")}}},c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"Person"},[e.isUse?t("div",{staticClass:"Person-message"},[t("div",[e._v(e._s(e.$store.state.use.name))]),e._v(" "),t("div",[e._v("身份编码 : "+e._s(e.$store.state.use.id))]),e._v(" "),t("div",[e._v("查看或编辑个人动态 >")])]):t("div",{staticClass:"Person-message"},[t("div",[t("el-row",[t("el-button",{attrs:{round:""},on:{click:e.Myuse}},[e._v("登录")]),e._v(" "),t("el-button",{attrs:{round:""},on:{click:e.Myuse}},[e._v("注册")])],1)],1)]),e._v(" "),t("div",{staticClass:"Person-img"},[e.isUse?t("el-avatar",{attrs:{size:100,src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}}):t("el-avatar",{attrs:{size:100,src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}})],1)]),e._v(" "),e._m(0),e._v(" "),t("el-empty",{attrs:{"image-size":250}})],1)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"Mes-item"},[t("div",{staticClass:"Mes-item-icon1"},[e._v("身份认证")]),e._v(" "),t("div",{staticClass:"Mes-item-icon2"},[e._v("我的任务")]),e._v(" "),t("div",{staticClass:"Mes-item-icon3"},[e._v("智能客服")]),e._v(" "),t("div",{staticClass:"Mes-item-icon4"},[e._v("我的评价")]),e._v(" "),t("div",{staticClass:"Mes-item-icon5"},[e._v("我的收藏")])])}]};var r=t("VU/8")(n,c,!1,function(e){t("ur3F")},null,null);s.default=r.exports},ur3F:function(e,s){}});
//# sourceMappingURL=4.eb97105ce60abf8fa431.js.map